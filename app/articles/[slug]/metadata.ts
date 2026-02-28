import { Metadata } from "next";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { siteConfig } from "@/_data/site-config";

const mdxSource = createMDXSource(docs, meta);
const articleSource = loader({
  baseUrl: "/articles",
  source: {
    files: mdxSource.files,
  },
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return {
        title: "Article Not Found",
        description: "The requested article could not be found.",
      };
    }

    const page = articleSource.getPage([slug]);

    if (!page) {
      return {
        title: "Article Not Found",
        description: "The requested article could not be found.",
      };
    }

    const ogUrl = `${siteConfig.url}/articles/${slug}`;
    const ogImage = `${ogUrl}/opengraph-image`;

    return {
      title: page.data.title,
      description: page.data.description,
      keywords: [
        page.data.title,
        ...(page.data.tags || []),
        "Articles",
        "Article",
        "Web Development",
        "Programming",
        "Technology",
        "Software Engineering",
      ],
      authors: [
        {
          name: page.data.author || "Magic UI",
          url: siteConfig.url,
        },
      ],
      creator: page.data.author || "Magic UI",
      publisher: "Magic UI",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        title: page.data.title,
        description: page.data.description,
        type: "article",
        url: ogUrl,
        publishedTime: page.data.date,
        authors: [page.data.author || "Magic UI"],
        tags: page.data.tags,
        images: [
          {
            url: page.data.thumbnail || ogImage,
            width: 1200,
            height: 630,
            alt: page.data.title,
          },
        ],
        siteName: siteConfig.name,
      },
      twitter: {
        card: "summary_large_image",
        title: page.data.title,
        description: page.data.description,
        images: [page.data.thumbnail || ogImage],
        creator: "@dillionverma",
        site: "@dillionverma",
      },
      alternates: {
        canonical: ogUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }
}

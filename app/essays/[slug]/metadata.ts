import { Metadata } from 'next';
import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { siteConfig } from '@/_data/site-config';
import type { EssayPageData } from '@/types/essay';

const mdxSource = createMDXSource(docs, meta);
const essaySource = loader({
    baseUrl: '/essays',
    source: {
        get files() {
            return (mdxSource as unknown as { files(): unknown[] }).files();
        },
    } as Parameters<typeof loader>[0]['source'],
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
                title: 'Essay Not Found',
                description: 'The requested essay could not be found.',
            };
        }

        const page = essaySource.getPage([slug]);

        if (!page) {
            return {
                title: 'Essay Not Found',
                description: 'The requested essay could not be found.',
            };
        }

        const data = page.data as EssayPageData;
        const ogUrl = `${siteConfig.url}/essays/${slug}`;
        const baseUrl = siteConfig.url.replace(/\/$/, '');
        const thumbnailPath = data.thumbnail;
        const thumbnailUrl =
            thumbnailPath &&
            (thumbnailPath.startsWith('http')
                ? thumbnailPath
                : `${baseUrl}${thumbnailPath.startsWith('/') ? thumbnailPath : `/${thumbnailPath}`}`);

        const generatedOgUrl = `${ogUrl}/opengraph-image`;
        const ogImageUrl = thumbnailUrl || generatedOgUrl;
        const ogImages = thumbnailUrl
            ? [{ url: ogImageUrl, alt: data.title }]
            : [
                  {
                      url: ogImageUrl,
                      width: 1200,
                      height: 630,
                      alt: data.title,
                  },
              ];

        return {
            title: data.title,
            description: data.description,
            keywords: [
                data.title,
                ...(data.tags || []),
                'Essays',
                'Essay',
                'Web Development',
                'Programming',
                'Technology',
                'Software Engineering',
            ],
            authors: [
                {
                    name: data.author || 'Damola Oladipo',
                    url: siteConfig.url,
                },
            ],
            creator: data.author || 'Damola Oladipo',
            publisher: 'Damola Oladipo',
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
            openGraph: {
                title: data.title,
                description: data.description,
                type: 'article',
                url: ogUrl,
                publishedTime: data.date,
                authors: [data.author || 'Damola Oladipo'],
                tags: data.tags,
                images: ogImages,
                siteName: siteConfig.name,
            },
            twitter: {
                card: 'summary_large_image',
                title: data.title,
                description: data.description,
                images: [ogImageUrl],
                creator: '@damolaoladipo',
                site: '@damolaoladipo',
            },
            alternates: {
                canonical: ogUrl,
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Essay Not Found',
            description: 'The requested essay could not be found.',
        };
    }
}

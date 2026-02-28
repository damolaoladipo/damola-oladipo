import { Metadata } from "next";
import { siteConfig } from "@/_data/site-config";

export const metadataKeywords = [
    "Article",
    "React",
    "MagicUI Articles",
    "MagicUI Articles Template",
    "MagicUI Articles Template Next.js",
    "MagicUI Articles Template Tailwind",
    "MagicUI Articles Template Shadcn",
    "Next.js Articles",
    "React Articles",
    "Web Development",
    "Tutorials",
    "MDX Articles",
    "Modern Articles Template",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "MagicUI Team",
            url: "https://magicui.design",
        },
    ],
    creator: "MagicUI",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@magicui_design",
    },
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
};
import { Metadata } from "next";
import { siteConfig } from "@/_data/site-config";

export const metadataKeywords = [
    "Essay",
    "React",
    "Damola Essays",
    "Damola Essays Template",
    "Damola Essays Next.js",
    "Damola Essays Tailwind",
    "Next.js Essays",
    "React Essays",
    "Web Development",
    "Tutorials",
    "MDX Essays",
    "Design Engineering",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Damola Oladipo",
            url: siteConfig.url,
        },
    ],
    creator: "Damola Oladipo",
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
        creator: "@damolaoladipo",
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

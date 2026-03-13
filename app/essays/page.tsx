import type { Metadata } from 'next';
import { siteConfig } from '@/_data/site-config';
import Essays from '@/components/sections/essays';

const essaysOgImage =
    siteConfig.ogImage.startsWith('http')
        ? siteConfig.ogImage
        : `${siteConfig.url.replace(/\/$/, '')}${siteConfig.ogImage.startsWith('/') ? siteConfig.ogImage : `/${siteConfig.ogImage}`}`;

export const metadata: Metadata = {
    openGraph: {
        url: `${siteConfig.url}/essays`,
        title: `Essays - ${siteConfig.name}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
        type: 'website',
        images: [
            {
                url: essaysOgImage,
                width: 1200,
                height: 630,
                alt: 'Essays - Damola Oladipo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Essays - ${siteConfig.name}`,
        description: siteConfig.description,
        images: [essaysOgImage],
    },
};

export default function EssaysPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>;
}) {
    return <Essays searchParams={searchParams} />;
}

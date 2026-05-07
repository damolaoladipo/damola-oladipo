import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/sections/footer';
import Header from '@/components/sections/nav-bar';
import { absoluteOgImageUrl, siteConfig } from '@/_data/site-config';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { metadataKeywords } from './metadata';
//import Newsletter from '@/components/sections/newsletter';

const useSora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
});

const defaultOg = absoluteOgImageUrl();

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.url,
        },
    ],
    icons: {
        icon: [{ url: '/blocks/damola.svg', type: 'image/svg+xml' }],
        shortcut: '/blocks/damola.svg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: defaultOg,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        creator: '@damolaoladipo',
        images: [defaultOg],
    },
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${useSora.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    defaultTheme="system"
                    disableTransitionOnChange
                >
                    <div className="relative flex flex-col w-full min-h-screen inset-0 overflow-x-clip">
                        <Header />
                        <main className="flex-grow">
                            {children}
                            <Analytics />
                            <SpeedInsights />
                        </main>
                        {/* <Newsletter /> */}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

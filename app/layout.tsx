import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/sections/footer';
import Header from '@/components/sections/nav-bar';
import { siteConfig } from '@/_data/site-config';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { metadataKeywords } from './metadata';
import Newsletter from '@/components/sections/newsletter';

const useSora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
});

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
                        <Newsletter />
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

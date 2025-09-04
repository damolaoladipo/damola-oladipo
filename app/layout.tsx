import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app-provider";
import { Footer } from "@/components/sections/footer";
import Header from "@/components/sections/nav-bar";
import { siteConfig } from "@/_data/site-config";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const useSora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "Lagos",
    "Abuja",
    "London",
    "Manchester",
    "Product Manager",
    "Technical Product Manager",
    "Portfolio",
    "Resume",
    "Mobile Engineer",
    "Full-Stack Engineer",
    "Developer"
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: "damolaoladipo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@damolaoladipo",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        
        <AppProvider>

          <div className="relative flex flex-col w-full min-h-screen inset-0 ">
            <Header />
            <main className="flex-grow">{children}
                      <Analytics/>
        <SpeedInsights/>
            </main>
            <Footer />
          </div>

        </AppProvider>
      </body>
    </html>
  );
}

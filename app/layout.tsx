import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app-provider";
import { Footer } from "@/components/sections/footer";
import Header from "@/components/sections/nav-bar";

const useSora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damola Oladipo - Product Engineer ",
  description: "A Product Engineer is in town",
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

          <div className="relative z-0 flex flex-col w-full min-h-screen inset-0 ">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>

        </AppProvider>
      </body>
    </html>
  );
}

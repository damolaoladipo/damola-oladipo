import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${useSora.variable} ${useSora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

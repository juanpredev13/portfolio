import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import { Fira_Mono } from "next/font/google";
import Navbar from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

import "@/styles/globals.css";
import "@/styles/main.css";


const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juanpredev",
  description: "Web developer",
  metadataBase: new URL('https://juanpre.dev/opengraph-image.jpg'),
  openGraph: {
    title: 'Juanpredev',
    description: 'Creative Web Developer Portfolio',
    url: 'https://juanpre.dev',
    siteName: 'Juanpre WebSite',
    images: [
      {
        url: 'https://juanpre.dev/images/man23.webp',
        secureUrl: 'https://juanpre.dev/images/man23.webp',
        width: 1200,
        height: 630,
        alt: 'Juanpre - Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juanpredev - Web Developer & Creative Portfolio',
    description: 'Creative Web Developer Portfolio',
    images: ['https://juanpre.dev/images/man23.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="/u/script.js" data-website-id="7db19975-013f-4646-8b49-dc5c0b9a2d87" strategy="afterInteractive" />
      <body className={`${fira_mono.className} antialiased flex flex-col justify-between absolute inset-0 overflow-auto bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#151515`}>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#7af42a]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#2ae8c4]/20 to-transparent blur-3xl pointer-events-none"></div>
        {/* Radial gradient overlay */}
        <Navbar />
        {/* <Sidebar /> */}
        <div className="container">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}

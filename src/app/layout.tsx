import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Navbar from "../layouts/nav";

import "../css/globals.css";

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juanpredev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Navbar from "../layouts/nav";
import Footer from "../layouts/footer";
import Sidebar from "../layouts/sidebar";



import "../css/globals.css";
import "../css/main.css";


const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juanpredev",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_mono.className} antialiased flex flex-col justify-between absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#151515`}>
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#7af42a]/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#2ae8c4]/20 to-transparent blur-3xl"></div>
            {/* Radial gradient overlay */}
        <Navbar />
        {/* <Sidebar /> */}
        <div className="container">
          {children}
        </div>
        <Footer />

      
      
      </body>
    </html>
  );
}

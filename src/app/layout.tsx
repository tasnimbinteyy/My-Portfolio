"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/ui/NavbarDemo";
import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
import About_Me from "@/components/ui/About_Me";
import { ThemeProvider } from "next-themes";
import FooterDemo from "@/components/ui/FooterDemo";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem> 
          <NavbarDemo />
          <HeroSectionOne />
          <About_Me />
          {children}
         <FooterDemo /> 
         </ThemeProvider> 
      </body>
    </html>
  );
}

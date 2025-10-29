import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Connect Hair Extensions - Premium Hair Extensions Since 2011",
    template: "%s | Connect Hair Extensions"
  },
  description: "Premium hair extensions trusted by celebrities and featured in Cosmopolitan. Clip-in, tape-in, and ponytail extensions with professional installation available.",
  keywords: ["hair extensions", "clip-in extensions", "ponytail extensions", "tape-in extensions", "human hair extensions", "celebrity hair extensions"],
  authors: [{ name: "Connect Hair Extensions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connecthairextensions.com",
    siteName: "Connect Hair Extensions",
    title: "Connect Hair Extensions - Premium Hair Extensions",
    description: "Premium hair extensions trusted by celebrities since 2011. Professional quality and expert installation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Hair Extensions",
    description: "Premium hair extensions trusted by celebrities since 2011.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

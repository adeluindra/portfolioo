
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { profile } from "@/data/profile";
import { indexingEnabled, siteUrl } from "@/lib/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const siteTitle = `${profile.fullName} | ${profile.role}`;

export const metadata: Metadata = {
  title: siteTitle,
  description: profile.shortIntro,

  applicationName: "MSAL Portfolio",
  creator: profile.fullName,
  publisher: profile.fullName,

  ...(siteUrl
    ? { metadataBase: new URL(siteUrl) }
    : {}),

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MSAL Portfolio",
    title: siteTitle,
    description: profile.shortIntro,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.shortIntro,
  },

  robots: {
    index: indexingEnabled,
    follow: indexingEnabled,
    googleBot: {
      index: indexingEnabled,
      follow: indexingEnabled,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}

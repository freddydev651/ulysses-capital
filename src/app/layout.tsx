// -----------------------------------------------------
// app/layout.tsx
// Global layout for your Next.js app.
// Provides overall styling, fonts, and global providers.
// This layout is used as fallback if no locale is specified.
// -----------------------------------------------------

import type { Metadata } from "next";
import { Geist, Geist_Mono, Judson } from "next/font/google";
import "../styles/globals.css";

// 1) Setup fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const judson = Judson({
  variable: "--font-judson",
  subsets: ["latin"],
  weight: "400",
});

// 2) Use the Next.js Metadata API
export const metadata: Metadata = {
  title: {
    template: "%s | Ulysses Capital",
    default: "Ulysses Capital (율리시스캐피탈) | Investment Management Firm",
  },
  description:
    "Ulysses Capital is a diversified investment management firm specializing in equities, fixed income/debt, venture capital, real estate, and commodities.",
  keywords: [
    "investment management",
    "private equity",
    "venture capital",
    "real estate investment",
    "asset management",
    "Korea investment",
    "Ulysses Capital",
  ],
  authors: [{ name: "Ulysses Capital" }],
  creator: "Ulysses Capital",
  publisher: "Ulysses Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ulyssescap.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ulysses Capital (율리시스캐피탈) | Investment Management Firm",
    description:
      "Ulysses Capital is a diversified investment management firm specializing in equities, fixed income/debt, venture capital, real estate, and commodities.",
    url: "https://ulyssescap.com",
    siteName: "Ulysses Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulysses Capital | Investment Management Firm",
    description:
      "Ulysses Capital is a diversified investment management firm specializing in equities, fixed income/debt, venture capital, real estate, and commodities.",
    creator: "@ulyssescapital",
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
        className={`${geistSans.variable} ${geistMono.variable} ${judson.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

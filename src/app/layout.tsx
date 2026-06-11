import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unsucck Marketing — Marketing Audit Agency in Nairobi",
  description:
    "We find the leaks in your marketing funnel. Nairobi's premier marketing audit agency — data-driven audits, actionable insights, measurable growth.",
  keywords: [
    "marketing audit",
    "Nairobi marketing agency",
    "digital marketing audit",
    "marketing strategy",
    "Kenya marketing agency",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Unsucck Marketing — Stop Guessing. Start Growing.",
    description:
      "Data-driven marketing audits for businesses ready to level up. Based in Nairobi, serving the world.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="scanline" />
        <CursorGlow />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

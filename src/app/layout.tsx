import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { OrganizationSchema } from "@/lib/json-ld";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: OrganizationSchema() }}
        />
        <div className="scanline" />
        <CursorGlow />
        <WhatsAppWidget />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

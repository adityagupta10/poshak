import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { storeInfo } from "@/lib/data";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"]
});

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const metadataBase = new URL("https://poshak.dev");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${storeInfo.name} | ${storeInfo.tagline}`,
    template: `%s | ${storeInfo.name}`
  },
  description:
    "A devotional marketplace for idol clothes, ornaments, crowns, and shringar sets for Krishna, Radha, Ganesh, Lakshmi, Shiva, Durga, Sai Baba, and more.",
  keywords: [
    "Poshak",
    "Laddu Gopal dress",
    "Idol ornaments",
    "Radha Krishna shringar",
    "Ganesh poshak",
    "Hindu deity clothes"
  ],
  openGraph: {
    title: `${storeInfo.name} - ${storeInfo.tagline}`,
    description: "Elegant, handcrafted poshak and ornaments for your beloved deities.",
    url: metadataBase,
    siteName: "Poshak",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/poshak-og-image/1200/630",
        width: 1200,
        height: 630,
        alt: "Poshak devotional marketplace"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${storeInfo.name} - ${storeInfo.tagline}`,
    description: "Dress the Divine with handcrafted devotion.",
    images: ["https://picsum.photos/seed/poshak-og-image/1200/630"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

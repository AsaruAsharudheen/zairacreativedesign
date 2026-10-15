import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import IntroLoader from "@/components/IntroLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuoteModal from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import { siteConfig } from "@/data/siteConfig";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#C99583",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Curtains, Blinds & Interiors`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "curtains and blinds",
    "luxury curtains",
    "custom curtains",
    "zebra blinds",
    "roller blinds",
    "roman blinds",
    "venetian blinds",
    "wooden blinds",
    "sheer curtains",
    "blackout curtains",
    "interior design",
    "gypsum false ceiling",
    "metal fabrication",
    "staircase design",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Luxury Curtains, Blinds & Interior Craftsmanship`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Zaira Creative Design Luxury Curtains and Interior Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Curtains & Interiors`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#25211F] antialiased selection:bg-[#F7EFEB] selection:text-[#78564C]">
        <QuoteModalProvider>
          <IntroLoader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <QuoteModal />
          <FloatingWhatsApp />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

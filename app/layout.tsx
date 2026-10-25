import type { Metadata } from "next";
import { Hind_Siliguri, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-hind-siliguri",
});

const siteUrl = "https://hopetheorylabs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hope Theory Labs — Fast websites for Bangladeshi businesses",
  description:
    "Mobile-first websites with WhatsApp ordering and cash on delivery, built in Dhaka. We build a free concept of your site first. From ৳25,000.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hope Theory Labs — Fast websites for Bangladeshi businesses",
    description:
      "Mobile-first websites with WhatsApp ordering and cash on delivery, built in Dhaka. We build a free concept of your site first. From ৳25,000.",
    siteName: "Hope Theory Labs",
    locale: "en_BD",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Hope Theory Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope Theory Labs — Fast websites for Bangladeshi businesses",
    description:
      "Mobile-first websites with WhatsApp ordering and cash on delivery, built in Dhaka. We build a free concept of your site first. From ৳25,000.",
    images: ["/og.svg"],
  },
  other: {
    "theme-color": "#0F1B2D",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hope Theory Labs",
  url: siteUrl,
  email: "hopetheorybd@gmail.com",
  telephone: "+8801718463471",
  areaServed: "Bangladesh",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={[
        spaceGrotesk.variable,
        inter.variable,
        jetbrainsMono.variable,
        hindSiliguri.variable,
      ].join(" ")}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

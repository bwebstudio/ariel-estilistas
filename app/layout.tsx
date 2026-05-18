import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://arielestilistas.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.shortDescription,
  keywords: [
    "peluquería San Miguel",
    "salón de belleza San Miguel",
    "coloración",
    "balayage",
    "alisados",
    "Ariel Estilistas",
    "peluquería Buenos Aires",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BUSINESS.name,
  image: `${siteUrl}/og.jpg`,
  url: siteUrl,
  telephone: BUSINESS.whatsappDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.addressLine1,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.province,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.socialProof.directoryRating,
    bestRating: BUSINESS.socialProof.directoryBestRating,
    reviewCount: BUSINESS.socialProof.directoryReviews,
  },
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="bg-carbon-800 text-ivory font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

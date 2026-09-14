import type { Metadata } from "next";
import { Oswald, Share_Tech_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { film, links, siteUrl } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${film.title} (2013) | Official Site`,
    template: `%s | ${film.title}`,
  },
  description: film.metaDescription,
  keywords: [
    "Rabid Love",
    "Paul J. Porter",
    "1980s horror",
    "indie horror",
    "Tubi",
    "Hayley Derryberry",
  ],
  authors: [{ name: "Paul J. Porter" }],
  openGraph: {
    type: "video.movie",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rabid Love",
    title: "Rabid Love (2013) — Catch the virus",
    description: film.logline,
    images: [
      {
        url: "/assets/key-art.jpg",
        width: 1069,
        height: 520,
        alt: "Rabid Love key art — Madness can be contagious",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabid Love (2013) — Catch the virus",
    description: film.logline,
    images: ["/assets/key-art.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${oswald.variable} ${shareTech.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cyan focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <p className="sr-only">
          Official site for {film.title}. Watch on Tubi: {links.tubi}
        </p>
      </body>
    </html>
  );
}

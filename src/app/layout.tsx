import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import { sans, serif } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.name}` },
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: ["tricologista", "tricologia", "Manaus", "saúde capilar", "couro cabeludo", "Rodolfo Freitas"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${site.name} · ${site.role}`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F8F3ED",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

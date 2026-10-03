import type { Metadata } from "next";
import { site } from "@/data/site";
import { LinkBio } from "@/components/LinkBio";

export const metadata: Metadata = {
  title: { absolute: site.seo.linkTitle },
  description: site.seo.linkDescription,
  alternates: { canonical: "/link" },
  openGraph: { title: site.seo.linkTitle, description: site.seo.linkDescription, url: "/link" },
};

/** Tela 1 — página de apresentação / link da bio (Instagram). */
export default function LinkPage() {
  return <LinkBio />;
}

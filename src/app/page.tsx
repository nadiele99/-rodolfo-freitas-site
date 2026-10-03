import type { Metadata } from "next";
import { site } from "@/data/site";
import { localBusinessJsonLd } from "@/lib/schema";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/MotionProvider";
import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Instagram } from "@/sections/Instagram";
import { Location } from "@/sections/Location";
import { Process } from "@/sections/Process";
import { Results } from "@/sections/Results";
import { Services } from "@/sections/Services";
import { WhatsAppCTA } from "@/sections/WhatsAppCTA";

export const metadata: Metadata = {
  title: { absolute: site.seo.title },
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: site.seo.title, description: site.seo.description, url: "/" },
};

/** Tela 2 — site institucional completo (one-page). */
export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-full bg-forest px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Results />
        <Process />
        <WhatsAppCTA />
        <Location />
        <Instagram />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
    </MotionProvider>
  );
}

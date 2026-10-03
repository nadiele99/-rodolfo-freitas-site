import Image from "next/image";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/links";
import { Button } from "@/components/Button";
import { Monogram } from "@/components/Monogram";
import { WhatsAppIcon } from "@/components/icons";
import retrato from "../../public/images/rodolfo-retrato.jpg";

/**
 * Hero editorial: tipografia à esquerda, retrato emoldurado à direita.
 * Entrada com CSS (sem JS) — rápido e suave.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 lg:pt-32">
      {/* marca d'água */}
      <Monogram grow style={{ animationDelay: "0.4s" }} className="pointer-events-none absolute -left-24 top-24 h-[34rem] w-auto text-forest/[0.035] sm:h-[44rem] lg:-left-10 lg:top-16 lg:h-[52rem]" />

      <div className="container-ed relative grid items-center gap-16 pb-24 lg:grid-cols-12 lg:gap-8 lg:pb-36">
        <div className="lg:col-span-7 lg:pr-10">
          <p className="eyebrow animate-rise flex items-center gap-4 text-bronze-deep" style={{ animationDelay: "0.1s" }}>
            <span aria-hidden className="h-px w-10 bg-bronze/70" />
            {site.city} — {site.state}
          </p>

          <h1 id="hero-title" className="mt-10">
            <span
              className="animate-rise block font-serif text-[3.1rem] leading-[0.98] tracking-[-0.02em] text-forest sm:text-[4.4rem] lg:text-[5.2rem] xl:text-[5.8rem]"
              style={{ animationDelay: "0.2s" }}
            >
              Rodolfo
              <br />
              Freitas
            </span>
            <span className="sr-only"> — </span>
            <span
              className="animate-rise mt-7 block text-[0.78rem] font-medium uppercase tracking-[0.42em] text-ink-soft"
              style={{ animationDelay: "0.35s" }}
            >
              {site.role} em {site.city}
            </span>
          </h1>

          <p
            className="animate-rise mt-12 max-w-sm font-serif text-[1.45rem] italic leading-snug text-ink sm:text-[1.65rem]"
            style={{ animationDelay: "0.5s" }}
          >
            {site.tagline}
          </p>

          <div className="animate-rise mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5" style={{ animationDelay: "0.65s" }}>
            <Button href={whatsappHref()} icon={<WhatsAppIcon className="size-4" />}>
              Agendar avaliação
            </Button>
            <Button href="/#tratamentos" variant="outline">
              Conhecer os tratamentos
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <div className="animate-rise relative mr-4 max-w-[26rem] sm:mx-auto lg:mr-0 lg:max-w-none" style={{ animationDelay: "0.3s" }}>
            {/* moldura deslocada, linha fina bronze */}
            <div aria-hidden className="absolute -bottom-4 -right-4 left-4 top-4 border border-bronze/50 sm:-bottom-5 sm:-right-5 sm:left-5 sm:top-5" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d9d9d9]">
              <Image
                src={retrato}
                alt="Retrato de Rodolfo Freitas, tricologista, de blusa de gola alta preta e óculos, com as mãos unidas"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 26rem"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

import Image from "next/image";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/links";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import emPe from "../../public/images/rodolfo-em-pe.jpg";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-y bg-paper">
      <div className="container-ed grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          {/* moldura em arco: eco do folículo */}
          <div className="relative mx-auto aspect-[3/4] max-w-[24rem] overflow-hidden rounded-t-full bg-[#cfcfcf] lg:max-w-none">
            <Image
              src={emPe}
              alt="Rodolfo Freitas em pé, de blusa preta de gola alta e calça clara, em estúdio de fundo cinza"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 32vw, 24rem"
              className="object-cover object-[50%_15%]"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionTitle index="01" eyebrow="Apresentação" title={site.about.title} id="sobre-title">
            {site.about.paragraphs.map((p) => (
              <p key={p} className="mt-5 first:mt-0">
                {p}
              </p>
            ))}
          </SectionTitle>

          {site.about.credentials.length > 0 && (
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3 border-l border-bronze/50 pl-6 text-sm text-ink-soft">
                {site.about.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <blockquote className="mt-14 border-t border-line pt-10">
              <p className="font-serif text-[1.7rem] italic leading-snug text-forest">“{site.motto}”</p>
            </blockquote>
            <div className="mt-10">
              <Button href={whatsappHref()} variant="text">
                Agendar avaliação
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

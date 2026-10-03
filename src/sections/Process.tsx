import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

/** Fluxo de atendimento com linha fina (vertical no mobile, horizontal no desktop). */
export function Process() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="section-y">
      <div className="container-ed">
        <SectionTitle
          index="04"
          eyebrow="Atendimento"
          id="atendimento-title"
          title={
            <>
              Como funciona o <span className="italic">acompanhamento</span>
            </>
          }
        />

        <ol className="relative mt-20 grid gap-14 pl-10 lg:mt-28 lg:grid-cols-4 lg:gap-10 lg:pl-0 lg:pt-14">
          {/* linha guia */}
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto" />
          {site.process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative">
              <span
                aria-hidden
                className="absolute -left-10 top-1.5 size-[11px] rounded-full border border-bronze bg-cream lg:-top-14 lg:left-0"
              />
              <span className="font-serif text-[2.6rem] leading-none text-bronze-deep/80 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-forest">{step.title}</h3>
              <p className="mt-4 max-w-[17rem] text-[0.95rem] leading-[1.8] text-ink-soft">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

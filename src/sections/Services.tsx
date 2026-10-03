import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-title" className="section-y">
      <div className="container-ed grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              index="03"
              eyebrow="Tratamentos"
              id="tratamentos-title"
              title={
                <>
                  Tratamentos <span className="italic">capilares</span>
                </>
              }
            >
              <p>Os tratamentos são indicados após a avaliação, de acordo com o seu caso.</p>
              <p className="mt-5 text-sm text-ink-soft/80">Toque em um tratamento para tirar dúvidas pelo WhatsApp.</p>
            </SectionTitle>
          </div>
        </div>

        <ul className="border-t border-line lg:col-span-7 lg:col-start-6">
          {site.services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={Math.min(i, 4) * 0.05}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { site } from "@/data/site";
import { addressLines, mapsDirectionsHref, mapsEmbedSrc } from "@/lib/links";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Location() {
  const a = addressLines();
  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="section-y">
      <div className="container-ed grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionTitle
            index="05"
            eyebrow="Localização"
            id="localizacao-title"
            title={
              <>
                Atendimento em <span className="italic">{site.city}</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <address className="mt-10 text-[1.02rem] not-italic leading-[1.9] text-ink">
              {a.line1}
              {a.line1b && (
                <>
                  <br />
                  {a.line1b}
                </>
              )}
              <br />
              {a.line2}
              <br />
              <span className="text-ink-soft">CEP {a.postalCode}</span>
            </address>

            {site.hours.length > 0 && (
              <dl className="mt-8 space-y-2 text-sm text-ink-soft">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex gap-4">
                    <dt className="min-w-24">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-10">
              <Button href={mapsDirectionsHref()} variant="outline">
                Como chegar
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige sm:aspect-[16/11]">
            <iframe
              title={`Mapa: ${a.line1}, ${a.line2}`}
              src={mapsEmbedSrc()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 [filter:grayscale(0.85)_sepia(0.18)_contrast(0.95)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { site } from "@/data/site";
import { whatsappHref } from "@/lib/links";
import { Button } from "@/components/Button";
import { Monogram } from "@/components/Monogram";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppCTA() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-forest text-cream">
      <Monogram className="pointer-events-none absolute -right-20 -top-10 h-[130%] w-auto text-bronze/[0.09] lg:right-[6%]" />
      <div className="container-ed relative py-28 lg:py-40">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-4 text-bronze">
            <span aria-hidden className="h-px w-10 bg-bronze/60" />
            Agendamento
          </p>
          <h2 id="contato-title" className="mt-8 font-serif text-[2.4rem] leading-[1.08] text-balance sm:text-[3.2rem] lg:text-[4rem]">
            {site.cta.title}
          </h2>
          <p className="mt-8 max-w-md text-[0.97rem] leading-[1.85] text-cream/75">{site.cta.text}</p>
          <div className="mt-12">
            <Button href={whatsappHref()} variant="light" icon={<WhatsAppIcon className="size-4" />}>
              Falar pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

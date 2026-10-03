"use client";

import { AnimatePresence, m } from "motion/react";
import { useId, useState } from "react";
import { site } from "@/data/site";
import { siteMessage, whatsappHref } from "@/lib/links";
import { Button } from "@/components/Button";
import { Monogram } from "@/components/Monogram";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppIcon } from "@/components/icons";

type Concern = (typeof site.concerns)[number];

/**
 * "Qual é a sua queixa?" — o visitante escolhe a situação que mais se parece com a dele.
 * Desktop: índice à esquerda + painel verde à direita.
 * Celular: a própria linha se abre (sanfona) com o texto e o botão do WhatsApp.
 */
export function Concerns() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const items = site.concerns;
  const current = items[active];

  return (
    <section id="queixas" aria-labelledby="queixas-title" className="section-y">
      <div className="container-ed">
        <SectionTitle
          index="01"
          eyebrow="Sua queixa"
          id="queixas-title"
          title={
            <>
              O que está acontecendo com o <span className="italic">seu cabelo?</span>
            </>
          }
        >
          <p>Escolha a situação que mais se parece com a sua e fale direto com o Rodolfo.</p>
        </SectionTitle>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <ol className="border-t border-line lg:col-span-5" role="list">
            {items.map((c, i) => {
              const open = i === active;
              return (
                <Reveal as="li" key={c.slug} delay={Math.min(i, 4) * 0.05} className="border-b border-line">
                  <button
                    type="button"
                    id={`${baseId}-tab-${i}`}
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    aria-controls={`${baseId}-panel-${i}`}
                    className="group relative flex w-full items-baseline gap-5 py-6 text-left sm:gap-7"
                  >
                    <span
                      aria-hidden
                      className={`absolute -left-0 bottom-[-1px] h-px bg-bronze transition-all duration-700 ease-[var(--ease-soft)] ${
                        open ? "w-full" : "w-0 group-hover:w-16"
                      }`}
                    />
                    <span
                      className={`font-serif text-[1.05rem] tabular-nums transition-colors duration-500 ${
                        open ? "text-bronze-deep" : "text-ink-soft/60"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-serif text-[1.4rem] leading-tight transition-colors duration-500 sm:text-[1.6rem] ${
                          open ? "text-forest" : "text-ink/75 group-hover:text-forest"
                        }`}
                      >
                        {c.title}
                      </span>
                      <span className="mt-1.5 block text-[0.8rem] tracking-[0.02em] text-ink-soft">{c.tag}</span>
                    </span>
                    <span
                      aria-hidden
                      className={`relative size-3 shrink-0 self-center transition-transform duration-500 lg:hidden ${open ? "rotate-45" : ""}`}
                    >
                      <span className="absolute left-0 top-1/2 h-px w-3 bg-forest" />
                      <span className="absolute left-1/2 top-0 h-3 w-px bg-forest" />
                    </span>
                  </button>

                  {/* Celular: conteúdo abre dentro da linha */}
                  <AnimatePresence initial={false}>
                    {open && (
                      <m.div
                        key="mobile"
                        id={`${baseId}-panel-${i}`}
                        role="region"
                        aria-labelledby={`${baseId}-tab-${i}`}
                        className="overflow-hidden lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-8 pl-[2.6rem] sm:pl-[3.2rem]">
                          <p className="text-[0.97rem] leading-[1.8] text-ink-soft">{c.text}</p>
                          <div className="mt-6">
                            <ConcernCta concern={c} />
                          </div>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </ol>

          {/* Desktop: painel verde */}
          <div className="hidden lg:col-span-6 lg:col-start-7 lg:block">
            <div className="sticky top-28 overflow-hidden bg-forest text-cream">
              <Monogram className="pointer-events-none absolute -right-16 -top-8 h-[125%] w-auto text-bronze/[0.1]" />
              <AnimatePresence mode="wait">
                <m.div
                  key={current.slug}
                  id={`${baseId}-panel-${active}`}
                  role="region"
                  aria-labelledby={`${baseId}-tab-${active}`}
                  aria-live="polite"
                  className="relative flex min-h-[30rem] flex-col p-14 xl:p-16"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="eyebrow text-bronze">{current.tag}</p>
                  <h3 className="mt-6 max-w-sm font-serif text-[2.4rem] leading-[1.1]">{current.title}</h3>
                  <p className="mt-8 max-w-md text-[1rem] leading-[1.85] text-cream/80">{current.text}</p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/60">
                    Na avaliação, a causa é investigada e o cuidado é definido para o seu caso.
                  </p>
                  <div className="mt-auto pt-12">
                    <ConcernCta concern={current} light />
                  </div>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <Reveal className="mt-14 lg:mt-16">
          <p className="text-[0.95rem] text-ink-soft">
            Não encontrou a sua situação?{" "}
            <a
              href={whatsappHref(siteMessage("uma queixa capilar que não está na lista"))}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-ink/30 pb-0.5 text-forest transition-colors hover:border-forest"
            >
              Conte o que está acontecendo
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ConcernCta({ concern, light }: { concern: Concern; light?: boolean }) {
  return (
    <Button
      href={whatsappHref(siteMessage(concern.topic))}
      variant={light ? "light" : "primary"}
      icon={<WhatsAppIcon className="size-4" />}
      ariaLabel={`Falar sobre ${concern.title.toLowerCase()} no WhatsApp`}
    >
      Falar sobre isso
    </Button>
  );
}

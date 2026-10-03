"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/Reveal";

/**
 * Antes e depois — somente fotos reais configuradas em data/site.ts.
 * Sem fotos, exibe um comparador com placeholders identificados.
 */
export function Results() {
  const items = site.results;
  const [i, setI] = useState(0);
  const current = items[i];
  const total = Math.max(items.length, 1);

  return (
    <section id="resultados" aria-labelledby="resultados-title" className="section-y bg-paper">
      <div className="container-ed grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal as="header" className="lg:col-span-4">
          <p className="eyebrow flex items-center gap-4 text-bronze-deep">
            <span className="tabular-nums">03</span>
            <span aria-hidden className="h-px w-10 bg-bronze/70" />
            <span>Resultados</span>
          </p>
          <h2 id="resultados-title" className="mt-7 font-serif text-[2.1rem] leading-[1.12] text-forest sm:text-[2.6rem] lg:text-[3.1rem]">
            Antes <span className="italic">&amp;</span> depois
          </h2>
          <p className="mt-7 max-w-xs text-[0.97rem] leading-[1.85] text-ink-soft">
            Somente registros reais de pacientes, publicados com autorização.
          </p>
          <p className="mt-4 text-sm text-ink-soft/80">Arraste para comparar.</p>

          {items.length > 1 && (
            <div className="mt-12 flex items-center gap-5">
              <button
                type="button"
                onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                className="flex size-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                aria-label="Caso anterior"
              >
                ←
              </button>
              <span className="eyebrow tabular-nums text-ink-soft" aria-live="polite">
                {String(i + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setI((v) => (v + 1) % items.length)}
                className="flex size-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                aria-label="Próximo caso"
              >
                →
              </button>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <figure>
            <BeforeAfterSlider
              key={i}
              before={current?.before}
              after={current?.after}
              alt={current?.alt ?? "Comparação de antes e depois"}
            />
            {current?.caption && <figcaption className="mt-5 text-sm text-ink-soft">{current.caption}</figcaption>}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

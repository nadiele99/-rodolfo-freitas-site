"use client";

import Image from "next/image";
import { useState } from "react";
import type { ResultPair } from "@/data/site";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/Reveal";

/**
 * Antes e depois — galeria com quantos casos houver.
 * Comparador principal + trilho de miniaturas (rolagem horizontal no celular).
 * Sem fotos, exibe um comparador com placeholders identificados.
 */
export function ResultsGallery({ items }: { items: ResultPair[] }) {
  const [i, setI] = useState(0);
  const current = items[i];
  const total = items.length;
  const many = total > 1;
  const go = (d: number) => setI((v) => (v + d + total) % total);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="resultados" aria-labelledby="resultados-title" className="section-y bg-paper">
      <div className="container-ed grid items-center gap-x-8 gap-y-10 lg:grid-cols-12 lg:gap-y-14">
        <Reveal as="header" className="min-w-0 lg:col-span-4 lg:row-span-2">
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
          <p className="mt-4 text-sm text-ink-soft/80">Arraste a linha para comparar.</p>

          {many && (
            <div className="mt-12 flex items-center gap-5">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex size-11 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream"
                aria-label="Caso anterior"
              >
                <Chevron dir="left" />
              </button>
              <span className="eyebrow tabular-nums text-ink-soft" aria-live="polite">
                {pad(i + 1)} <span className="mx-1 inline-block h-px w-6 translate-y-[-3px] bg-ink/25" /> {pad(total)}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex size-11 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream"
                aria-label="Próximo caso"
              >
                <Chevron dir="right" />
              </button>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:col-span-7 lg:col-start-6">
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

        {many && (
          <Reveal delay={0.15} className="min-w-0 lg:col-span-7 lg:col-start-6 lg:-mt-6">
            <ul
              className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 lg:mt-4 [&::-webkit-scrollbar]:hidden"
              aria-label="Casos"
            >
              {items.map((it, idx) => (
                <li key={it.after} className="shrink-0 snap-start">
                  <button
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`Ver caso ${idx + 1}`}
                    aria-current={idx === i ? "true" : undefined}
                    className={`group relative block aspect-square w-20 overflow-hidden transition-opacity duration-500 sm:w-24 ${
                      idx === i ? "opacity-100" : "opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image src={it.after} alt="" fill sizes="96px" className="object-cover" />
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-bronze transition-transform duration-500 ${
                        idx === i ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                    <span className="eyebrow absolute left-2 top-2 text-[0.55rem]! text-cream drop-shadow">{pad(idx + 1)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
      <path d={dir === "left" ? "M14.5 6l-6 6 6 6" : "M9.5 6l6 6-6 6"} />
    </svg>
  );
}

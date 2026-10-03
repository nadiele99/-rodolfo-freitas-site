import type { Service } from "@/data/site";
import { siteMessage, whatsappHref } from "@/lib/links";
import { ArrowUpRight } from "lucide-react";
import { ServiceGlyph } from "./icons";

/**
 * Linha editorial de tratamento (não é uma "caixa").
 * Hover: a linha inferior se preenche em bronze, o ícone ganha cor e a seta avança.
 * Clique: abre o WhatsApp já perguntando sobre o tratamento.
 */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <a
      href={whatsappHref(siteMessage(service.name))}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 py-7 sm:grid-cols-[3rem_3rem_1fr_auto] sm:gap-x-6 sm:py-8"
      aria-label={`${service.name} — saber mais pelo WhatsApp`}
    >
      <span className="eyebrow hidden tabular-nums text-ink-soft/80 sm:block">{n}</span>
      <span className="flex size-9 items-center justify-center text-olive/70 transition-colors duration-500 group-hover:text-bronze-deep sm:size-12">
        <ServiceGlyph name={service.icon} className="size-7 sm:size-8" />
      </span>
      <span className="min-w-0">
        <span className="block font-serif text-[1.35rem] leading-tight text-forest transition-transform duration-700 ease-[var(--ease-soft)] group-hover:translate-x-1 sm:text-[1.7rem]">
          {service.name}
        </span>
        {service.description && (
          <span className="mt-2 block max-w-md text-sm leading-relaxed text-ink-soft">{service.description}</span>
        )}
      </span>
      <ArrowUpRight
        aria-hidden
        strokeWidth={1.2}
        className="size-5 text-ink-soft/60 transition-all duration-500 ease-[var(--ease-soft)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest"
      />
      {/* linhas: base fixa + preenchimento animado */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-bronze transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-x-100"
      />
    </a>
  );
}

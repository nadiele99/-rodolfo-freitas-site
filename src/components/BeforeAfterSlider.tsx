"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";

type Props = {
  before?: string;
  after?: string;
  alt: string;
  className?: string;
  /** Classe de proporção do quadro (ex.: "aspect-[5/8]" para fotos verticais). */
  aspectClass?: string;
};

/**
 * Comparador antes/depois.
 * - Arraste (mouse ou toque) em qualquer ponto da imagem.
 * - Teclado: setas ← → (via input range acessível).
 * - touch-action: pan-y — o scroll vertical da página continua funcionando no celular.
 * Sem imagens, renderiza placeholders claramente identificados.
 */
export function BeforeAfterSlider({ before, after, alt, className = "", aspectClass = "aspect-[4/5] sm:aspect-[5/4]" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const id = useId();

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => dragging.current && update(e.clientX);
  const onUp = () => (dragging.current = false);

  const placeholder = !before || !after;

  return (
    <div className={className}>
      <div
        ref={ref}
        className={`relative ${aspectClass} w-full cursor-ew-resize touch-pan-y select-none overflow-hidden bg-beige`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        {/* DEPOIS (base) */}
        <Layer src={after} alt={`${alt} — depois`} label="Depois" tone="after" placeholder={placeholder} />
        {/* ANTES (recortado) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Layer src={before} alt={`${alt} — antes`} label="Antes" tone="before" placeholder={placeholder} />
        </div>

        {/* Rótulos discretos */}
        <span className="eyebrow pointer-events-none absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[0.56rem]! text-forest sm:left-5 sm:top-5">Antes</span>
        <span className="eyebrow pointer-events-none absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[0.56rem]! text-forest sm:right-5 sm:top-5">Depois</span>

        {/* Divisor */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
          <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-cream" />
          <div className="absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/90 bg-forest/85 text-cream backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>

        {/* Controle acessível (teclado / leitores de tela) */}
        <label htmlFor={id} className="sr-only">
          Comparar antes e depois
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          className="peer absolute inset-0 size-full cursor-ew-resize opacity-0"
          style={{ pointerEvents: "none" }}
          aria-valuetext={`${Math.round(pos)}% antes`}
        />
        <span className="pointer-events-none absolute inset-0 ring-bronze-deep ring-inset peer-focus-visible:ring-2" aria-hidden />
      </div>
    </div>
  );
}

function Layer({
  src,
  alt,
  label,
  tone,
  placeholder,
}: {
  src?: string;
  alt: string;
  label: string;
  tone: "before" | "after";
  placeholder: boolean;
}) {
  if (!placeholder && src) {
    return <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 26rem, 100vw" className="object-cover" draggable={false} />;
  }
  return (
    <div
      className={`absolute inset-0 ${tone === "before" ? "bg-beige" : "bg-[#e2d4c0]"}`}
      role="img"
      aria-label={`Espaço reservado: foto real "${label.toLowerCase()}" a ser inserida`}
    >
      <span
        className={`eyebrow absolute bottom-10 w-[40%] -translate-x-1/2 text-center text-[0.55rem]! leading-relaxed text-ink-soft/80 ${
          tone === "before" ? "left-1/4" : "left-3/4"
        }`}
      >
        Foto real
        <br />
        {label} · a inserir
      </span>
    </div>
  );
}

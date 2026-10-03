import { MONOGRAM_VIEWBOX } from "./monogram-path";

/** Sprite único, baixado uma vez e reutilizado em todas as ocorrências. */
const SPRITE = "/brand/monogram-sprite.svg";

type Props = {
  className?: string;
  /** Rótulo acessível. Omitir quando o monograma for decorativo. */
  title?: string;
  /** Revela o símbolo de baixo para cima, como um fio crescendo do folículo. */
  grow?: boolean;
  style?: React.CSSProperties;
  /** "fine" = traço original (tamanhos grandes). "bold" = traço reforçado para tamanhos pequenos. */
  weight?: "fine" | "bold";
};

/**
 * Monograma oficial (versão flat / 1D): folículo + fio formando o R.
 * Usa currentColor — a cor vem do texto do elemento pai.
 */
export function Monogram({ className, title, grow, style, weight = "fine" }: Props) {
  return (
    <svg
      viewBox={MONOGRAM_VIEWBOX}
      className={[grow ? "animate-grow-up" : "", className].filter(Boolean).join(" ")}
      style={style}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <use href={`${SPRITE}#${weight === "bold" ? "r-bold" : "r"}`} />
    </svg>
  );
}

/** Assinatura tipográfica: RODOLFO FREITAS / — TRICOLOGISTA — */
export function Wordmark({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <span className={["flex flex-col items-start leading-none", className].filter(Boolean).join(" ")}>
      <span className={`font-serif uppercase tracking-[0.06em] ${compact ? "text-[0.95rem]" : "text-lg"}`}>
        Rodolfo Freitas
      </span>
      <span className={`eyebrow mt-1.5 !tracking-[0.42em] ${compact ? "!text-[0.5rem]" : "!text-[0.56rem]"} opacity-80`}>
        Tricologista
      </span>
    </span>
  );
}

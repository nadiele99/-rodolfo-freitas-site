import { Reveal } from "./Reveal";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  id?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

/**
 * Título de seção editorial: número + rótulo + linha fina + título serif (H2).
 */
export function SectionTitle({ index, eyebrow, title, id, tone = "light", align = "left", className = "", children }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal as="header" className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p
        className={`eyebrow flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${
          dark ? "text-bronze" : "text-bronze-deep"
        }`}
      >
        {index && <span className="tabular-nums">{index}</span>}
        <span aria-hidden className={`h-px w-10 ${dark ? "bg-bronze/60" : "bg-bronze/70"}`} />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className={`mt-7 font-serif text-[2.1rem] leading-[1.12] tracking-[-0.01em] text-balance sm:text-[2.6rem] lg:text-[3.1rem] ${
          dark ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-7 text-[0.97rem] leading-[1.85] ${dark ? "text-cream/75" : "text-ink-soft"}`}>{children}</div>
      )}
    </Reveal>
  );
}

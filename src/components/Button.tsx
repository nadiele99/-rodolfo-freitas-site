import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "light" | "text";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Abre em nova aba (WhatsApp, mapas, Instagram). */
  external?: boolean;
  icon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-deep border border-forest hover:border-forest-deep",
  outline:
    "border border-ink/25 text-ink hover:border-forest hover:bg-forest hover:text-cream",
  light:
    "bg-cream text-forest border border-cream hover:bg-beige hover:border-beige",
  text: "text-ink px-0! min-h-0! border-b border-ink/30 hover:border-ink rounded-none!",
};

/**
 * Botão-link da marca. Microinteração: a seta desliza levemente no hover.
 */
export function Button({ href, children, variant = "primary", external, icon, className = "", ariaLabel }: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const Arrow = isExternal ? ArrowUpRight : ArrowRight;
  const cls = [
    "group inline-flex min-h-[3.25rem] whitespace-nowrap items-center justify-center gap-3 rounded-full px-6",
    "text-[0.72rem] font-medium uppercase tracking-[0.16em]",
    "transition-[background-color,border-color,color] duration-500 ease-[var(--ease-soft)]",
    styles[variant],
    className,
  ].join(" ");

  const inner = (
    <>
      {icon && <span className="flex size-4 items-center justify-center">{icon}</span>}
      <span>{children}</span>
      <Arrow
        aria-hidden
        strokeWidth={1.4}
        className={`size-4 transition-transform duration-500 ease-[var(--ease-soft)] ${
          isExternal ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : "group-hover:translate-x-1"
        }`}
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}

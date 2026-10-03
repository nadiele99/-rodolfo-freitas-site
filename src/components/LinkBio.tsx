import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Leaf, MapPin, UserRound } from "lucide-react";
import { site } from "@/data/site";
import { addressLines, instagramHref, instagramLabel, mapsDirectionsHref, whatsappHref } from "@/lib/links";
import { Monogram } from "./Monogram";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import retrato from "../../public/images/rodolfo-retrato.jpg";

type Row = { href: string; label: string; hint: string; icon: React.ReactNode; external?: boolean };

/**
 * Página de apresentação (link da bio). 100% server-rendered, animações só em CSS:
 * abre rápido mesmo em 3G vindo do Instagram.
 */
export function LinkBio() {
  const a = addressLines();
  const rows: Row[] = [
    { href: "/#tratamentos", label: "Tratamentos", hint: "Conheça os tratamentos", icon: <Leaf strokeWidth={1.2} className="size-[18px]" /> },
    { href: "/#sobre", label: "Sobre", hint: "Apresentação profissional", icon: <UserRound strokeWidth={1.2} className="size-[18px]" /> },
    { href: instagramHref(), label: "Instagram", hint: instagramLabel() === "Instagram" ? "Acompanhe o dia a dia" : instagramLabel(), icon: <InstagramIcon className="size-[18px]" />, external: true },
    { href: mapsDirectionsHref(), label: "Localização", hint: `${a.line1} · ${site.city}`, icon: <MapPin strokeWidth={1.2} className="size-[18px]" />, external: true },
    { href: "/", label: "Conheça o site", hint: "Tudo sobre o atendimento", icon: <Globe strokeWidth={1.2} className="size-[18px]" /> },
  ];

  return (
    <main className="relative min-h-dvh overflow-hidden bg-cream">
      <Monogram className="pointer-events-none absolute -right-28 top-40 h-[38rem] w-auto text-forest/[0.035]" />

      <div className="relative mx-auto flex max-w-[27rem] flex-col items-center px-6 pb-14 pt-12 sm:pt-16">
        <Monogram title="Monograma Rodolfo Freitas" grow weight="bold" className="h-16 w-auto text-forest" />

        <div className="animate-rise mt-10 w-36 sm:w-40" style={{ animationDelay: "0.15s" }}>
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-[#d6d6d6] ring-1 ring-bronze/40 ring-offset-4 ring-offset-cream">
            <Image
              src={retrato}
              alt="Retrato de Rodolfo Freitas, tricologista"
              fill
              priority
              placeholder="blur"
              sizes="160px"
              className="object-cover object-[50%_18%]"
            />
          </div>
        </div>

        <header className="animate-rise mt-10 text-center" style={{ animationDelay: "0.25s" }}>
          <h1 className="font-serif text-[1.75rem] uppercase min-[380px]:text-[2rem] leading-none tracking-[0.05em] text-forest">
            Rodolfo Freitas
          </h1>
          <p className="mt-4 flex items-center justify-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.45em] text-bronze-deep">
            <span aria-hidden className="h-px w-6 bg-bronze/60" />
            {site.role}
            <span aria-hidden className="h-px w-6 bg-bronze/60" />
          </p>
        </header>

        <p className="animate-rise mt-9 font-serif text-[1.4rem] italic text-ink" style={{ animationDelay: "0.35s" }}>
          {site.motto}
        </p>
        <p className="animate-rise mt-3 max-w-[18rem] text-center text-[0.88rem] leading-relaxed text-ink-soft" style={{ animationDelay: "0.4s" }}>
          {site.shortIntro}
        </p>

        <nav aria-label="Links" className="mt-11 w-full">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-rise group flex min-h-16 w-full items-center justify-between rounded-full bg-forest pl-3 pr-6 text-cream transition-colors duration-500 hover:bg-forest-deep"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-cream/10 text-bronze transition-transform duration-500 group-hover:scale-105">
                <WhatsAppIcon className="size-[18px]" />
              </span>
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] min-[380px]:tracking-[0.2em]">Agendar atendimento</span>
            </span>
            <ArrowUpRight aria-hidden strokeWidth={1.3} className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <ul className="mt-6 border-t border-line">
            {rows.map((r, i) => {
              const Arrow = r.external ? ArrowUpRight : ArrowRight;
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-colors duration-500 group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
                    {r.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-forest">{r.label}</span>
                    <span className="mt-1 block truncate text-[0.8rem] text-ink-soft">{r.hint}</span>
                  </span>
                  <Arrow
                    aria-hidden
                    strokeWidth={1.2}
                    className="size-4 shrink-0 text-ink-soft/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-forest"
                  />
                </>
              );
              const cls = "group flex items-center gap-4 py-4";
              return (
                <li key={r.label} className="animate-rise border-b border-line" style={{ animationDelay: `${0.58 + i * 0.06}s` }}>
                  {r.external ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {content}
                    </a>
                  ) : (
                    <Link href={r.href} className={cls}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="mt-14 text-center text-[0.68rem] uppercase tracking-[0.22em] text-ink-soft/70">
          {site.city} — {site.state}
        </footer>
      </div>
    </main>
  );
}

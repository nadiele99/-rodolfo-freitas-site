import Link from "next/link";
import { site } from "@/data/site";
import { addressLines, instagramHref, whatsappHref } from "@/lib/links";
import { Monogram, Wordmark } from "./Monogram";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#tratamentos", label: "Tratamentos" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#contato", label: "Contato" },
];

export function Footer() {
  const addr = addressLines();
  return (
    <footer className="bg-forest-deep text-cream/80">
      <div className="container-ed py-20 lg:py-24">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr_1fr] md:gap-10">
          <div className="text-cream">
            <Link href="/" className="inline-flex items-center gap-4" aria-label="Rodolfo Freitas — início">
              <Monogram weight="bold" className="h-14 w-auto text-bronze" />
              <Wordmark />
            </Link>
            <p className="mt-8 max-w-xs font-serif text-lg italic text-cream/70">{site.motto}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className="eyebrow text-bronze">Navegação</p>
            <ul className="mt-6 space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-bronze">Contato</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={instagramHref()} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-cream">
                  Instagram
                </a>
              </li>
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-cream">
                  WhatsApp
                </a>
              </li>
            </ul>
            <address className="mt-8 text-sm not-italic leading-relaxed text-cream/60">
              {addr.line1}
              <br />
              {addr.line2} · {addr.postalCode}
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <p>{site.city} — {site.state}</p>
        </div>
      </div>
    </footer>
  );
}

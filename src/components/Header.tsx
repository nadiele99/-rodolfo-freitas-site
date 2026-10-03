"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/links";
import { Monogram, Wordmark } from "./Monogram";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "./nav";

/**
 * Cabeçalho fixo. Transparente no topo; ao rolar ganha fundo creme translúcido
 * e uma linha fina — sem sombras.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open ? "border-b border-line/70 bg-cream/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="container-ed flex h-[4.5rem] items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-3 text-forest" aria-label="Rodolfo Freitas — início">
            <Monogram weight="bold" className="h-10 w-auto" />
            <Wordmark compact />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline pb-1 text-[0.8rem] tracking-[0.04em] text-ink/80 hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center rounded-full border border-forest px-6 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-forest transition-colors duration-500 hover:bg-forest hover:text-cream sm:inline-flex"
            >
              Agendar
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              <span
                className={`absolute h-px w-6 bg-forest transition-transform duration-500 ease-[var(--ease-soft)] ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-forest transition-transform duration-500 ease-[var(--ease-soft)] ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

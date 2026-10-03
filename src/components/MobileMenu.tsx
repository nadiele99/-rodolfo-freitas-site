"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect } from "react";
import { instagramHref, whatsappHref } from "@/lib/links";
import { Monogram } from "./Monogram";
import { navItems } from "./nav";

/**
 * Menu mobile em tela cheia (creme), links grandes em serif com entrada escalonada.
 * Fecha com Esc, ao clicar num link e bloqueia o scroll do fundo.
 */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-30 flex flex-col overflow-y-auto bg-cream px-6 pb-10 pt-28 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Monogram className="pointer-events-none absolute -right-16 bottom-10 h-[55vh] w-auto text-forest/[0.04]" />
          <nav aria-label="Menu mobile">
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <m.li
                  key={item.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line/80"
                >
                  <a href={item.href} onClick={onClose} className="flex items-baseline gap-5 py-5 font-serif text-[1.85rem] text-forest">
                    <span className="eyebrow text-[0.6rem]! text-bronze-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </m.li>
              ))}
            </ul>
          </nav>
          <m.div
            className="mt-auto flex flex-col gap-3 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[3.25rem] items-center justify-center rounded-full bg-forest text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream"
            >
              Agendar avaliação
            </a>
            <a href={instagramHref()} target="_blank" rel="noopener noreferrer" className="eyebrow py-3 text-center text-ink-soft">
              Instagram
            </a>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

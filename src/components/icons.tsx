import type { ServiceIcon } from "@/data/site";

/**
 * Ícones lineares próprios da marca (traço 1.25, cantos arredondados).
 * Desenhados para conversar com o monograma: linhas finas e curvas orgânicas.
 */
const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
};

const paths: Record<ServiceIcon, React.ReactNode> = {
  // Agulhas finas sobre a linha do couro cabeludo
  microneedling: (
    <>
      <path d="M4 22c4-2 8-2 12 0s8 2 12 0" />
      <path d="M9 8v10M13 6v11M17 6v11M21 6v11M25 8v10" />
      <path d="M8 6h18" opacity=".55" />
    </>
  ),
  // Pulso elétrico suave
  electro: (
    <>
      <path d="M3 17h5l2.5-6 4 12 3.5-9 2 3h9" />
      <circle cx="16" cy="16" r="13" opacity=".35" />
    </>
  ),
  // Luz: círculo e raios
  chromo: (
    <>
      <circle cx="16" cy="16" r="5" />
      <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.1 2.1M22.4 22.4l2.1 2.1M7.5 24.5l2.1-2.1M22.4 9.6l2.1-2.1" />
    </>
  ),
  // Molécula O₃
  ozone: (
    <>
      <circle cx="9" cy="20" r="4" />
      <circle cx="23" cy="20" r="4" />
      <circle cx="16" cy="9" r="4" />
      <path d="M11.2 16.6l2.6-4M20.8 16.6l-2.6-4" />
    </>
  ),
  // Ondas
  ultrasound: (
    <>
      <circle cx="8" cy="16" r="1.6" />
      <path d="M12.5 11.5a6.5 6.5 0 0 1 0 9" />
      <path d="M16.5 8a11 11 0 0 1 0 16" />
      <path d="M20.5 4.8a15.5 15.5 0 0 1 0 22.4" opacity=".55" />
    </>
  ),
  // Gota
  prp: (
    <>
      <path d="M16 4c4.5 6 8 10.2 8 14.5a8 8 0 0 1-16 0C8 14.2 11.5 10 16 4z" />
      <path d="M12.5 19.5a3.6 3.6 0 0 0 3.5 3" opacity=".55" />
    </>
  ),
  // Seringa delicada
  botox: (
    <>
      <path d="M21 4l7 7M24.5 7.5l-3 3" />
      <path d="M22.5 9.5L10 22l-2.5.5.5-2.5L20.5 7.5z" />
      <path d="M8 24l-4 4" />
      <path d="M14 14l2 2M11.5 16.5l2 2" opacity=".55" />
    </>
  ),
  // Linha do tempo com marcos
  schedule: (
    <>
      <rect x="5" y="7" width="22" height="20" rx="2" />
      <path d="M5 12.5h22M11 4.5v5M21 4.5v5" />
      <path d="M10 19.5c2-2 4-2 6 0s4 2 6 0" />
    </>
  ),
};

export function ServiceGlyph({ name, className }: { name: ServiceIcon; className?: string }) {
  return (
    <svg {...base} className={className}>
      {paths[name]}
    </svg>
  );
}

/* Ícones de interface ---------------------------------------------------- */

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.93 9.93 0 1 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.07.89.9-2.99-.2-.31a8.2 8.2 0 1 1 6.87 3.74zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5l.37-.43c.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.7c.58.25 1.04.4 1.4.51.58.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.18.2-.57.2-1.07.15-1.17-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

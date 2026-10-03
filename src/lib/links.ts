import { site } from "@/data/site";

/** Link do WhatsApp com mensagem pré-preenchida. */
export function whatsappHref(message: string = site.whatsapp.message) {
  const text = encodeURIComponent(message);
  const number = site.whatsapp.number.replace(/\D/g, "");
  // Sem número configurado, o wa.me abre o WhatsApp para a pessoa escolher o contato.
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function instagramHref() {
  const h = site.instagram.handle.replace(/^@/, "");
  return h ? `https://www.instagram.com/${h}/` : "https://www.instagram.com/";
}

export function instagramLabel() {
  const h = site.instagram.handle.replace(/^@/, "");
  return h ? `@${h}` : "Instagram";
}

export function addressLines() {
  const a = site.address;
  const line1 = [a.street, a.number].filter(Boolean).join(", ");
  const line1b = [a.complement, a.district].filter(Boolean).join(" · ");
  const line2 = `${a.city} — ${a.state}`;
  return { line1, line1b, line2, postalCode: a.postalCode };
}

export function addressQuery() {
  const a = site.address;
  return [a.street, a.number, a.district, `${a.city} - ${a.state}`, a.postalCode].filter(Boolean).join(", ");
}

export function mapsDirectionsHref() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery())}`;
}

export function mapsEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(addressQuery())}&z=16&output=embed`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

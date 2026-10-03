import { site } from "@/data/site";
import { absoluteUrl, instagramHref } from "./links";

/** JSON-LD: negócio local + profissional (SEO local e de marca). */
export function localBusinessJsonLd() {
  const a = site.address;
  const sameAs = site.instagram.handle ? [instagramHref()] : undefined;
  const phone = site.phone || (site.whatsapp.number ? `+${site.whatsapp.number}` : undefined);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": absoluteUrl("/#negocio"),
        name: `${site.name} — ${site.role}`,
        description: site.seo.description,
        url: absoluteUrl("/"),
        image: absoluteUrl("/images/rodolfo-retrato.jpg"),
        logo: absoluteUrl("/icon.png"),
        ...(phone ? { telephone: phone } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: [a.street, a.number, a.complement].filter(Boolean).join(", "),
          ...(a.district ? { addressNeighborhood: a.district } : {}),
          addressLocality: a.city,
          addressRegion: a.state,
          postalCode: a.postalCode,
          addressCountry: a.country,
        },
        areaServed: { "@type": "City", name: a.city },
        founder: { "@id": absoluteUrl("/#rodolfo") },
        ...(sameAs ? { sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tratamentos",
          itemListElement: site.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#rodolfo"),
        name: site.name,
        jobTitle: site.role,
        image: absoluteUrl("/images/rodolfo-retrato.jpg"),
        worksFor: { "@id": absoluteUrl("/#negocio") },
        ...(sameAs ? { sameAs } : {}),
      },
    ],
  };
}

import localFont from "next/font/local";

/** Bodoni Moda — títulos e identidade (self-hosted, variável). */
export const serif = localFont({
  src: [
    { path: "../assets/fonts/bodoni-moda-latin-wght-normal.woff2", style: "normal", weight: "400 900" },
    { path: "../assets/fonts/bodoni-moda-latin-wght-italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-bodoni",
  display: "swap",
});

/** Montserrat — textos de apoio (self-hosted, variável). */
export const sans = localFont({
  src: [{ path: "../assets/fonts/montserrat-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-montserrat",
  display: "swap",
});

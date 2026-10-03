import fs from "node:fs";
import path from "node:path";
import { site, type ResultPair } from "@/data/site";

const DIR = path.join(process.cwd(), "public", "images", "resultados");
const IMG = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Lê automaticamente os pares de antes/depois em /public/images/resultados.
 *
 * Convenção de nomes (qualquer prefixo, em ordem alfabética):
 *   caso-01-antes.jpg   +  caso-01-depois.jpg
 *   02-antes.png        +  02-depois.png
 *
 * Basta adicionar os arquivos na pasta — nenhum código precisa mudar.
 * Pares escritos manualmente em data/site.ts (results) vêm primeiro.
 */
export function getResults(): ResultPair[] {
  const manual = [...site.results];
  let files: string[] = [];
  try {
    files = fs.readdirSync(DIR).filter((f) => IMG.test(f));
  } catch {
    return manual;
  }

  const cases = new Map<string, { before?: string; after?: string }>();
  for (const f of files) {
    const m = f.match(/^(.*?)[-_ ]?(antes|depois)\.[a-z0-9]+$/i);
    if (!m) continue;
    const key = m[1] || "caso";
    const entry = cases.get(key) ?? {};
    const url = `/images/resultados/${encodeURIComponent(f)}`;
    if (m[2].toLowerCase() === "antes") entry.before = url;
    else entry.after = url;
    cases.set(key, entry);
  }

  const auto = [...cases.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "pt-BR", { numeric: true }))
    .filter(([, v]) => v.before && v.after)
    .map(([, v], i) => ({
      before: v.before!,
      after: v.after!,
      alt: `Resultado real de tratamento capilar, caso ${i + 1 + manual.length}`,
    }));

  return [...manual, ...auto];
}

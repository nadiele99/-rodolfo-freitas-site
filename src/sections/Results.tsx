import { getResults } from "@/lib/results";
import { ResultsGallery } from "./ResultsGallery";

/** Seção de resultados: carrega os pares no build e entrega à galeria interativa. */
export function Results() {
  return <ResultsGallery items={getResults()} />;
}

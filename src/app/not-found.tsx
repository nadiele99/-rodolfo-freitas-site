import Link from "next/link";
import { Monogram } from "@/components/Monogram";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-6 text-center">
      <Monogram weight="bold" className="h-20 w-auto text-forest" />
      <h1 className="font-serif text-3xl text-forest">Página não encontrada</h1>
      <Link href="/" className="eyebrow border-b border-ink/30 pb-1 text-ink">Voltar ao início</Link>
    </main>
  );
}

import Image from "next/image";
import { instagramHref, instagramLabel } from "@/lib/links";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon } from "@/components/icons";
import sentado from "../../public/images/rodolfo-sentado.jpg";

export function Instagram() {
  return (
    <section aria-labelledby="instagram-title" className="section-y border-t border-line bg-paper">
      <div className="container-ed grid items-center gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5 lg:col-span-4">
          <div className="relative mx-auto aspect-[3/4] max-w-[20rem] overflow-hidden bg-[#dcdcdc] md:max-w-none">
            <Image
              src={sentado}
              alt="Rodolfo Freitas sentado em estúdio, com um pé apoiado em um cubo branco"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 32vw, 20rem"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <p className="eyebrow flex items-center gap-4 text-bronze-deep">
            <InstagramIcon className="size-4" />
            Instagram
          </p>
          <h2 id="instagram-title" className="mt-8 font-serif text-[2.1rem] leading-[1.12] text-forest sm:text-[2.6rem] lg:text-[3.1rem]">
            Acompanhe o <span className="italic">dia a dia</span>
          </h2>
          <p className="mt-7 max-w-sm text-[0.97rem] leading-[1.85] text-ink-soft">
            Conteúdos, bastidores e novidades no perfil {instagramLabel() !== "Instagram" ? instagramLabel() : "oficial"}.
          </p>
          <div className="mt-12">
            <Button href={instagramHref()} variant="outline">
              Seguir no Instagram
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

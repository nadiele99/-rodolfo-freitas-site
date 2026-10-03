# Rodolfo Freitas · Tricologista — site

Next.js 15 · TypeScript · Tailwind CSS 4 · Motion · Lucide.

| Rota    | Tela                                            |
| ------- | ----------------------------------------------- |
| `/`     | Tela 2 — site institucional completo (one-page) |
| `/link` | Tela 1 — página de apresentação / link da bio   |

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000  e  http://localhost:3000/link
npm run build && npm start
```

Copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL` com o domínio final
(usado em canonical, sitemap, robots, JSON-LD e Open Graph).

## Onde editar o conteúdo

**Tudo** está em `src/data/site.ts`: nome, WhatsApp, Instagram, endereço, horários,
textos de apresentação, serviços e descrições, etapas do atendimento e fotos de resultados.
Nenhum dado de contato está espalhado pelos componentes.

### Pendências (marcadas com `// TODO` no arquivo)

- [ ] `whatsapp.number` — número oficial (só dígitos, com 55 + DDD). Enquanto vazio, os botões abrem o WhatsApp sem destinatário.
- [ ] `instagram.handle` — perfil oficial. Enquanto vazio, os links levam para instagram.com.
- [ ] `address.number`, `complement`, `district` — número, sala e bairro.
- [ ] `hours` — horários de atendimento.
- [ ] `services[].description` — descrição aprovada de cada tratamento (hoje só o nome aparece).
- [ ] `about.paragraphs` / `about.credentials` — texto de apresentação e formação aprovados.
- [ ] `results` — pares reais de antes/depois (colocar as fotos em `public/images/resultados/`). Sem eles, a seção mostra placeholders identificados.
- [ ] Fotos em resolução maior: as atuais têm ~660×890 px. Substituir em `public/images/` mantendo os nomes.

## Estrutura

```
src/
  app/          rotas, metadata, sitemap.ts, robots.ts, ícones (icon.png / apple-icon.png)
  sections/     Hero, About, Services, Results, Process, WhatsAppCTA, Location, Instagram
  components/   Header, MobileMenu, Footer, LinkBio, Button, SectionTitle, Reveal,
                ServiceCard, BeforeAfterSlider, Monogram, icons
  data/         site.ts — configuração de conteúdo
  lib/          links (WhatsApp, mapas), schema (JSON-LD), fonts
  styles/       globals.css — tokens da marca
  assets/fonts  Bodoni Moda e Montserrat (self-hosted)
public/
  images/       fotos do Rodolfo
  brand/        monograma em SVG (fino e reforçado; verde, bronze e creme) + sprite
  og.jpg        imagem de compartilhamento
```

## Marca

- Paleta: verde floresta `#1F3A2E`, oliva `#3A4B38`, bronze `#C49A6C` (acento), bege `#EADDCB`, creme `#F8F3ED`.
  Para textos pequenos em bronze sobre creme usa-se `bronze-deep` `#87643F` (contraste AA).
- Tipografia: Bodoni Moda (títulos) + Montserrat (apoio).
- Monograma: versão flat/1D vetorizada do arquivo original. Use `weight="bold"` em tamanhos pequenos (< 80 px).

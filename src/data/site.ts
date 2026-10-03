/**
 * ==========================================================================
 *  CONFIGURAÇÃO DE CONTEÚDO — Rodolfo Freitas · Tricologista
 * ==========================================================================
 *  Todo o conteúdo editável do site está aqui. Nenhum dado de contato,
 *  endereço ou serviço deve ser escrito diretamente nos componentes.
 *
 *  Campos marcados com  // TODO  ainda não foram fornecidos pelo cliente.
 *  Enquanto estiverem vazios, o site funciona normalmente e esconde ou
 *  adapta os elementos que dependem deles.
 * ==========================================================================
 */

export type ServiceIcon =
  | "microneedling"
  | "electro"
  | "chromo"
  | "ozone"
  | "ultrasound"
  | "prp"
  | "botox"
  | "schedule";

export type Service = {
  slug: string;
  name: string;
  /** Descrição curta, aprovada pelo profissional. Deixe "" até ter o texto. */
  description: string;
  icon: ServiceIcon;
};

export type ResultPair = {
  /** Caminho em /public. Usar SOMENTE fotos reais de pacientes, com autorização. */
  before: string;
  after: string;
  alt: string;
  caption?: string;
};

export const site = {
  // ------------------------------------------------------------------ Marca
  name: "Rodolfo Freitas",
  role: "Tricologista",
  city: "Manaus",
  state: "AM",

  /** URL pública definitiva (usada em canonical, sitemap e Open Graph). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  tagline: "Saúde capilar tratada de forma personalizada.",
  motto: "Cabelo é identidade.",
  shortIntro: "Saúde capilar, cuidado personalizado e acompanhamento.",

  seo: {
    title: "Rodolfo Freitas | Tricologista",
    description:
      "Rodolfo Freitas, tricologista em Manaus (AM). Atendimento personalizado em saúde capilar, da avaliação ao acompanhamento. Agende pelo WhatsApp.",
    linkTitle: "Rodolfo Freitas | Tricologista · Links",
    linkDescription:
      "Agende seu atendimento, conheça os tratamentos e encontre o endereço de Rodolfo Freitas, tricologista em Manaus.",
  },

  // --------------------------------------------------------------- Contato
  whatsapp: {
    /** Somente números, com DDI + DDD. Ex.: "5592999999999" */
    number: "", // TODO: inserir número oficial do WhatsApp
    /**
     * Mensagens pré-preenchidas. A origem ("site" / "Instagram") ajuda a saber
     * de onde veio cada contato. {assunto} é trocado pelo tratamento ou queixa.
     */
    messages: {
      site: "Olá, Rodolfo! Vim pelo site e gostaria de agendar uma avaliação.",
      siteTopic: "Olá, Rodolfo! Vim pelo site e gostaria de saber mais sobre {assunto}.",
      instagram: "Olá, Rodolfo! Vim pelo Instagram e gostaria de agendar um atendimento.",
    },
  },

  /** Telefone para exibição (opcional). */
  phone: "", // TODO

  /** Link para clientes deixarem avaliação no Google (aparece só na página /link). */
  googleReviews: "https://share.google/sPhUPOdZrxWQeEEPH",

  instagram: {
    /** Sem o @. Ex.: "rodolfofreitas" */
    handle: "", // TODO: inserir perfil oficial do Instagram
  },

  // -------------------------------------------------------------- Endereço
  address: {
    street: "Rua Alberto Carreira",
    number: "", // TODO: número
    complement: "", // TODO: sala / complemento
    district: "", // TODO: bairro
    city: "Manaus",
    state: "AM",
    postalCode: "69077-783",
    country: "BR",
  },

  /** Horário de atendimento. Deixe [] até ser informado. */
  hours: [] as { days: string; time: string }[], // TODO

  // ----------------------------------------------------------------- Sobre
  about: {
    title: "Cuidado capilar com olhar individualizado",
    /**
     * Parágrafos de apresentação. Substituir pelo texto aprovado pelo
     * Rodolfo (formação, trajetória, abordagem). Não incluir credenciais
     * que não possam ser comprovadas.
     */
    paragraphs: [
      "Rodolfo Freitas é tricologista em Manaus e dedica seu trabalho à saúde do couro cabeludo e dos fios.",
      "Cada pessoa chega com uma história diferente. Por isso, o atendimento começa pela escuta e segue com um plano pensado para o seu caso, com acompanhamento ao longo do processo.",
    ],
    /** Formação / registros profissionais. Preencher quando fornecido. */
    credentials: [] as string[], // TODO
  },

  // -------------------------------------------------------------- Queixas
  /**
   * "Qual é a sua queixa?" — ajuda o visitante a se reconhecer rapidamente.
   * Textos descrevem o que a pessoa percebe (sem diagnóstico nem promessa).
   * `topic` entra na mensagem do WhatsApp: "...saber mais sobre {topic}."
   */
  concerns: [
    {
      slug: "pos-mounjaro",
      title: "Queda após canetas emagrecedoras",
      tag: "Mounjaro, Ozempic e similares",
      text: "Você emagreceu rápido com o uso de canetas como Mounjaro ou Ozempic e passou a notar mais fios no banho, no travesseiro ou na escova.",
      topic: "queda de cabelo após o uso de canetas emagrecedoras (Mounjaro/Ozempic)",
    },
    {
      slug: "pos-parto",
      title: "Queda pós-parto",
      tag: "Meses depois do nascimento",
      text: "Alguns meses depois do parto, os fios começaram a cair em quantidade maior do que o normal e isso tem te preocupado.",
      topic: "queda de cabelo pós-parto",
    },
    {
      slug: "hormonal",
      title: "Queda hormonal",
      tag: "Tireoide, menopausa, anticoncepcional",
      text: "A queda apareceu junto com alguma mudança hormonal, como alterações de tireoide, menopausa ou troca e suspensão de anticoncepcional.",
      topic: "queda de cabelo de origem hormonal",
    },
    {
      slug: "calvicie",
      title: "Calvície",
      tag: "Entradas e topo da cabeça",
      text: "As entradas estão mais marcadas ou o topo da cabeça ficou mais visível em fotos, na luz do banheiro ou com o cabelo molhado.",
      topic: "calvície",
    },
    {
      slug: "estresse",
      title: "Queda por estresse",
      tag: "Depois de uma fase difícil",
      text: "Depois de um período de estresse, de uma doença ou de uma mudança brusca na rotina, o cabelo passou a cair mais de uma hora para outra.",
      topic: "queda de cabelo por estresse",
    },
    {
      slug: "afinamento",
      title: "Afinamento dos fios",
      tag: "Menos volume, mais couro à mostra",
      text: "Os fios estão mais finos e frágeis, o rabo de cavalo diminuiu e o couro cabeludo aparece mais do que antes.",
      topic: "afinamento dos fios",
    },
  ],

  // ------------------------------------------------------------- Serviços
  services: [
    { slug: "microagulhamento", name: "Microagulhamento", description: "", icon: "microneedling" },
    { slug: "eletroterapia", name: "Eletroterapia", description: "", icon: "electro" },
    { slug: "cromoterapia", name: "Cromoterapia", description: "", icon: "chromo" },
    { slug: "ozonioterapia", name: "Ozonioterapia", description: "", icon: "ozone" },
    { slug: "ultrassom", name: "Ultrassom", description: "", icon: "ultrasound" },
    { slug: "prp", name: "PRP", description: "", icon: "prp" },
    { slug: "botox", name: "Botox", description: "", icon: "botox" },
  ] satisfies Service[],

  // ------------------------------------------------------------ Resultados
  /**
   * Pares de antes/depois REAIS.
   * Forma mais simples: colocar os arquivos em /public/images/resultados com
   * os nomes  caso-01-antes.jpg  +  caso-01-depois.jpg  (sem limite de casos) —
   * eles entram automaticamente. Esta lista é só para pares com legenda própria.
   * Sem nenhuma foto, a seção mostra placeholders identificados.
   */
  results: [] as ResultPair[], // TODO

  // -------------------------------------------------------------- Processo
  process: [
    { title: "Avaliação", text: "Primeiro encontro para ouvir sua queixa, seus hábitos e seu histórico." },
    { title: "Análise", text: "Observação cuidadosa do couro cabeludo e dos fios." },
    { title: "Plano individualizado", text: "Definição dos cuidados e de um cronograma individualizado para o seu caso." },
    { title: "Acompanhamento", text: "Retornos para acompanhar a evolução e ajustar o plano quando necessário." },
  ],

  // ------------------------------------------------------------------ CTA
  cta: {
    title: "Vamos cuidar da sua saúde capilar?",
    text: "Fale diretamente pelo WhatsApp e agende sua avaliação.",
  },
} as const;

export type Site = typeof site;

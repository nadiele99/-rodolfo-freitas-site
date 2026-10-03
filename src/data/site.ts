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
    message: "Olá, Rodolfo! Gostaria de agendar uma avaliação.",
  },

  /** Telefone para exibição (opcional). */
  phone: "", // TODO

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

  // ------------------------------------------------------------- Serviços
  services: [
    { slug: "microagulhamento", name: "Microagulhamento", description: "", icon: "microneedling" },
    { slug: "eletroterapia", name: "Eletroterapia", description: "", icon: "electro" },
    { slug: "cromoterapia", name: "Cromoterapia", description: "", icon: "chromo" },
    { slug: "ozonioterapia", name: "Ozonioterapia", description: "", icon: "ozone" },
    { slug: "ultrassom", name: "Ultrassom", description: "", icon: "ultrasound" },
    { slug: "prp", name: "PRP", description: "", icon: "prp" },
    { slug: "botox", name: "Botox", description: "", icon: "botox" },
    { slug: "cronograma-individualizado", name: "Cronograma individualizado", description: "", icon: "schedule" },
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
    { title: "Plano individualizado", text: "Definição dos cuidados e do cronograma adequados ao seu caso." },
    { title: "Acompanhamento", text: "Retornos para acompanhar a evolução e ajustar o plano quando necessário." },
  ],

  // ------------------------------------------------------------------ CTA
  cta: {
    title: "Vamos cuidar da sua saúde capilar?",
    text: "Fale diretamente pelo WhatsApp e agende sua avaliação.",
  },
} as const;

export type Site = typeof site;

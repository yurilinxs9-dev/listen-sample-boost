export interface Audiobook {
  id: string;
  title: string;
  author: string;
  cover_url: string;
  audio_url: string;
  duration: string;
  category: string;
  description: string;
}

export interface Testimonial {
  user: string;
  message: string;
  avatar?: string;
}

export const audiobooks: Audiobook[] = [
  {
    id: "1",
    title: "Pai Rico, Pai Pobre",
    author: "Robert Kiyosaki",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "6h 00m",
    category: "Finanças",
    description: "O livro que mudou a forma como milhões de pessoas pensam sobre dinheiro e investimentos."
  },
  {
    id: "2",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "10h 53m",
    category: "Autoajuda",
    description: "Descubra como os hábitos funcionam e como você pode transformá-los."
  },
  {
    id: "3",
    title: "Os Segredos da Mente Milionária",
    author: "T. Harv Eker",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "5h 30m",
    category: "Finanças",
    description: "Aprenda a dominar o jogo interior da riqueza."
  },
  {
    id: "4",
    title: "O Investidor Inteligente",
    author: "Benjamin Graham",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "15h 23m",
    category: "Investimentos",
    description: "A bíblia do investimento em valor."
  },
  {
    id: "5",
    title: "Mindset: A Nova Psicologia do Sucesso",
    author: "Carol S. Dweck",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "7h 00m",
    category: "Autoajuda",
    description: "Como a mentalidade pode transformar sua vida e carreira."
  },
  {
    id: "6",
    title: "A Bola de Neve - Warren Buffett",
    author: "Alice Schroeder",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "34h 00m",
    category: "Investimentos",
    description: "A biografia definitiva de Warren Buffett."
  },
  {
    id: "7",
    title: "Rápido e Devagar",
    author: "Daniel Kahneman",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "20h 00m",
    category: "Autoajuda",
    description: "Duas formas de pensar que moldam nossas decisões."
  },
  {
    id: "8",
    title: "Ações Comuns, Lucros Extraordinários",
    author: "Philip Fisher",
    cover_url: "/placeholder.svg",
    audio_url: "#",
    duration: "8h 15m",
    category: "Investimentos",
    description: "Estratégias de investimento a longo prazo."
  }
];

export const testimonials: Testimonial[] = [
  {
    user: "Leonardo",
    message: "Gostei muito do conteúdo! Aprendi estratégias incríveis que já estou aplicando.",
  },
  {
    user: "Luciane",
    message: "Excelente seleção de livros! A qualidade do áudio é perfeita.",
  },
  {
    user: "Jackeline",
    message: "Recomendo para todos que querem crescer pessoalmente! Mudou minha vida.",
  },
  {
    user: "Rafael",
    message: "O acesso vitalício é o melhor benefício. Vale cada centavo!",
  },
  {
    user: "Marina",
    message: "Consigo ouvir no caminho do trabalho. Produtividade máxima!",
  }
];

export const categories = [
  { 
    name: "Recomendações", 
    description: "Os audiobooks mais transformadores selecionados para você começar sua jornada de crescimento.",
    books: audiobooks.slice(0, 4) 
  }
];

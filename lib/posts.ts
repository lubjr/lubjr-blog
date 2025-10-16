export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "Primeiro Post",
    date: "2025-01-15",
    category: "geral",
    excerpt: "Começando minha jornada de documentação e aprendizado contínuo.",
    content: `# Primeiro Post

Estou começando este blog para documentar minha evolução profissional e pessoal.

## Por que criar este espaço?

- Documentar aprendizados
- Compartilhar projetos
- Refletir sobre o processo
- Criar um histórico da minha jornada

Este é apenas o começo de uma longa jornada de aprendizado e crescimento.`,
  },
  {
    slug: "aprendendo-nextjs",
    title: "Aprendendo Next.js",
    date: "2025-01-20",
    category: "aprendizado",
    excerpt: "Minhas primeiras impressões e aprendizados com Next.js e React.",
    content: `# Aprendendo Next.js

Next.js tem sido uma experiência incrível. A facilidade de criar aplicações React com SSR e SSG é impressionante.

## O que aprendi até agora

- App Router e file-based routing
- Server Components vs Client Components
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)

## Próximos passos

Quero explorar mais sobre:
- API Routes
- Middleware
- Otimização de imagens
- Deploy na Vercel`,
  },
  {
    slug: "projeto-blog-pessoal",
    title: "Criando Meu Blog Pessoal",
    date: "2025-01-22",
    category: "projetos",
    excerpt: "Como construí este blog minimalista com Next.js e TypeScript.",
    content: `# Criando Meu Blog Pessoal

Decidi criar um blog pessoal com visual minimalista, inspirado em terminais e sites de jornal.

## Stack escolhida

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Markdown** - Conteúdo dos posts

## Design

Optei por um visual clean e minimalista:
- Tipografia monoespaçada
- Cores neutras (preto, branco, cinza)
- Sem firulas ou elementos desnecessários
- Foco total no conteúdo

## Resultado

Um espaço simples e funcional para documentar minha jornada.`,
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category)
}

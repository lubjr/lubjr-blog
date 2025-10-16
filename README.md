# Blog Pessoal

Blog minimalista estilo terminal para documentar aprendizado e evolução de carreira.

## Como adicionar posts

Edite o arquivo `lib/posts.ts` e adicione um novo objeto ao array `posts`:

\`\`\`typescript
{
  slug: "nome-do-post",
  title: "Título do Post",
  date: "2025-01-15",
  category: "categoria",
  excerpt: "Breve descrição do post",
  content: `# Título

Seu conteúdo em markdown aqui...

## Subtítulo

Mais conteúdo...`
}
\`\`\`

## Categorias disponíveis

- reflexões
- aprendizado
- projetos
- tutoriais
- geral

Você pode criar novas categorias simplesmente usando um novo nome no campo `category`.

## Estrutura

- `lib/posts.ts` - Array com todos os posts
- `app/` - Páginas Next.js
- `components/` - Componentes React

## Deploy

O site é totalmente estático e pode ser deployado na Vercel com um clique.

import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { MarkdownContent } from "@/components/markdown-content"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/posts"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> voltar
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-baseline gap-4 mb-3">
            <time className="text-sm text-muted-foreground font-mono">{post.date}</time>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-balance">{post.title}</h1>
        </header>

        <MarkdownContent content={post.content} />
      </article>

      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/posts"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
        >
          <span>←</span> ver todos os posts
        </Link>
      </footer>
    </div>
  )
}

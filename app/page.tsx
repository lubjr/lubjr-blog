import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Hello, I'm Luiz Eduardo 🤠</h1>
        <p className="text-muted-foreground leading-relaxed">
          Developer documenting my learning journey, projects, and career development. This is my space
          to share what I learn, build, and think about technology.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="text-muted-foreground">$</span> recent posts
        </h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/posts/${post.slug}`} className="block">
                <div className="flex items-baseline gap-4 mb-1">
                  <time className="text-sm text-muted-foreground font-mono">{post.date}</time>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/posts"
          className="text-sm hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
        >
          see all posts <span>→</span>
        </Link>
      </div>
    </div>
  )
}

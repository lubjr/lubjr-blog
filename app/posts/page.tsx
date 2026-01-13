import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default async function PostsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams
  const allPosts = getAllPosts()
  const posts = category ? allPosts.filter((p) => p.category === category) : allPosts
  const categories = Array.from(new Set(allPosts.map((p) => p.category)))

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">{category ? `${category} posts` : 'All posts'}</h1>
        <p className="text-muted-foreground">
          {posts.length} {posts.length === 1 ? "post" : "posts"} published
        </p>
      </div>

      <div className="mb-8 flex gap-3 flex-wrap">
        <Link
          href="/posts"
          className={`text-sm px-3 py-1 ${!category ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-secondary'} transition-colors`}
        >
          all
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/posts?category=${cat}`}
            className={`text-sm px-3 py-1 ${category === cat ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-secondary'} transition-colors`}
          >
            {cat}
          </Link>
        ))}
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/posts/${post.slug}`} className="block">
              <div className="flex items-baseline gap-4 mb-1">
                <time className="text-sm text-muted-foreground font-mono">{post.date}</time>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

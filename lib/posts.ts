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
    slug: "first-post",
    title: "First Post",
    date: "10-18-2025",
    category: "general",
    excerpt: "Starting my journey of documentation and continuous learning.",
    content: `# The beginning

I'm starting this blog to document my professional and personal evolution.
## Why create this space ?

- Document learnings
- Share projects
- Reflect on the process
- Create a history of my journey

I think it's important to write, especially to document what you've learned.`,
  }
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

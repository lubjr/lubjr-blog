import Link from "next/link"

const projects = [
  {
    title: "Personal Blog",
    description: "This blog you're reading right now. Built with Next.js 15 and a minimalist design.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "/",
    date: "10-2025",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground leading-relaxed">
          Things I've built and am building. Experiments, personal projects, and work.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <article key={i} className="border-l-2 border-border pl-4 hover:border-foreground transition-colors">
            <div className="flex items-baseline gap-4 mb-2">
              <time className="text-sm text-muted-foreground font-mono">{project.date}</time>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {project.link !== "#" ? (
                <Link href={project.link} className="hover:text-muted-foreground transition-colors">
                  {project.title} →
                </Link>
              ) : (
                project.title
              )}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

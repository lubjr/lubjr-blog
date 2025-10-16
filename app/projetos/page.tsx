import Link from "next/link"

const projetos = [
  {
    title: "Blog Pessoal",
    description: "Este blog que você está lendo agora. Construído com Next.js 15 e design minimalista.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "/",
    date: "2025-01",
  },
  {
    title: "Projeto Exemplo 1",
    description: "Descrição do seu projeto. O que ele faz, tecnologias usadas, desafios enfrentados.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    date: "2024-12",
  },
  {
    title: "Projeto Exemplo 2",
    description: "Outro projeto interessante que você construiu. Explique o problema que resolve.",
    tech: ["Python", "FastAPI", "Docker"],
    link: "#",
    date: "2024-11",
  },
]

export default function ProjetosPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Projetos</h1>
        <p className="text-muted-foreground leading-relaxed">
          Coisas que construí e estou construindo. Experimentos, projetos pessoais e trabalhos.
        </p>
      </div>

      <div className="space-y-8">
        {projetos.map((projeto, i) => (
          <article key={i} className="border-l-2 border-border pl-4 hover:border-foreground transition-colors">
            <div className="flex items-baseline gap-4 mb-2">
              <time className="text-sm text-muted-foreground font-mono">{projeto.date}</time>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {projeto.link !== "#" ? (
                <Link href={projeto.link} className="hover:text-muted-foreground transition-colors">
                  {projeto.title} →
                </Link>
              ) : (
                projeto.title
              )}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{projeto.description}</p>
            <div className="flex gap-2 flex-wrap">
              {projeto.tech.map((tech) => (
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

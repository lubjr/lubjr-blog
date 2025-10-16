const aprendizados = [
  {
    title: "Next.js 15 & App Router",
    status: "estudando",
    description: "Aprendendo sobre Server Components, Server Actions e o novo modelo de roteamento.",
    date: "2025-01",
  },
  {
    title: "TypeScript Avançado",
    status: "estudando",
    description: "Tipos utilitários, generics, type guards e patterns avançados.",
    date: "2025-01",
  },
  {
    title: "Design Patterns",
    status: "concluído",
    description: "Estudei os principais design patterns e quando aplicá-los.",
    date: "2024-12",
  },
  {
    title: "PostgreSQL & SQL",
    status: "concluído",
    description: "Fundamentos de SQL, queries complexas, índices e otimização.",
    date: "2024-11",
  },
]

export default function AprendizadoPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Aprendizado</h1>
        <p className="text-muted-foreground leading-relaxed">
          Tecnologias, conceitos e habilidades que estou estudando ou já aprendi.
        </p>
      </div>

      <div className="space-y-6">
        {aprendizados.map((item, i) => (
          <article key={i} className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-24">
                <span
                  className={`text-xs px-2 py-1 ${
                    item.status === "estudando"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <time className="text-sm text-muted-foreground font-mono">{item.date}</time>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

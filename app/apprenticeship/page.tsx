const learnings = [
  {
    title: "AWS Certified Developer – Associate",
    status: "studying",
    description: "Validates skills in developing, deploying, and maintaining secure and scalable applications on AWS.",
    date: "08-2025",
  },
]

export default function ApprenticeshipPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Apprenticeship</h1>
        <p className="text-muted-foreground leading-relaxed">
          Technologies, concepts and skills that I am studying or have already learned.
        </p>
      </div>

      <div className="space-y-6">
        {learnings.map((item, i) => (
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

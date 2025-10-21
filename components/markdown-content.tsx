"use client"

export function MarkdownContent({ content }: { content: string }) {
  // Parse markdown simplely
  const lines = content.split("\n")

  return (
    <div className="prose prose-neutral max-w-none">
      {lines.map((line, i) => {
        // Titles
        if (line.startsWith("# ")) {
          return (
            <h1 key={i} className="text-2xl font-bold mt-8 mb-4">
              {line.slice(2)}
            </h1>
          )
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold mt-6 mb-3">
              {line.slice(3)}
            </h2>
          )
        }
        if (line.startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg font-bold mt-4 mb-2">
              {line.slice(4)}
            </h3>
          )
        }

        // List
        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-4 text-muted-foreground leading-relaxed">
              {line.slice(2)}
            </li>
          )
        }

        // Empty paragraph
        if (line.trim() === "") {
          return <div key={i} className="h-4" />
        }

        // Normal paragraph
        return (
          <p key={i} className="text-foreground leading-relaxed mb-4">
            {line}
          </p>
        )
      })}
    </div>
  )
}

import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold hover:text-muted-foreground transition-colors">
            ~/dev.log
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-muted-foreground transition-colors">
              posts
            </Link>
            <Link href="/projects" className="hover:text-muted-foreground transition-colors">
              projects
            </Link>
            <Link href="/apprenticeship" className="hover:text-muted-foreground transition-colors">
              apprenticeship
            </Link>
            <Link href="/about-me" className="hover:text-muted-foreground transition-colors">
              about me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

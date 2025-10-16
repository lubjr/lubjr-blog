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
            <Link href="/projetos" className="hover:text-muted-foreground transition-colors">
              projetos
            </Link>
            <Link href="/aprendizado" className="hover:text-muted-foreground transition-colors">
              aprendizado
            </Link>
            <Link href="/sobre" className="hover:text-muted-foreground transition-colors">
              sobre
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

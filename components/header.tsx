"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="border-b border-border">
      <div className="container mx-auto max-w-3xl px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold hover:text-muted-foreground transition-colors">
            ~/dev.log
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/posts" className="hover:text-muted-foreground transition-colors">
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
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:text-muted-foreground transition-colors"
                aria-label="toggle theme"
              >
                {theme === "dark" ? "light" : "dark"}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

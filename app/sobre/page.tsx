export default function SobrePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-6">Sobre</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>Olá! Sou [seu nome], desenvolvedor apaixonado por tecnologia e aprendizado contínuo.</p>

          <p>
            Este blog é meu espaço pessoal para documentar minha jornada de evolução na carreira, compartilhar projetos
            que construo e registrar o que aprendo pelo caminho.
          </p>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">O que faço</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Desenvolvimento web com React e Next.js</li>
              <li>→ Backend com Node.js e TypeScript</li>
              <li>→ Sempre aprendendo coisas novas</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Interesses</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Desenvolvimento de software</li>
              <li>→ Design de interfaces</li>
              <li>→ Performance e otimização</li>
              <li>→ Open source</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Contato</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>→ Email: seu@email.com</p>
              <p>→ GitHub: github.com/seuusuario</p>
              <p>→ LinkedIn: linkedin.com/in/seuusuario</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm pt-8 border-t border-border">
            Este site foi construído com Next.js 15, TypeScript e Tailwind CSS. Design minimalista inspirado em
            terminais e blogs focados em conteúdo.
          </p>
        </div>
      </div>
    </div>
  )
}

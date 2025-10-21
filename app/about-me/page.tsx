export default function AboutMePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-6">About me</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>Hi! I'm Luiz Eduardo, a developer passionate about technology and continuous learning.</p>

          <p>
            This blog is my personal space to document my career development journey, share projects
            I build, and record what I learn along the way.
          </p>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">What do I do</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Web development with React and Next.js</li>
              <li>→ Backend with Node.js and TypeScript</li>
              <li>→ Always learning new things</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Interests</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Software development</li>
              <li>→ Interface design</li>
              <li>→ Performance and optimization</li>
              <li>→ Open source</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>→ Email: luizeduardobjr@outlook.com</p>
              <p>→ GitHub: https://github.com/lubjr</p>
              <p>→ LinkedIn: https://www.linkedin.com/in/lubjr/</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm pt-8 border-t border-border">
            This blog was built with Next.js 15, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  )
}

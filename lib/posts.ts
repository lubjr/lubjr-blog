export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

const posts: Post[] = [
  {
    slug: "first-post",
    title: "The Beginning of a Journey",
    date: "10-18-2025",
    category: "general",
    excerpt: "Starting my journey of documentation, continuous learning, and knowledge sharing.",
    content: `I'm starting this blog to document my professional and personal evolution. This space will serve as a record of my journey as a developer, capturing insights, challenges, and growth along the way.

  ## Why Create This Space?

  The motivation behind this blog is multifaceted:

  - **Document learnings**: Capturing technical insights and lessons learned from real-world projects
  - **Share knowledge**: Contributing to the developer community by sharing experiences and solutions
  - **Reflect on the process**: Taking time to analyze approaches, decisions, and outcomes
  - **Build a timeline**: Creating a historical record of my evolution and milestones

  ## The Power of Writing

  I believe writing is a powerful tool for learning and growth. Documenting what we learn not only helps solidify our understanding but also creates valuable resources for our future selves and others facing similar challenges.

  This is just the beginning. Let's see where this journey takes us.`,
  },
  {
    slug: "integrating-legacy-components-react",
    title: "Challenges in Integrating Legacy Components in Modern React Applications",
    date: "11-18-2025",
    category: "development",
    excerpt: "A technical account of compatibility challenges between different web development paradigms and architectural recommendations.",
    content: `Recently, I faced an interesting technical challenge when integrating a legacy component into a modern React application. This report aims to document the compatibility difficulties between different web development paradigms.

  ## Technical Context

  The main application was developed entirely in React.js, using client-side rendering (CSR). However, there was a need to integrate an external component that followed the traditional loading pattern via \`<script>\` tag.

  The behavior of this component was as follows:
  - Its dependencies (HTML, CSS, and JavaScript) were loaded during application initialization
  - Resources remained cached in the browser or CDN throughout the entire session
  - The structure was completely static after initial loading

  ## The Problem

  The legacy component had an internally implemented theming system (light/dark theme), without exposing APIs or methods for external control. The React application, on the other hand, already had a theme switcher managed by its own state and context.

  The need arose when synchronization of the theme between the React application and the legacy component was requested. The challenge was to dynamically modify a component whose assets had already been loaded and remained static in the browser.

  ## Problem Analysis

  This scenario illustrates a common issue in software engineering: incompatibility between architectural patterns from different generations. Components that depend on static loading via \`<script>\` were not designed to react to runtime state changes, a fundamental characteristic in reactive frameworks like React.

  ## Solutions and Recommendations

  Although technical workarounds exist (such as forcing component reload or directly manipulating the DOM), the most sustainable approach involves:

  1. **Gradual migration**: Replace legacy components with versions compatible with the React ecosystem
  2. **Wrapper Components**: Create React components that encapsulate legacy logic, exposing controlled interfaces
  3. **Plugin architecture**: Implement a system that allows bidirectional communication between different contexts

  ## Conclusion

  The coexistence of technologies from different generations is a reality in software development. While it's tempting to seek quick solutions when there's deadline pressure, investing in refactoring and technical modernization significantly reduces technical debt and facilitates future maintenance. The ideal is to maintain architectural consistency, using patterns and tools compatible with the application's main paradigm.`,
  },
  {
    slug: "using-tools-that-will-steal-our-jobs",
    title: "Using the Tools That Will Steal Our Jobs",
    date: "11-27-2025",
    category: "development",
    excerpt: "A candid experiment with AI-powered development tools and what it means for productivity, quality, and the future of coding.",
    content: `I decided to write a quick post without overthinking complex narratives. Nothing groundbreaking here—no debugging sagas or computational logic deep dives. Just a straightforward take on something we're all already doing.

  ## The Reality Check

  Let's be honest: AI tools are everywhere now. Developers use them. Designers use them. Writers use them. It's not a question of *if* anymore, but *how*.

  This week, I had a simple problem: **no time to code**. My side project, [saedra](https://github.com/lubjr/saedra) (I'll write a proper post about it eventually), was collecting dust while work demands piled up. So I did what many of us are doing now—I paid for Claude and put it to work.

  ## The Experiment

  Here's what happened:

  **Last week:** A feature sat incomplete because I had no time to finish it.

  **This week:** Using Claude Code, the AI created a complete commit, pushed it to a branch, and basically shipped the feature.

  Yes, you read that right. The tool:
  - Analyzed the codebase
  - Implemented the feature
  - Created a commit
  - Published to the repository

  My role? Reviewing the code, fixing a few details, adjusting the structure. That's it.

  ## What Does This Mean?

  I'm still processing this. On one hand, I delivered something in days that would have taken me weeks given my current schedule. On the other hand, it raises questions:

  - How much of this was "my work"?
  - What does productivity even mean now?
  - Where's the line between assistance and replacement?

  I don't have answers yet. But I'm committed to documenting this journey—both the velocity gains and the quality implications.

  ## See For Yourself

  The commits are public if you want to judge the results:
  - [Commit 1](https://github.com/lubjr/saedra/commit/8baf75a822ad5fe4b7db7f699ea345a6809844cf)
  - [Commit 2](https://github.com/lubjr/saedra/commit/7c276a1c39679820b155b10a57d4faf380edcfa8)

  ---

  **Next in this series:** Can we actually maintain code quality while dramatically increasing delivery speed with AI? I'll find out over the next few weeks and report back.

  *What's your take? Are you using AI tools in your workflow? How's that going?*`,
  },
  {
  slug: "playwright-testing-modern-web",
  title: "Playwright: Testing That Actually Works",
  date: "12-04-2025",
  category: "development",
  excerpt: "Why I switched to Playwright for end-to-end testing and never looked back.",
  content: `I've been playing around with Playwright lately, and honestly? It's been a game changer for testing web applications.

  Playwright solves most of these problems by design. It's Microsoft's end-to-end testing framework, and it just... works.

  ## What Makes It Different

  **Auto-waiting**: No more sleep(5000) or guessing timeouts. Playwright waits for elements to be ready automatically.

  **Browser contexts**: Each test runs isolated. No cookies leaking, no state pollution between tests.

  **Cross-browser**: Same code works on Chromium, Firefox, and WebKit. No extra setup needed.

  **Debugging**: When tests fail, the trace viewer shows you exactly what happened—DOM snapshots, network requests, console logs, everything.

  ## Simple Examples

  Here's what a basic test looks like:

  test('user can login', async ({ page }) => {
    await page.goto('https://myapp.com/login');
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
  });

  Clean, right? No complex selectors, no waiting logic. Just describe what you want to test.

  **API mocking** is also stupid simple:

  await page.route('**/api/users', route => {
    route.fulfill({ status: 500, body: '{"error": "Server Error"}' });
  });

  Perfect for testing error states without touching the backend.

  **Screenshots for visual testing**:

  await expect(page).toHaveScreenshot('homepage.png');

  Playwright compares it with your baseline and flags differences.

  ## When to Use It

  Use Playwright for:
  - End-to-end user flows
  - Cross-browser compatibility
  - Visual regression testing
  - Testing complex interactions

  Don't use it for:
  - Unit tests (stick with Jest/Vitest)
  - Simple component tests
  - Anything that doesn't need a real browser

  ## Getting Started

  Installation is dead simple:

  npm init playwright@latest

  That's it. The CLI sets everything up, installs browsers, creates example tests. No configuration hell.

  ## Conclusion

  Tests are reliable, debugging is fast, and I spend less time maintaining test infrastructure.

  If you're still fighting with flaky tests or spending hours debugging, give Playwright a shot. It might change how you think about testing.

  **Resources:**
  - [Playwright Docs](https://playwright.dev)
  - [Best Practices](https://playwright.dev/docs/best-practices)
  - [GitHub](https://github.com/microsoft/playwright)

  *Using Playwright already? What's been your experience? Would love to hear how it's working for you.*`,
  },
  {
  slug: "the-delayed-first-one-of-the-year",
  title: "The first one of the year, running late",
  date: "01-12-2026",
  category: "reflections",
  excerpt: "Reflections on my goals for the year, the Saedra project, and thoughts on living authentically as a developer—embracing simplicity, personality, and critical thinking.",
  content: `I wanted to make a post talking a bit more about my perspectives and projects for this year: what are my goals, objectives, thoughts, and lifestyle.

  I think it's worth mentioning that I've been developing Saedra since last year, back in mid-July. Its initial goal is to bring good code practices, good development organization, plenty of artificial intelligence for productivity use, and to carry current market technologies, encompassing the entire ecosystem of a modern application. It's entirely a study project, but I wanted to bring it up here to remember that it's one of the completion goals for this year.

  I had several insights at the beginning of this year, one of the most interesting being about lifestyle. I've been thinking about having a simpler life — not in terms of money, but in terms of style itself. Doing what works and being myself. I think that a large part of today's devs are inspired by minimalist professionals with aesthetic lifestyles ("aesthetic," as we young people say), and man, I feel like life is simple, you know? How about having your own opinion, being yourself, and not copying silly things? Perhaps there's a lack of personality in people, and I take this as self-criticism too.

  Well, after getting sidetracked, let's get to the objectives then:

  - Complete Saedra or develop it enough to be a portfolio of technology and personal knowledge.
  - Remember that the basics work and it's enough to be yourself. Live simply.
  - Finish my book and read others, if possible.
  - Have patience in decisions and take risks too — you have to take risks or your life won't change.
  - Show myself to the world, even if it's in my own way.
  - Take other developments off paper and actually code.
  - Live and have more experiences in general: culture, talking, and leaving the house also does good when you're in the right environment.

  This isn't a manual, much less a step-by-step guide. It's just a light post, truly written by me, to remember that it's never too late to start and much less to change. We are beings of constant change and learning, and each person has a baggage of thoughts. But if you don't have this, go after it: have critical thinking and personality, because what will differentiate you from another person is your opinion, your values, and your decision-making.

  ---

  **Traduzido para português:**

  # O Primeiro do Ano, Atrasado

  Queria fazer um post falando um pouco mais sobre minhas perspectivas e projetos para esse ano: quais são minhas metas, objetivos, pensamento e estilo de vida.

  Acho legal pontuar que já venho desenvolvendo o Saedra desde o ano passado, lá em meados de julho. O objetivo inicial dele é trazer boas práticas de código, uma boa organização de desenvolvimento, bastante inteligência artificial para uso de produtividade, e carregar as tecnologias atuais do mercado, englobando todo o ecossistema de uma aplicação moderna. É um projeto totalmente de estudo, mas quis levantá-lo aqui para lembrar que é uma das metas de finalização para esse ano.

  Tive vários insights nesse começo de ano, um dos mais interessantes é sobre estilo de vida. Estive pensando em ter uma vida mais simples — não em questão de dinheiro, mas em questão de estilo mesmo. Fazer o que funciona e ser eu mesmo. Penso que grande parte dos devs de hoje se inspiram em profissionais minimalistas com estilos de vida estéticos ("aesthetic", como nós jovens dizemos), e cara, sinto que a vida é simples, sabe? Que tal ter sua opinião, ser você e não copiar coisas bobas? Talvez esteja faltando mais personalidade nas pessoas, e levo isso como uma autocrítica também.

  Bom, depois de desviar do assunto, vamos aos objetivos então:

  - Concluir o Saedra ou evoluí-lo o bastante para ser um portfólio de tecnologia e conhecimento pessoal.
  - Me lembrar que o básico funciona e basta ser você. Viva o simples.
  - Terminar meu livro e ler outros, se possível.
  - Ter paciência nas decisões e arriscar também — você tem que correr riscos ou sua vida não muda.
  - Me mostrar ao mundo, mesmo que seja do meu jeito.
  - Tirar os outros desenvolvimentos do papel e codar de fato.
  - Viver e ter mais experiências no geral: cultura, conversar e sair de casa também faz bem quando se está no ambiente certo.

  Isso não é um manual, muito menos um passo a passo. É apenas um post leve, escrito de verdade por mim, para lembrar que nunca é tarde para começar e muito menos para mudar. Somos seres de constante mudança e aprendizado, e cada um tem uma bagagem de pensamentos. Mas se você não tem isso, corra atrás: tenha pensamento crítico e personalidade, pois o que irá diferenciar você de outra pessoa é a sua opinião, seus valores e sua tomada de decisão.`,
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category)
}

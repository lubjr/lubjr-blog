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
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((post) => post.category === category)
}

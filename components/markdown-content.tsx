"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-foreground leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="ml-4 mb-4 space-y-1 list-disc">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-4 mb-4 space-y-1 list-decimal">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground leading-relaxed">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          hr: () => <hr className="my-8 border-border" />,
          code: ({ className, children, ...props }) => {
            const isBlock = className?.includes("language-")
            if (isBlock) {
              return (
                <code className={`${className} text-sm`} {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code className="bg-secondary text-secondary-foreground px-1.5 py-0.5 text-sm font-mono" {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-secondary rounded-none p-4 overflow-x-auto mb-4 text-sm">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-border pl-4 text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

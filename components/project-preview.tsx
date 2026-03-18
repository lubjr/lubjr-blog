"use client"

import { useEffect, useState } from "react"

export function ProjectPreview({ url, title }: { url: string; title: string }) {
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.screenshot?.url) {
          setScreenshotUrl(data.data.screenshot.url)
        } else {
          setLoading(false)
        }
      })
      .catch(() => {
        setLoading(false)
      })
  }, [url])

  if (!loading && !screenshotUrl) return null

  return (
    <div className="mb-3">
      <div className="overflow-hidden border border-border mb-1">
        {loading && !screenshotUrl ? (
          <div className="w-full h-40 bg-secondary animate-pulse" />
        ) : (
          <img
            src={screenshotUrl!}
            alt={`${title} preview`}
            className="w-full"
            onLoad={() => setLoading(false)}
          />
        )}
      </div>
      {screenshotUrl && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ↗ {url}
        </a>
      )}
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "dev.log",
  description: "My journey of learning and evolution",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

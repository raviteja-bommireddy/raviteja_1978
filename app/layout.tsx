import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raviteja Bommireddy - AI Researcher & Data Scientist",
  description:
    "Personal website of Raviteja Bommireddy, Research Assistant specializing in multilingual NLP, computer vision, and AI applications.",
  keywords: ["AI", "Machine Learning", "NLP", "Computer Vision", "Data Science", "Research"],
  authors: [{ name: "Raviteja Bommireddy" }],
  creator: "Raviteja Bommireddy",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

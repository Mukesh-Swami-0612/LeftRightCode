import './globals.css'
import type { Metadata } from 'next'

// Emulating the requested fonts using standard imports since next/font might need valid npm install
// Users in standard browser will fall back, but we define the classes for the styling.

export const metadata: Metadata = {
  title: 'LeftRightCode',
  description: 'Think Left. Build Right. Write Code. The premium developer learning platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="nav-blur h-16 flex items-center px-8 justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl text-white">Left</span>
            <span className="text-white/30 text-xl">|</span>
            <span className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-creative-accent to-pink-500">Right</span>
            <span className="font-mono text-sm ml-2 px-2 py-0.5 rounded bg-white/10 border border-white/20">Code</span>
          </div>
          <div className="flex gap-6 font-medium text-sm text-white/70">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/learn" className="hover:text-white transition-colors">Learning Path</a>
            <a href="/modules" className="hover:text-white transition-colors">Explorer</a>
            <a href="/playground" className="hover:text-white transition-colors">Playground</a>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}

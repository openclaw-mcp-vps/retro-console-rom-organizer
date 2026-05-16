import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RetroVault — Organize Homebrew ROM Collections',
  description: 'Database and organization tool for homebrew console games, ROMs, and development projects with version tracking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4bce840d-5357-4814-b6a5-be131d52a269"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

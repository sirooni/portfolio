import type { Metadata } from "next"
import "./globals.css"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "ゲームとかいっぱい置きたい",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  )
}

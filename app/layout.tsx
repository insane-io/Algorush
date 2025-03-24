import type { Metadata } from 'next'
import './globals.css'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script src="https://s3.amazonaws.com/pageclip-prod/submit.js" />;
      <body>{children}</body>
    </html>
  )
}

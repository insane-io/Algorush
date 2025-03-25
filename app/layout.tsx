import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <Script src="https://s.pageclip.co/v1/pageclip.js" strategy="lazyOnload" /> */}
    </html>
  )
}
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from '~/components/ui/sonner'
import type { Metadata } from 'next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'min.',
  description: 'a simple task app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark:dark">
      <head>
        <meta name="apple-mobile-web-app-title" content="min." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-screen-sm px-4 py-8">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}

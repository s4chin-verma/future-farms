import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <header>
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}

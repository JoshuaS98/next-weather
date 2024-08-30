import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation/Navigation'

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
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        <main className='relative mx-auto h-[100dvh] max-w-7xl px-4 pt-[64px] sm:px-6 lg:px-8'>
          {children}
        </main>
      </body>
    </html>
  )
}

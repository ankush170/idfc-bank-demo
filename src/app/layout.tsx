import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'IDFC Bank Demo',
  description: 'GenAI Integration Demo for IDFC Bank',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className + ' '}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
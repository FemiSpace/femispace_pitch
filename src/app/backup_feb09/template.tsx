import type { Metadata } from 'next'
import { Inter } from 'next/font/google
  
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FemiSpace - Healthcare Innovation',
  description: 'Transforming women\'s healthcare through innovative technology and personalized care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
          {children}
        </main>
      </body>
    </html>
  )
}

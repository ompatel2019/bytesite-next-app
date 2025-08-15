import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import '../animations.css'
import MainLayout from '../components/layouts/MainLayout'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  title: 'Bytesite - Web Development Services',
  description: 'Professional web development services for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}

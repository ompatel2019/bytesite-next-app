import type { Metadata } from 'next'
import './globals.css'
import '../animations.css'
import MainLayout from '../components/layouts/MainLayout'
import { generalSans } from '../fonts/fonts'

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
      <body className={generalSans.variable}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}

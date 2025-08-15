import type { Metadata } from 'next'
import './globals.css'
import '../animations.css'
import MainLayout from '../components/layouts/MainLayout'
import { generalSans } from '../fonts/fonts'

export const metadata: Metadata = {
  title: {
    default: 'Bytesite Digital - AI Marketing & Software Studio Sydney',
    template: '%s | Bytesite Digital'
  },
  description: 'Sydney\'s premier AI Marketing & Software Studio. We create cutting-edge digital solutions, AI-powered marketing campaigns, and custom software for businesses across Sydney.',
  keywords: [
    'AI Marketing Sydney',
    'Software Studio Sydney',
    'Digital Agency Sydney',
    'Web Development Sydney',
    'AI Marketing Agency',
    'Custom Software Sydney',
    'Digital Marketing Sydney',
    'SEO Sydney',
    'Web Design Sydney',
    'AI Solutions Sydney'
  ],
  authors: [{ name: 'Bytesite Digital' }],
  creator: 'Bytesite Digital',
  publisher: 'Bytesite Digital',
  metadataBase: new URL('https://bytesitedigital.com.au'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://bytesitedigital.com.au',
    siteName: 'Bytesite Digital',
    title: 'Bytesite Digital - AI Marketing & Software Studio Sydney',
    description: 'Sydney\'s premier AI Marketing & Software Studio. We create cutting-edge digital solutions and AI-powered marketing campaigns.',
    images: [
      {
        url: '/heroImage1.webp',
        width: 1200,
        height: 630,
        alt: 'Bytesite Digital - AI Marketing & Software Studio Sydney',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bytesite Digital - AI Marketing & Software Studio Sydney',
    description: 'Sydney\'s premier AI Marketing & Software Studio. We create cutting-edge digital solutions and AI-powered marketing campaigns.',
    images: ['/heroImage1.webp'],
    site: '@bytesitedigital',
    creator: '@bytesitedigital',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://bytesitedigital.com.au/rss.xml'
    }
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      },
      {
        url: '/logo2.webp',
        sizes: '192x192',
        type: 'image/webp'
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/logo2.webp',
        sizes: '180x180',
        type: 'image/webp'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo2.webp" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={generalSans.variable}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}

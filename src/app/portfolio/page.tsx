import React from 'react';
import PageTitle from '@/components/PageTitle';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';
import Faqs from '@/components/Faqs';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Bytesite Digital',
  description: 'Explore our portfolio of AI-powered marketing campaigns, custom software solutions, and digital transformations.',
  keywords: [
    "Portfolio AI Marketing Sydney",
    "Software Projects Sydney",
    "Digital Agency Portfolio Sydney",
    "AI Marketing Case Studies Sydney",
    "Custom Software Examples Sydney",
    "Web Development Portfolio Sydney",
    "Digital Marketing Projects Sydney"
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  metadataBase: new URL('https://bytesitedigital.com.au'),
  alternates: {
    canonical: 'https://bytesitedigital.com.au/portfolio',
  },
  openGraph: {
    title: 'Portfolio - Bytesite Digital',
    description: 'Explore our portfolio of AI-powered marketing campaigns, custom software solutions, and digital transformations.',
    url: 'https://bytesitedigital.com.au/portfolio',
    siteName: 'Bytesite Digital',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Portfolio - Bytesite Digital',
    description: 'Explore our portfolio of AI-powered marketing campaigns, custom software solutions, and digital transformations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        pageTitle="Portfolio"
        pageRoute="Home / Portfolio"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-white"
        textColour="text-primary"
      />

      <Portfolio
        portfolio="Our Portfolio"
        consistentLayout={{
          section: 'bg-primary text-white space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <CTA />

      <Faqs
        faqsSec="FAQs"
        consistentLayout={{
          section: 'bg-primary text-white space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
    </>
  );
}

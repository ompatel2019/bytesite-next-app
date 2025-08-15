import React from 'react';
import PageTitle from '@/components/PageTitle';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us - AI Marketing & Software Studio Sydney | Bytesite Digital',
  description: 'Discover why Sydney businesses choose Bytesite Digital: cutting-edge AI marketing technology, innovative software solutions, and proven results across the Sydney region.',
  keywords: [
    "Why Choose AI Marketing Sydney",
    "Software Studio Benefits Sydney",
    "Digital Agency Advantages Sydney",
    "AI Marketing Excellence Sydney",
    "Custom Software Benefits Sydney",
    "Digital Agency Sydney",
    "AI Solutions Sydney"
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  metadataBase: new URL('https://bytesitedigital.com.au'),
  alternates: {
    canonical: 'https://bytesitedigital.com.au/whychooseus',
  },
  openGraph: {
    title: 'Why Choose Us - AI Marketing & Software Studio Sydney | Bytesite Digital',
    description: 'Discover why Sydney businesses choose Bytesite Digital: cutting-edge AI marketing technology, innovative software solutions, and proven results.',
    url: 'https://bytesitedigital.com.au/whychooseus',
    siteName: 'Bytesite Digital',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Why Choose Us - AI Marketing & Software Studio Sydney | Bytesite Digital',
    description: 'Discover why Sydney businesses choose Bytesite Digital: cutting-edge AI marketing technology, innovative software solutions, and proven results.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageTitle
        pageTitle="Why Choose Us"
        pageRoute="Home / Why Choose Us"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-white"
        textColour="text-primary"
      />

      <WhyChooseUs
        whyChooseUS="Why Choose Us"
        consistentLayout={{
          section: 'bg-primary text-white space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <CTA />
    </>
  );
}

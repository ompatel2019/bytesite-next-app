import React from 'react';
import PageTitle from '@/components/PageTitle';
import Pricing from '@/components/Pricing';
import Faqs from '@/components/Faqs';
import CTA from '@/components/CTA';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - AI Marketing & Software Development Sydney | Bytesite Digital',
  description: 'Transparent pricing for AI marketing campaigns, custom software development, and digital solutions. Competitive rates for Sydney businesses seeking innovative technology solutions.',
  keywords: [
    "AI Marketing Pricing Sydney",
    "Software Development Cost Sydney",
    "Digital Agency Pricing Sydney",
    "AI Marketing Plans Sydney",
    "Custom Software Pricing Sydney",
    "Web Development Cost Sydney",
    "Digital Marketing Packages Sydney"
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  metadataBase: new URL('https://bytesitedigital.com.au'),
  alternates: {
    canonical: 'https://bytesitedigital.com.au/pricing',
  },
  openGraph: {
    title: 'Pricing - AI Marketing & Software Development Sydney | Bytesite Digital',
    description: 'Transparent pricing for AI marketing campaigns, custom software development, and digital solutions. Competitive rates for Sydney businesses.',
    url: 'https://bytesitedigital.com.au/pricing',
    siteName: 'Bytesite Digital',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pricing - AI Marketing & Software Development Sydney | Bytesite Digital',
    description: 'Transparent pricing for AI marketing campaigns, custom software development, and digital solutions. Competitive rates for Sydney businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <>
      <PageTitle
        pageTitle="Pricing"
        pageRoute="Home / Pricing"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-white"
        textColour="text-primary"
      />

      <Pricing
        pricing="Our Pricing"
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

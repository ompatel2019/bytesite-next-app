import React from 'react';
import SeoHelmet from '../../components/SeoHelmet';
import PageTitle from '../../components/PageTitle';
import Pricing from '../../components/Pricing';
import Faqs from '../../components/Faqs';
import CTA from '../../components/CTA';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Affordable Web Design & SEO Plans | Bytesite Digital',
  description: 'Find budget-friendly plans and transparent pricing for custom websites, SEO, and hosting in Blacktown & throughout Sydney.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/pricing',
  },
};

export default function PricingPage() {
  const jsonLdPricing = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Bytesite Digital",
    "description": "Learn about our affordable pricing for web design, development, and SEO services in Blacktown & the Sydney region.",
    "url": "https://bytesitedigital.com.au/pricing"
  };

  return (
    <>
      <SeoHelmet
        title="Pricing - Bytesite Digital"
        description="Find budget-friendly plans and transparent pricing for custom websites, SEO, and hosting in Blacktown & throughout Sydney."
        canonicalUrl="https://bytesitedigital.com.au/pricing"
        jsonSchema={jsonLdPricing}
      />

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

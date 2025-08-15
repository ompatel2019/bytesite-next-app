import React from 'react';
import SeoHelmet from '../../components/SeoHelmet';
import PageTitle from '../../components/PageTitle';
import WhyChooseUs from '../../components/WhyChooseUs';
import CTA from '../../components/CTA';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us - Web Development Excellence | Bytesite Digital',
  description: 'Discover our advantages for businesses in Blacktown & Sydney: blazing fast speeds, powerful SEO strategies, and top-tier design solutions.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/whychooseus',
  },
};

export default function WhyChooseUsPage() {
  const jsonLdWhyChooseUs = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Us - Bytesite Digital",
    "description": "Learn why Bytesite Digital is the best partner for your online success—speed, SEO, and top-tier design in Blacktown & the Sydney region.",
    "url": "https://bytesitedigital.com.au/whychooseus"
  };

  return (
    <>
      <SeoHelmet
        title="Why Choose Us - Bytesite Digital"
        description="Discover our advantages for businesses in Blacktown & Sydney: blazing fast speeds, powerful SEO strategies, and top-tier design solutions."
        canonicalUrl="https://bytesitedigital.com.au/whychooseus"
        jsonSchema={jsonLdWhyChooseUs}
      />

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

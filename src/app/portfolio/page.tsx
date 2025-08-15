import React from 'react';
import SeoHelmet from '../../components/SeoHelmet';
import PageTitle from '../../components/PageTitle';
import Portfolio from '../../components/Portfolio';
import CTA from '../../components/CTA';
import Faqs from '../../components/Faqs';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Our Web Development Projects | Bytesite Digital',
  description: 'Check out our custom web solutions and creative projects for clients in Blacktown and the entire Sydney region.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/portfolio',
  },
};

export default function PortfolioPage() {
  const jsonLdPortfolio = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Portfolio - Bytesite Digital",
    "description": "Explore our past projects and success stories showcasing custom websites, SEO solutions, and design transformations for Blacktown & the Sydney region.",
    "url": "https://bytesitedigital.com.au/portfolio"
  };

  return (
    <>
      <SeoHelmet
        title="Portfolio - Bytesite Digital"
        description="Check out our custom web solutions and creative projects for clients in Blacktown and the entire Sydney region."
        canonicalUrl="https://bytesitedigital.com.au/portfolio"
        jsonSchema={jsonLdPortfolio}
      />

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

import React from 'react';
import SeoHelmet from '../SeoHelmet';
import PageTitle from '../PageTitle';
import Portfolio from '../Portfolio';
import CTA from '../CTA';
import Faqs from '../Faqs';

const PortfolioPage: React.FC = () => {
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
        backgroundColour="bg-c4-0"
        textColour="text-c1-0"
      />

      <Portfolio
        portfolio="Our Portfolio"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />

      <CTA />

      <Faqs
        faqsSec="FAQs"
        consistentLayout={{
          section: 'bg-c1-0 text-c4-0 font-dm-sans space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
    </>
  );
};

export default PortfolioPage;

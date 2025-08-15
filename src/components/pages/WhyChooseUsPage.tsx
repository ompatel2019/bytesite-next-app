import React from 'react';
import SeoHelmet from '../SeoHelmet';
import PageTitle from '../PageTitle';
import WhyChooseUs from '../WhyChooseUs';
import CTA from '../CTA';

interface WhyChooseUsPageProps {
  section?: string;
  sectionName?: string;
  sectionSubheading?: string;
  sectionDescriptionHeading?: string;
  sectionText?: string;
  schoolsData?: any;
}

const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ section, sectionName, sectionSubheading, sectionDescriptionHeading, sectionText, schoolsData }) => {
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
};

export default WhyChooseUsPage;

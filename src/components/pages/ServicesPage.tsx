import React from 'react';
import SeoHelmet from '../SeoHelmet';
import PageTitle from '../PageTitle';
import Services from '../Services';
import CTA from '../CTA';
import Faqs from '../Faqs';

const ServicesPage: React.FC = () => {
  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Bytesite Digital",
    "description": "Explore our range of web and digital marketing services at Bytesite Digital, serving Blacktown & Sydney region.",
    "url": "https://bytesitedigital.com.au/services"
  };

  return (
    <>
      <SeoHelmet
        title="Services - Bytesite Digital"
        description="Discover how our web design, development, and SEO services for Blacktown & Sydney can elevate your online presence."
        canonicalUrl="https://bytesitedigital.com.au/services"
        jsonSchema={jsonLdServices}
      />

      <PageTitle
        pageTitle="Services"
        pageRoute="Home / Services"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-white"
        textColour="text-primary"
      />

      <Services
        servicesSection="Our Services"
        consistentLayout={{
          section: 'bg-primary text-white space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
        screenWidth={0}
      />

      <CTA />

      <Faqs
        faqsSec="Frequently Asked Questions"
        consistentLayout={{
          section: 'bg-primary text-white space-y-8 py-16 responsivePad',
          sectionClass: 'h6 font-semibold',
          sectionSubheadingClass: 'h4 font-semibold'
        }}
      />
    </>
  );
};

export default ServicesPage;

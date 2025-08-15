'use client';

import React from 'react';
import SeoHelmet from '../SeoHelmet';
import useScreenWidth from '../../hooks/useScreenWidth';

import Hero from '../Hero';
import SlidingText from '../SlidingText';
import Services from '../Services';
import WhyChooseUs from '../WhyChooseUs';
import Portfolio from '../Portfolio';
import Pricing from '../Pricing';
import ContactForm from '../ContactForm';
import Blogs from './blogs/Blogs';
import Faqs from '../Faqs';

interface ConsistentLayout {
  section: string;
  sectionClass: string;
  sectionSubheadingClass: string;
}

interface HomePageProps {
  consistentLayout: ConsistentLayout;
  hoverBg: string;
}

const HomePage: React.FC<HomePageProps> = ({ consistentLayout, hoverBg }) => {
  const screenWidth = useScreenWidth();

  const jsonLdHome = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bytesite Digital",
    "url": "https://bytesitedigital.com.au/",
    "description": "Professional web development and SEO services for Blacktown & the Sydney region.",
    "sameAs": [
      "https://www.facebook.com/BytesiteDigital",
      "https://www.linkedin.com/company/bytesite-digital"
    ]
  };

  return (
    <>
      <SeoHelmet
        title="Bytesite Digital | Web Solutions for Blacktown & Sydney Region"
        description="Bytesite Digital offers responsive, high-performance websites—serving businesses in Blacktown and across the Sydney region. Optimized for all devices."
        canonicalUrl="https://bytesitedigital.com.au/"
        jsonSchema={jsonLdHome}
      />

      <Hero hoverBg={hoverBg} consistentLayout={consistentLayout} screenWidth={screenWidth} />
      <SlidingText />
      <Services servicesSection="Services" consistentLayout={consistentLayout} screenWidth={screenWidth} />
      <WhyChooseUs whyChooseUS="Why Choose Us" consistentLayout={consistentLayout} />
      <Portfolio portfolio="Portfolio" consistentLayout={consistentLayout} />
      <Pricing pricing="Pricing" consistentLayout={consistentLayout} />
      <ContactForm contactForm="Contact Form" consistentLayout={consistentLayout} />
      <Blogs blogsSec="Blogs" consistentLayout={consistentLayout} />
      <Faqs faqsSec="FAQs" consistentLayout={consistentLayout} />
    </>
  );
};

export default HomePage;

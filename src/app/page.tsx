import React from "react";
import SeoHelmet from "../components/SeoHelmet";
import Hero from "../components/Hero";
import SlidingText from "../components/SlidingText";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import Blogs from "../components/Blogs";
import Faqs from "../components/Faqs";
import { Metadata } from "next";

const consistentLayout = {
  section:
    "responsivePad bg-primary text-white space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]",
  sectionClass: "h6 font-semibold",
  sectionSubheadingClass: "h4 font-semibold",
};

const hoverBg = "hover:bg-orange-500";

export const metadata: Metadata = {
  title: "Bytesite Digital - Professional Web Development & Digital Solutions",
  description:
    "Bytesite Digital offers professional web development, digital marketing, and custom software solutions. Transform your business with our expert team and cutting-edge technology.",
  alternates: {
    canonical: "https://bytesitedigital.com.au",
  },
};

export default function Home() {
  const jsonLdHome = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bytesite Digital",
    url: "https://bytesitedigital.com.au/",
    description:
      "Professional web development and SEO services for Blacktown & the Sydney region.",
    sameAs: [
      "https://www.facebook.com/BytesiteDigital",
      "https://www.linkedin.com/company/bytesite-digital",
    ],
  };

  return (
    <>
      <SeoHelmet
        title="Bytesite Digital | Web Solutions for Blacktown & Sydney Region"
        description="Bytesite Digital offers responsive, high-performance websites—serving businesses in Blacktown and across the Sydney region. Optimized for all devices."
        canonicalUrl="https://bytesitedigital.com.au/"
        jsonSchema={jsonLdHome}
      />

      <Hero hoverBg={hoverBg} consistentLayout={consistentLayout} />
      <SlidingText />
      <Services
        servicesSection="Services"
        consistentLayout={consistentLayout} 
      />
      <WhyChooseUs
        whyChooseUS="Why Choose Us"
        consistentLayout={consistentLayout}
      />
      <Portfolio portfolio="Portfolio" consistentLayout={consistentLayout} />
      <Pricing pricing="Pricing" consistentLayout={consistentLayout} />
      <ContactForm
        contactForm="Contact Form"
        consistentLayout={consistentLayout}
      />
      <Blogs blogsSec="Blogs" consistentLayout={consistentLayout} />
      <Faqs faqsSec="FAQs" consistentLayout={consistentLayout} />
    </>
  );
}

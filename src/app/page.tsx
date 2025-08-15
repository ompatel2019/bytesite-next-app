import React from "react";
import Hero from "../components/Hero";
import SlidingText from "../components/SlidingText";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
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
  title: "Bytesite Digital - AI Marketing & Software Studio | Sydney's Premier Digital Agency",
  description: "Sydney's leading AI Marketing & Software Studio. We create cutting-edge digital solutions, AI-powered marketing campaigns, and custom software for businesses across Sydney. Transform your business with our innovative technology.",
  keywords: [
    "AI Marketing Sydney",
    "Software Studio Sydney", 
    "Digital Agency Sydney",
    "Web Development Sydney",
    "AI Marketing Agency",
    "Custom Software Sydney",
    "Digital Marketing Sydney",
    "SEO Sydney",
    "Web Design Sydney",
    "AI Solutions Sydney"
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bytesitedigital.com.au'),
  alternates: {
    canonical: "https://bytesitedigital.com.au",
  },
  openGraph: {
    title: "Bytesite Digital - AI Marketing & Software Studio | Sydney",
    description: "Sydney's premier AI Marketing & Software Studio. We create cutting-edge digital solutions and AI-powered marketing campaigns for businesses across Sydney.",
    url: "https://bytesitedigital.com.au",
    siteName: "Bytesite Digital",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/heroImage1.webp",
        width: 1200,
        height: 630,
        alt: "Bytesite Digital - AI Marketing & Software Studio Sydney",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytesite Digital - AI Marketing & Software Studio | Sydney",
    description: "Sydney's premier AI Marketing & Software Studio. We create cutting-edge digital solutions and AI-powered marketing campaigns.",
    images: ["/heroImage1.webp"],
    site: "@bytesitedigital",
    creator: "@bytesitedigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'article:published_time': new Date().toISOString(),
    'article:modified_time': new Date().toISOString(),
    'article:author': 'https://www.linkedin.com/company/bytesite-digital',
  },
};

export default function Home() {
  return (
    <>
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
      <Faqs faqsSec="FAQs" consistentLayout={consistentLayout} />
    </>
  );
}

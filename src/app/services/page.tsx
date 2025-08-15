import React from "react";
import PageTitle from '@/components/PageTitle';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Faqs from '@/components/Faqs';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Bytesite Digital",
  description: "Discover our comprehensive AI marketing, custom software development, and digital solutions.",
  keywords: [
    "AI Marketing Services Sydney",
    "Custom Software Development Sydney",
    "Digital Marketing Sydney",
    "Web Development Sydney",
    "AI Solutions Sydney",
    "Software Studio Sydney",
    "Digital Agency Services Sydney",
    "AI Marketing Agency Sydney",
    "Custom Software Sydney",
    "Web Design Sydney"
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  metadataBase: new URL('https://bytesitedigital.com.au'),
  alternates: {
    canonical: "https://bytesitedigital.com.au/services",
  },
  openGraph: {
    title: "Services - Bytesite Digital",
    description: "Discover our comprehensive AI marketing, custom software development, and digital solutions.",
    url: "https://bytesitedigital.com.au/services",
    siteName: "Bytesite Digital",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services - Bytesite Digital",
    description: "Discover our comprehensive AI marketing, custom software development, and digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <>
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
          section: "bg-primary text-white space-y-8 py-16 responsivePad",
          sectionClass: "h6 font-semibold",
          sectionSubheadingClass: "h4 font-semibold",
        }}
      />

      <CTA />

      <Faqs
        faqsSec="Frequently Asked Questions"
        consistentLayout={{
          section: "bg-primary text-white space-y-8 py-16 responsivePad",
          sectionClass: "h6 font-semibold",
          sectionSubheadingClass: "h4 font-semibold",
        }}
      />
    </>
  );
}

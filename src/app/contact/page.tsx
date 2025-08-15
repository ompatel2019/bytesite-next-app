import React from "react";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us - Bytesite Digital",
  description:
    "Get in touch with Bytesite Digital for AI marketing and custom software solutions. Free consultation available.",
  keywords: [
    "Contact AI Marketing Sydney",
    "Software Studio Contact Sydney",
    "Digital Agency Contact Sydney",
    "AI Marketing Consultation Sydney",
    "Custom Software Quote Sydney",
    "Web Development Contact Sydney",
  ],
  authors: [{ name: "Bytesite Digital" }],
  creator: "Bytesite Digital",
  publisher: "Bytesite Digital",
  metadataBase: new URL("https://bytesitedigital.com.au"),
  alternates: {
    canonical: "https://bytesitedigital.com.au/contact",
  },
  openGraph: {
    title:
      "Contact Us - Bytesite Digital",
    description:
      "Get in touch with Bytesite Digital for AI marketing and custom software solutions. Free consultation available.",
    url: "https://bytesitedigital.com.au/contact",
    siteName: "Bytesite Digital",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Contact Us - Bytesite Digital",
    description:
      "Get in touch with Bytesite Digital for AI marketing and custom software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <>
      <PageTitle
        pageTitle="Contact Us"
        pageRoute="Home / Contact"
        dividerBackground="bg-black"
        dividerFill="#111111"
        backgroundColour="bg-white"
        textColour="text-primary"
      />

      <ContactForm
        contactForm="Get in Touch"
        consistentLayout={{
          section: "bg-primary text-white space-y-8 py-16 responsivePad",
          sectionClass: "h6 font-semibold",
          sectionSubheadingClass: "h4 font-semibold",
        }}
      />

      <Faqs
        faqsSec="FAQs"
        consistentLayout={{
          section: "bg-primary text-white space-y-8 py-16 responsivePad",
          sectionClass: "h6 font-semibold",
          sectionSubheadingClass: "h4 font-semibold",
        }}
      />
      <CTA />
    </>
  );
}

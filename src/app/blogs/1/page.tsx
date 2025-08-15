import Blog1 from '../../../components/pages/blogs/Blog1'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-primary text-white font-dm-sans space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
}

// Blog metadata
const blogTitle = 'The Ultimate Guide to Optimising Your Website for 2025';
const blogDescription = `As we approach 2025, website optimization continues to evolve at a rapid pace. AI-driven algorithms demand high-quality, context-rich content, while user expectations for speed, security, and personalized experiences keep rising.`;
const blogUrl = 'https://bytesitedigital.com.au/blogs/1';
const blogPublishDate = '2024-12-28';

// JSON-LD for schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": blogTitle,
  "image": "/blog1.webp",
  "description": blogDescription.trim(),
  "author": {
    "@type": "Organization",
    "name": "Bytesite Digital"
  },
  "url": blogUrl,
  "datePublished": blogPublishDate,
  "publisher": {
    "@type": "Organization",
    "name": "Bytesite Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bytesitedigital.com.au/favicon.svg"
    }
  }
};

export const metadata: Metadata = {
  title: `${blogTitle} | Bytesite Digital`,
  description: blogDescription,
  alternates: {
    canonical: blogUrl,
  },
  other: {
    'json-ld': JSON.stringify(jsonLd),
  },
};

export default function Blog1Page() {
  return <Blog1 consistentLayout={consistentLayout} />
}

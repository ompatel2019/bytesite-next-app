import Blog3 from '../../../components/pages/blogs/Blog3'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-primary text-white space-y-8 max-md:space-y-2 xl:py-[48px] lg:py-[40px] md:py-[32px] py-[24px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
}

// Blog metadata
const blogTitle = 'The Future of E-commerce: What to Expect in 2025';
const blogDescription = `Explore the emerging trends and technologies that will shape the future of e-commerce in 2025. From AI-powered shopping experiences to sustainable commerce solutions.`;
const blogUrl = 'https://bytesitedigital.com.au/blogs/3';

export const metadata: Metadata = {
  title: `${blogTitle} | Bytesite Digital`,
  description: blogDescription,
  alternates: {
    canonical: blogUrl,
  },
};

export default function Blog3Page() {
  return <Blog3 consistentLayout={consistentLayout} />
}

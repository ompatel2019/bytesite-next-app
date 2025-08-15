import Blog3 from '../../../components/pages/blogs/Blog3'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
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

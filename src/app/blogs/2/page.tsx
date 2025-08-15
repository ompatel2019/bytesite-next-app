import Blog2 from '../../../components/pages/blogs/Blog2'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
}

// Blog metadata
const blogTitle = '10 Essential Web Design Trends for 2025';
const blogDescription = `Stay ahead of the curve with these cutting-edge web design trends that will dominate 2025. From AI-powered interfaces to sustainable design principles, discover what's next in web design.`;
const blogUrl = 'https://bytesitedigital.com.au/blogs/2';

export const metadata: Metadata = {
  title: `${blogTitle} | Bytesite Digital`,
  description: blogDescription,
  alternates: {
    canonical: blogUrl,
  },
};

export default function Blog2Page() {
  return <Blog2 consistentLayout={consistentLayout} />
}

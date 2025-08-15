import BlogsPage from '../../components/pages/BlogsPage'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-primary text-white space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
}

export const metadata: Metadata = {
  title: 'Blog - Web Development Insights & Digital Trends | Bytesite Digital',
  description: 'Stay updated with the latest web development trends, digital marketing insights, and technology news from our expert team at Bytesite Digital.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/blogs',
  },
};

export default function Blogs() {
  return <BlogsPage consistentLayout={consistentLayout} />
}

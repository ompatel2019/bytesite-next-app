import HomePage from '../components/pages/HomePage'
import { Metadata } from 'next'

const consistentLayout = {
  section: 'responsivePad bg-primary text-white space-y-8 max-md:space-y-2 xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
}

const hoverBg = 'hover:bg-orange-500'

export const metadata: Metadata = {
  title: 'Bytesite Digital - Professional Web Development & Digital Solutions',
  description: 'Bytesite Digital offers professional web development, digital marketing, and custom software solutions. Transform your business with our expert team and cutting-edge technology.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au',
  },
};

export default function Home() {
  return (
    <HomePage consistentLayout={consistentLayout} hoverBg={hoverBg} />
  )
}

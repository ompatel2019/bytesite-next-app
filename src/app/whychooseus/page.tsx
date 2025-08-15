import WhyChooseUsPage from '../../components/pages/WhyChooseUsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us - Your Trusted Web Development Partner | Bytesite Digital',
  description: 'Discover why businesses choose Bytesite Digital for their web development needs. Expert team, proven results, and commitment to excellence.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/whychooseus',
  },
};

export default function WhyChooseUs() {
  return <WhyChooseUsPage />
}

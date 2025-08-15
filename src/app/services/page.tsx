import ServicesPage from '../../components/pages/ServicesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Web Development, Digital Marketing & More | Bytesite Digital',
  description: 'Discover our comprehensive range of digital services including web development, digital marketing, SEO, and custom software solutions. Expert team delivering results.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/services',
  },
};

export default function Services() {
  return <ServicesPage />
}

import PricingPage from '../../components/pages/PricingPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Packages - Affordable Web Development Solutions | Bytesite Digital',
  description: 'Transparent pricing for our web development and digital services. Choose from our flexible packages designed to fit your budget and business needs.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/pricing',
  },
};

export default function Pricing() {
  return <PricingPage />
}

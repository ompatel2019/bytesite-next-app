import PortfolioPage from '../../components/pages/PortfolioPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio - Web Development Projects & Success Stories | Bytesite Digital',
  description: 'Explore our portfolio of successful web development projects, digital solutions, and client success stories. See how we transform businesses through technology.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/portfolio',
  },
};

export default function Portfolio() {
  return <PortfolioPage />
}

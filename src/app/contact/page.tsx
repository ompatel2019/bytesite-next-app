import ContactPage from '../../components/pages/ContactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get In Touch | Bytesite Digital',
  description: 'Ready to start your project? Contact our team of web development experts. We\'re here to discuss your needs and provide a free consultation.',
  alternates: {
    canonical: 'https://bytesitedigital.com.au/contact',
  },
};

export default function Contact() {
  return <ContactPage />
}

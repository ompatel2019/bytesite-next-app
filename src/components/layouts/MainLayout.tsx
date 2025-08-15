import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const navBarLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Why Choose Us', to: '/whychooseus' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blogs', to: '/blogs' },
];

interface MainLayoutProps {
  children: React.ReactNode;
  consistentLayout?: any;
  hoverBg?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, consistentLayout, hoverBg }) => {
  return (
    <>
      <Navbar
        hoverBg={hoverBg}
        navBarLinks={navBarLinks}
      />

      {/* Renders the page content */}
      {children}

      <Footer consistentLayout={consistentLayout} />
    </>
  );
};

export default MainLayout;


import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import WhatIsMigrainSection from '../components/WhatIsMigrainSection';
import SeparatorSection from '../components/SeparatorSection';
import ManageYourMigrainSection from '../components/ManageYourMigrainSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import EbookOfferSection from '../components/EbookOfferSection';

const Index = () => {
  console.log('Index.tsx: Rendering Index page...');

  useEffect(() => {
    console.log('Index.tsx: Setting up scroll animation...');
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EbookOfferSection />
      <StorySection />
      <WhatIsMigrainSection />
      <SeparatorSection />
      <ManageYourMigrainSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;

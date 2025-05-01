import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import DomainExpertise from '@/components/DomainExpertise';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimations, setupNavLinkHighlight } from '@/lib/utils';

export default function Home() {
  useEffect(() => {
    document.title = 'Portfolio | Product & Tech Lead';
    
    // Set up scroll animations and nav highlighting
    const cleanupScrollAnimations = setupScrollAnimations();
    const cleanupNavHighlight = setupNavLinkHighlight();
    
    return () => {
      cleanupScrollAnimations();
      cleanupNavHighlight();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <DomainExpertise />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

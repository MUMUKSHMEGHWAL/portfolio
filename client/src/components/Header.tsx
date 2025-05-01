import { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import { X, Menu } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, label, isActive, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className={`nav-link relative px-2 py-1 ${
      isActive 
        ? 'active text-secondary-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary-500 after:rounded-full' 
        : 'text-gray-700 hover:text-secondary-600'
    } transition-all duration-300 after:transition-all after:duration-300 after:ease-in-out hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-secondary-300 hover:after:rounded-full`}
    onClick={(e) => {
      e.preventDefault();
      const id = href.replace('#', '');
      scrollToElement(id);
      if (onClick) onClick();
    }}
  >
    {label}
  </a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMobile();
  
  // Handle scroll to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#domains', label: 'Domains' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 transform-gpu transition-all duration-700" style={{ transform: 'translateY(0)', opacity: 1, transitionDelay: '0.6s' }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 font-heading flex items-center group">
          <span className="text-secondary-600 bg-clip-text transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-secondary-500 group-hover:to-secondary-700">Mumuksh Meghwal</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div 
              key={link.href} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${0.8 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
            >
              <NavLink 
                href={link.href}
                label={link.label}
                isActive={activeSection === link.href.replace('#', '')}
              />
            </div>
          ))}
        </nav>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-0 bg-white z-50 flex flex-col p-5 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-gray-800">Menu</span>
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.href.replace('#', '')}
                onClick={closeMenu}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

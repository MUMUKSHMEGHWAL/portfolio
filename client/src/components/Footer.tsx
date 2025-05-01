import { Linkedin, Github, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { scrollToElement } from '@/lib/utils';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-secondary-400 transition-colors"
    onClick={(e) => {
      e.preventDefault();
      const id = href.replace('#', '');
      scrollToElement(id);
    }}
  >
    {children}
  </a>
);

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-gray-700 hover:bg-secondary-600 flex items-center justify-center transition-colors"
  >
    {icon}
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-xl font-bold flex items-center">
                <span className="text-secondary-500">Mumuksh Meghwal</span>
              </a>
              <p className="text-gray-400 mt-2">Product & Technology Leader</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#domains">Domains</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} All Rights Reserved
            </p>
            
            <div className="flex space-x-4">
              <SocialIcon href={SOCIAL_LINKS.LINKEDIN} icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon href={SOCIAL_LINKS.GITHUB} icon={<Github className="h-4 w-4" />} />
              <SocialIcon href={SOCIAL_LINKS.TWITTER} icon={<Twitter className="h-4 w-4" />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

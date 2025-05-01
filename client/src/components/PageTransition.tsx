import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const loaderTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Content reveal animation after loading completes
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
      
      // Initialize scroll animations after page loads
      if (typeof window !== 'undefined') {
        // Add event listener for scroll animations
        const handleScroll = () => {
          const scrollElements = document.querySelectorAll('[data-scroll]');
          scrollElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
              element.classList.remove('opacity-0');
              const animationType = element.getAttribute('data-scroll') || 'fade-in-up';
              element.classList.add(`animate-${animationType}`);
            }
          });
        };

        // Initial check for elements in view
        setTimeout(handleScroll, 600);
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, 800);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Define animation styles for overlay and content
  const overlayClass = `fixed inset-0 bg-secondary-600 z-50 transition-transform duration-700 ease-in-out ${
    isLoaded ? 'translate-y-full' : 'translate-y-0'
  }`;

  const contentClass = `${
    contentVisible ? 'animate-page-enter' : 'opacity-0 translate-y-10'
  }`;

  return (
    <>
      {/* Loading overlay */}
      <div className={overlayClass}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="flex flex-col items-center animate-page-load-logo">
            <div className="text-3xl font-bold mb-2">MM</div>
            <div className="w-12 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className={contentClass}>
        {children}
      </div>
    </>
  );
}
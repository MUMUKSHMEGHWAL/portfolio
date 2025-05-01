import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to element
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Check if element is in view
export function isElementInView(el: HTMLElement, dividend = 1): boolean {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
}

// Handle scroll animations
export function setupScrollAnimations() {
  const scrollElements = document.querySelectorAll(".scroll-fade");
  
  const displayScrollElement = (element: Element) => {
    element.classList.add("show");
  };
  
  const hideScrollElement = (element: Element) => {
    element.classList.remove("show");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (isElementInView(el as HTMLElement, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Check on page load
  
  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScrollAnimation);
  };
}

// Update active nav link on scroll
export function setupNavLinkHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const handleNavHighlight = () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < 100) {
        current = section.getAttribute("id") || "";
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href && href === `#${current}`) {
        link.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", handleNavHighlight);
  handleNavHighlight(); // Check on page load
  
  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleNavHighlight);
  };
}

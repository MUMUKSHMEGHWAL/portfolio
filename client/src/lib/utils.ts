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
  // Get all elements with data-scroll attribute
  const scrollElements = document.querySelectorAll("[data-scroll]");
  
  const displayScrollElement = (element: Element) => {
    // Get animation type from data attribute
    const animationType = element.getAttribute("data-scroll") || "fade-in-up";
    // Get delay from data attribute (if any)
    const delay = element.getAttribute("data-scroll-delay") || "0";
    
    // Apply inline style for delay
    (element as HTMLElement).style.animationDelay = `${delay}s`;
    
    // Add appropriate animation class
    element.classList.add(`animate-${animationType}`);
    element.classList.remove("opacity-0");
    element.classList.add("animate-running");
  };
  
  const hideScrollElement = (element: Element) => {
    // If element should only animate once when in view
    if (element.getAttribute("data-scroll-once") === "true") {
      return;
    }
    
    // Otherwise, remove animation classes
    if (!element.classList.contains("animate-running")) {
      element.classList.add("opacity-0");
      const animationType = element.getAttribute("data-scroll") || "fade-in-up";
      element.classList.remove(`animate-${animationType}`);
    }
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
  
  // Initial check to show elements already in view
  setTimeout(handleScrollAnimation, 100);
  
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

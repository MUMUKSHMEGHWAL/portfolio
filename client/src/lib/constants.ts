// Social Media Links
export const SOCIAL_LINKS = {
  LINKEDIN: "https://linkedin.com/in/username",
  GITHUB: "https://github.com/username",
  TWITTER: "https://twitter.com/username",
  MEDIUM: "https://medium.com/@username"
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: "contact@example.com"
};

// Resume File URLs
export const RESUME_FILES = {
  TECHNICAL: "/api/resumes/technical",
  PRODUCT: "/api/resumes/product",
  MEESHO: "/api/resumes/meesho"
};

// Domain Expertise Data
export type DomainTab = "finance" | "supply-chain" | "people";

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface DomainInfo {
  id: DomainTab;
  title: string;
  shortDescription: string;
  achievements: string[];
  projects: Project[];
}

export const DOMAIN_DATA: Record<DomainTab, DomainInfo> = {
  "finance": {
    id: "finance",
    title: "Finance Operations",
    shortDescription: "Streamlining financial processes and implementing systems that improve accuracy, efficiency, and visibility.",
    achievements: [
      "Automated invoice processing, reducing manual effort by 65%",
      "Developed real-time financial dashboards for executive decision making",
      "Implemented payment reconciliation system saving 20+ hours weekly"
    ],
    projects: [
      {
        title: "Automated Invoice Processing System",
        description: "Designed and implemented an end-to-end system that automates the invoice processing workflow from receipt to payment.",
        tags: ["OCR Technology", "Workflow Automation", "Integration APIs"]
      },
      {
        title: "Financial Analytics Dashboard",
        description: "Created comprehensive analytics tools with real-time reporting capabilities to provide actionable insights for financial decision-making.",
        tags: ["Data Visualization", "Predictive Analytics", "Real-time Reporting"]
      },
      {
        title: "Payment Reconciliation Platform",
        description: "Developed a system to automate payment matching and reconciliation, significantly reducing manual effort and error rates.",
        tags: ["Algorithm Design", "Banking APIs", "Exception Handling"]
      }
    ]
  },
  "supply-chain": {
    id: "supply-chain",
    title: "Supply Chain Management",
    shortDescription: "Optimizing supply chain operations through technology solutions that enhance visibility, efficiency, and decision-making.",
    achievements: [
      "Implemented real-time inventory tracking reducing stockouts by 35%",
      "Created vendor management portal improving communication efficiency",
      "Designed logistics optimization system reducing delivery times by 22%"
    ],
    projects: [
      {
        title: "Inventory Management System",
        description: "Built a comprehensive inventory tracking system with real-time updates, automated reordering, and predictive analytics for stock optimization.",
        tags: ["IoT Integration", "Machine Learning", "Real-time Updates"]
      },
      {
        title: "Vendor Management Portal",
        description: "Designed a centralized platform for vendor onboarding, performance tracking, communication, and document management.",
        tags: ["Performance Analytics", "Secure Document Exchange", "Communication Tools"]
      },
      {
        title: "Logistics Optimization Platform",
        description: "Developed a route optimization system with real-time tracking and analytics to reduce delivery times and transportation costs.",
        tags: ["GPS Integration", "Route Algorithms", "Mobile Applications"]
      }
    ]
  },
  "people": {
    id: "people",
    title: "People Operations",
    shortDescription: "Enhancing HR processes and employee experience through innovative technology solutions and data-driven approaches.",
    achievements: [
      "Built employee performance analytics system improving feedback cycles",
      "Implemented automated onboarding platform reducing time-to-productivity",
      "Developed skills management system for better resource allocation"
    ],
    projects: [
      {
        title: "Performance Management System",
        description: "Created a comprehensive performance tracking platform with continuous feedback mechanisms, goal setting, and analytics.",
        tags: ["OKR Framework", "360° Feedback", "Performance Analytics"]
      },
      {
        title: "Automated Onboarding Platform",
        description: "Designed a digital onboarding experience that streamlines documentation, training, and integration for new employees.",
        tags: ["Document Management", "Learning Modules", "Progress Tracking"]
      },
      {
        title: "Skills Management System",
        description: "Developed a platform to track employee skills, certifications, and expertise to optimize project staffing and identify training needs.",
        tags: ["Skills Mapping", "Resource Allocation", "Learning Recommendations"]
      }
    ]
  }
};

// Tech Skills Data
export interface Skill {
  name: string;
  percentage: number;
}

export const TECH_SKILLS: Skill[] = [
  { name: "Product Architecture", percentage: 95 },
  { name: "System Design", percentage: 90 },
  { name: "Technical Leadership", percentage: 95 },
  { name: "Code Review", percentage: 85 }
];

export const LEADERSHIP_SKILLS: Skill[] = [
  { name: "Product Strategy", percentage: 95 },
  { name: "Team Management", percentage: 90 },
  { name: "Stakeholder Management", percentage: 95 },
  { name: "Agile Implementation", percentage: 85 }
];

// Technical Skills Tags
export const TECHNICAL_SKILLS = [
  "Product Management",
  "Tech Architecture",
  "Agile Methodology",
  "Frontend Development",
  "Backend Systems",
  "Database Design",
  "API Integration",
  "DevOps",
  "Cloud Infrastructure"
];

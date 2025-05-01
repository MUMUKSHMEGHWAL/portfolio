// Social Media Links
export const SOCIAL_LINKS = {
  LINKEDIN: "https://linkedin.com/in/mumukshmeghwal",
  // GITHUB: "https://github.com/username",
  // TWITTER: "https://twitter.com/username",
  // MEDIUM: "https://medium.com/@username"
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: "mumukshmeghwal@gmail.com",
  PHONE: "+91-992-250-104"
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
      "Increased financial reconciliation from 30% to 75%, saving 2+ CR/yr in excess GST paid",
      "Automated finance operations processes for accounts receivable and payable, saving 1 CR/yr",
      "Introduced AI based invoice validation reducing invoice processing TAT by 70% (from 15 days to 5 days)",
      "Introduced vendor wallet reducing payout TAT by 85% (from 30-45 days to 10 days)"
    ],
    projects: []
    // projects: [
    //   {
    //     title: "Vendor Wallet System",
    //     description: "Developed a wallet system to reduce vendor payout time and implemented penalty and incentive structure to improve vendor performance.",
    //     tags: ["Payment Processing", "Vendor Management", "Financial Automation"]
    //   },
    //   {
    //     title: "Financial Compliance Dashboard",
    //     description: "Implemented cost control and margin tracking mechanisms with comprehensive dashboards for executive decision making.",
    //     tags: ["Data Visualization", "Compliance Monitoring", "Margin Analysis"]
    //   },
    //   {
    //     title: "Accounts Reconciliation Platform",
    //     description: "Created a system to automate financial reconciliation, significantly reducing manual effort and saving 10 man-days.",
    //     tags: ["Algorithm Design", "Banking APIs", "Exception Handling"]
    //   }
    // ]
  },
  "supply-chain": {
    id: "supply-chain",
    title: "Supply Chain Management",
    shortDescription: "Optimizing supply chain operations through technology solutions that enhance visibility, efficiency, and decision-making.",
    achievements: [
      "Introduced proof-of-delivery reducing short/wrong supply by 80%, saving 2.6 CR/yr",
      "Enabled 2-10% direct vendor-to-customer deliveries, eliminating intermediate warehouse costs",
      "Optimized last-mile deliveries with route optimization, reducing warehouse and transportation costs by 1.6 CR/yr",
    ],
    projects: []
    // projects: [
    //   {
    //     title: "Proof-of-Delivery System",
    //     description: "Implemented a comprehensive proof-of-delivery system to track and verify deliveries, drastically reducing supply discrepancies.",
    //     tags: ["Mobile Applications", "Digital Verification", "Real-time Updates"]
    //   },
    //   {
    //     title: "Last-Mile Delivery Optimization",
    //     description: "Designed route optimization algorithms to find optimal delivery paths, reducing transportation costs and improving delivery times.",
    //     tags: ["Routing Algorithms", "Geospatial Analysis", "Logistics Planning"]
    //   },
    //   {
    //     title: "Direct Vendor Fulfillment Platform",
    //     description: "Developed a platform to enable direct shipping from vendors to customers, bypassing warehouse operations for eligible orders.",
    //     tags: ["Vendor Integration", "Order Management", "Fulfillment Rules"]
    //   }
    // ]
  },
  "people": {
    id: "people",
    title: "People Operations",
    shortDescription: "Enhancing last mile & fulfilment people operations experience through innovative technology solutions and data-driven approaches.",
    achievements: [
      "Scaled Livspace's Home Services (Urban company equivalent) platform from 1 to 10x, streamlining workflows",
       "Launched Porject Management tool for internationally for KSA, Singapore and Malaysia",
      // "Strengthened Role-Based Access Control (RBAC) for all sensitive systems",
      // "Implemented comprehensive audit logs across services for compliance",
      "Introduced check-in/check-out system for field agents, improving attendance and productivity",
      "Introduced one timeline for one interior project, reducing project TAT by 20% and improved visibility on project status",
      "Introduced daily/weekly project report from system to enhance project visibility for customer",
    ],
    projects: []
    // projects: [
    //   {
    //     title: "Home Services Platform Scaling",
    //     description: "Led the expansion of Livspace's Home Services platform (Urban Company competitor), optimizing offline workflows for 1000+ DAUs.",
    //     tags: ["Platform Scaling", "User Experience", "Service Management"]
    //   },
    //   {
    //     title: "Security & Access Management",
    //     description: "Implemented robust role-based access controls and standardized workflows to align with public company expectations.",
    //     tags: ["RBAC Implementation", "Security Compliance", "Permission Management"]
    //   },
    //   {
    //     title: "Hiring Calendar System",
    //     description: "Initiated and developed an internal hiring calendar tool that streamlined interviewer and interviewee matching, reducing TAT from a week to 1 day.",
    //     tags: ["Process Automation", "Resource Scheduling", "Efficiency Optimization"]
    //   }
    // ]
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
  "ReactJS",
  "VueJS",
  "Micro Frontend",
  "NodeJS",
  "Java",
  "Golang",
  "Python",
  "Design Systems",
  "AWS",
  "CI/CD Pipelines"
];

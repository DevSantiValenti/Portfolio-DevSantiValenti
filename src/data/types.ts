export interface SiteProfile {
  name: string;
  role: string;
  specialization: string;
  description: string;
  heroStack: string[];
  availability: string;
  buildLabel: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  whatsappUrl: string;
  cvUrl: string;
  profileImage: string;
  ogImage: string;
  canonicalUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  year: string;
  category: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  architecture: string;
  results: string;
  demoUrl: string | null;
  githubUrl: string | null;
  externalUrl: string | null;
  featured: boolean;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  knowledge: string[];
}

export interface CourseItem {
  name: string;
  platform: string;
  date: string;
  duration: string;
  description: string;
  certificateUrl: string | null;
}

export interface TechnologyCategory {
  category: string;
  icon: string;
  description: string;
  items: string[];
}


export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
  description: string;
  gpa?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  organization: string;
  date: string;
  url?: string;
}

export type ProjectFilter = 'all' | 'web' | 'machine-learning' | 'devops';

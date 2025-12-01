export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  link: string;
  type?: "project" | "internship" | "web";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: "Internship" | "Work" | "Education";
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  color: string;
  gradient: string;
  skills: string[];
}

export interface Experience {
  company: string;
  companyShort: string;
  role: string;
  location: string;
  duration: string;
  current: boolean;
  promotionNote?: string;
  achievements: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status: 'Live' | 'In Development' | 'Completed';
  type: 'professional' | 'personal';
  url?: string;
  color: string;
  gradient: string;
}
export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  features: string[];
  liveLink: string;
  repoLink: string;
  image: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  status: string;
  year: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'language';
}
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  points: string[];
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  award: string;
}
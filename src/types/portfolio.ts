export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Highlight = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  technologies: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  visual: "typeform" | "face" | "medibot";
};

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  gpa: string;
};

export type LeadershipItem = {
  role: string;
  organization: string;
  contributions: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
};

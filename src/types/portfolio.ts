import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImport;
  link: string;
}

export interface Experience {
  title: string;
  position: string;
  location: string;
  link: string;
  description: Array<{
    title: string;
    desc: string[];
  }>;
  icon: React.ReactElement;
  date: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency?: number; // 1-5 scale
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
}

export interface ContactForm {
  senderEmail: string;
  message: string;
}


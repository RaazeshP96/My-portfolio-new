import React from 'react';
import babiewImg from '@/../public/images/babiew.png';
import readytoworkImg from '@/../public/images/readytowork.png';
import salesAgentImageUrl from '@/../public/images/sales-agent.png';
import kowaImg from '@/../public/images/kowapet.png';
import portfolioImg from '@/../public/images/portfolio.png';
import kakiOkiImg from '@/../public/images/kaki-oki.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';
import type { Experience, Project, Skill } from '@/types/portfolio';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: 'Varicon',
    position: 'Senior Frontend Engineer',
    location: 'Lalitpur, Nepal',
    link: 'https://varicon.com.au/',
    description: [
      {
        title: 'Key Responsibilities:',
        desc: [
          'Designed and implemented React + MUI components for enterprise-scale web modules.',
          'Ensured UI consistency with design system guidelines across multiple modules.',
          'Collaborated with product and design teams to translate Figma designs into functional UI.',
          'Improved code quality through peer reviews, debugging, and performance optimization.',
        ],
      },
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Dec 2024 - Aug 2025',
  },
  {
    title: 'Readytowork.corp',
    position: 'Software Engineer',
    location: 'Kathmandu, Nepal',
    link: 'https://nepal.readytowork.jp/',
    description: [
      {
        title: 'Key Achievements:',
        desc: [
          'Advocated and implemented Next.js for isomorphic rendering, significantly improving load speed and overall performance.',
          'Developed responsive UIs with React and Ant Design that enhanced user interaction and accessibility across devices.',
          'Strengthened software reliability through structured code reviews, debugging, and proactive issue resolution.',
          'Ensured a balance between aesthetics and functionality by adhering to design systems and UX best practices.',
        ],
      },
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Nov 2020 - Aug 2024',
  },
  {
    title: 'MPercept Technology',
    position: 'Python/Django Developer (Intern)',
    location: 'Lalitpur, Nepal',
    link: 'https://www.linkedin.com/company/mpercept-technology/?originalSubdomain=np',
    description: [
      {
        title: 'Key Achievements:',
        desc: [
          'Built CRUD-based REST APIs using Django Rest Framework.',
          'Gained hands-on experience with Git version control and team workflows.',
          'Enhanced backend integration knowledge and strengthened API communication skills.',
        ],
      },
    ],
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Nov 2019 - April 2020',
  },
  {
    title: 'Tribhuvan University',
    location: 'Lalitpur, Nepal',
    position: 'BSc CSIT • Student',
    link: 'https://vedascollege.edu.np/',
    description: [
      {
        title: 'Educational Background',
        desc: [
          "Completed Bachelor's in Computer Science and Information Technology (BSc CSIT).",
          'Comprehensive four-year undergraduate program emphasizing theoretical foundations and practical applications.',
          'Gained proficiency in multiple programming languages (C++, Java, Python) and software engineering principles.',
          'Coursework included database management systems, computer networks, cybersecurity, AI, and machine learning.',
          'Applied learning to solve real-world problems in final year project.',
        ],
      },
    ],
    icon: React.createElement(BookIcon),
    date: '2015 - 2020',
  },
] as const;

export const images = {
  readytoworkImg,
  salesAgentImageUrl,
  babiewImg,
};

export const projectsData: Project[] = [
  {
    title: 'Sales-agent',
    description: 'A recruitment platform specializing in sales recruitment. Developed multi-role portals (Admin, Agent, Consumer) for a recruitment platform. Enabled HR companies and job seekers to streamline job placement and selection.',
    tags: [
      'React.js',
      'Next.js',
      'Ant Design',
      'GO lang',
    ],
    imageUrl: salesAgentImageUrl,
    link: 'https://sales-agent.co.jp/',
  },
  {
    title: 'Babiew',
    description:
      'The Babiew project is a web e-commerce site, where we offer a curated selection of quality essentials to care for your little one.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Material UI',
      'Axios',
      'Tanstack Query',
    ],
    imageUrl: babiewImg,
    link: 'https://www.babiew.com/',
  },
  {
    title: 'Kaki-Oki',
    description: 'An innovative End-of-life platform designed to offer a meaningful way for individuals facing mortality to express their final thoughts. Fullstack contributor role with React.js, Go lang, and REST APIs.',
    tags: [
      'React.js',
      'Go lang',
      'REST APIs',
    ],
    imageUrl: kakiOkiImg,
    link: 'https://kaki-oki.com/',
  },

  {
    title: 'Ready-to-work',
    description:
      'The portfolio website of Readytowork Corp, highlighting our expertise and innovative workforce solutions.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Ant Design',
      'Axios',
      'Framer Motion',
      'Styled-Component',
    ],
    imageUrl: readytoworkImg,
    link: 'https://readytowork.jp/',
  },
  {
    title: 'Kowapets',
    description:
      'System for a pet sales company. Created a two-panel system for customers and administrators. Built responsive UI and integrated content management dashboard.',
    tags: [
      'React.js',
      'Styled Components',
      'Ant Design',
    ],
    imageUrl: kowaImg,
    link: 'https://user-dot-kowapets.an.r.appspot.com/',
  },

  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://rajeshp96.com.np/',
  },
] as const;

export const skillsData: Skill[] = [
  // High proficiency (4/5)
  { name: 'Next.js', icon: '/svgs/nextjs.svg', proficiency: 4 },
  { name: 'JavaScript', icon: '/svgs/javascript-js.svg', proficiency: 4 },
  { name: 'CSS', icon: '/svgs/file-type-css.svg', proficiency: 4 },
  { name: 'Python', icon: '/svgs/python.svg', proficiency: 4 },
  { name: 'Git', icon: '/svgs/git.svg', proficiency: 4 },
  { name: 'React', icon: '/svgs/react.svg', proficiency: 4 },
  { name: 'TypeScript', icon: '/svgs/typescript-icon.svg', proficiency: 4 },

  // Medium proficiency (3/5)
  { name: 'MySQL', icon: '/svgs/MySQL.svg', proficiency: 3 },
  { name: 'HTML', icon: '/svgs/file-type-html.svg', proficiency: 3 },
  { name: 'Go Lang', icon: '/svgs/go.svg', proficiency: 3 },
  { name: 'Django', icon: '/svgs/django.svg', proficiency: 3 },
  { name: 'Django Rest Framework', icon: '/svgs/django.svg', proficiency: 3 },

  // Additional skills (unrated)
  { name: 'Node.js', icon: '/svgs/node-js.svg' },
  { name: 'Express', icon: '/svgs/express-original.svg' },
  { name: 'Tailwind', icon: '/svgs/tailwind-css.svg' },
  { name: 'Framer', icon: '/svgs/framer.svg' },
  { name: 'Redux', icon: '/svgs/redux-original.svg' },
  { name: 'Prisma', icon: '/svgs/file-type-light-prisma.svg' },
  { name: 'MongoDB', icon: '/svgs/mongodb-original.svg' },
  { name: 'Tanstack Query', icon: '/svgs/react-query-seeklogo.svg' },
  { name: 'Tanstack Table', icon: '/svgs/db-table-svgrepo-com.svg' },
  { name: 'Docker', icon: '/svgs/Docker.svg' },
  { name: 'Axios', icon: '/svgs/axios.svg' },
  { name: 'Sass', icon: '/svgs/Sass.svg' },
  { name: 'GitHub', icon: '/svgs/github.svg' },
];

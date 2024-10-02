import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

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

export const experiencesData = [
  {
    title: 'Readytowork.corp',
    position: 'Software Engineer',
    location: 'Kathmandu, Nepal',
    link: 'https://nepal.readytowork.jp/',
    description: [
      {
        title: 'Professional Summary:',
        desc: [
          'Proficient Next.js developer with a strong foundation in React fundamentals.',
          'Skilled in managing component lifecycles and implementing best practices.',
          'Expertise in JavaScript, DOM, CSS, HTML, and other front-end languages.',
          'Specializes in creating responsive and visually appealing web applications.',
        ],
      },
      {
        title: 'Technical Skills:',
        desc: [
          'React: Proficient in leveraging React and its ecosystem.',
          'Next.js: Expertise in utilizing Next.js and hooks to enhance performance and development efficiency.',
          'Collaboration: Effective communication with cross-functional teams and senior management.',
          'Isomorphic React: Advocated for the adoption of Next.js for improved server-side and client-side rendering.',
          'Continuous Learning: Committed to staying updated with the latest industrydevelopments and new release versions.',
        ],
      },
      {
        title: 'User Interface Design:',
        desc: [
          'Utilized Ant Design (Antd) to create intuitive and visually appealing user interfaces, improving user satisfaction scores by 20%.',
          'Demonstrated the ability to balance aesthetics with functionality for a better user experience, leading to a 15% increase in user engagement.',
        ],
      },
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Nov 2011 - Aug 2024',
  },
  {
    title: 'MPercept Technology',
    position: 'Intern',
    location: 'Lalitpur, Nepal',
    link: 'https://www.linkedin.com/company/mpercept-technology/?originalSubdomain=np',
    description: [
      {
        title: 'Summary:',
        desc: [
          'Acquired a strong grasp of RESTful APIs, demonstrating proficiency in designing, implementing, and consuming web services following REST principles.',
          'Gained fundamental knowledge of Git version control, enabling effective collaboration and code management within development teams.',
          'Sharpened written and verbal communication abilities through continuous practice, fostering clear and effective interaction in both technical and non-technical contexts.',
          'Successfully designed and implemented multiple CRUD RESTful APIs using the Django Rest Framework, showcasing the ability to create robust and scalable web applications.',
        ],
      },
    ],
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Nov 2019 - April 2020',
  },
  {
    title: 'Tribhuvan University',
    location: 'Kathmandu, Nepal',
    position: 'Bsc CSIT • Student',
    link: 'https://vedascollege.edu.np/',
    description: [
      {
        title: 'Educational Qualification',
        desc: [
          "Completed Bachelor's in Computer Science and Information Technology (BSc CSIT).",
          'Graduated from Vedas College (formerly known as Aberdeen International College).',
          'The program was affiliated with Tribhuvan University.',
          'Undertook a comprehensive 4-year course covering core computer science and IT principles.',
          'Developed a passion for web development and software engineering during the course.',
        ],
      },
    ],
    icon: React.createElement(BookIcon),
    date: '2015 - 2020',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'FileDrive',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/bbyc4kes/file-drive',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },
  {
    title: 'Audit Master',
    description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, and Due Diligence.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'OpenAI',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
  },
  {
    title: 'Surge',
    description:
      'Welcome Surge! A SaaS Website Builder - service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
  {
    title: 'CampWithUs',
    description:
      'A platform to find and book campsites, featuring a well-designed backend and seamless client-server communication.',
    tags: ['JavaScript', 'Express.js', 'MongoDB', 'Cloudinary', 'EJS'],
    imageUrl: campwithusImg,
    link: 'https://github.com/bbyc4kes/campwithus',
  },
] as const;

export const skillsData = [
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Python', '/svgs/python.svg'],
  ['Django', '/svgs/django.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Go Lang', '/svgs/go.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  // ['', '/svgs/etc.svg'],
] as const;

'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { projectsData } from '@/lib/data';
import Project from './_components/project';
import SectionHeading from '@/components/section-heading';
import SectionDivider from '@/components/section-divider';

export default function ProjectsAnimated() {
  const { ref } = useSectionInView('projects', 0.25);

  return (
    <section
      className="flex px-4 min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="my-4">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}


'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';
import SectionDivider from '@/components/section-divider';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SkillsAnimated() {
  const { ref } = useSectionInView('skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col scroll-mt-10 sm:scroll-mt-20 items-center justify-center py-4 text-center dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="mb-4 flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800 dark:text-gray-100">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-gray-100"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} logo`}
              width={24}
              height={24}
              loading="lazy"
              className="mr-2 inline h-6 w-6"
            />
            {skill.name}
          </motion.li>
        ))}
      </ul>

      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}


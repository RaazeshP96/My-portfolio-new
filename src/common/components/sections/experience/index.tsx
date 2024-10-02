'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import Link from 'next/link';

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const hasMounted = useHasMounted(); // Renamed for clarity

  if (!hasMounted) return null; // Prevent rendering before the component is mounted

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline animate={false}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === 'light' ? '#f3f4f6' : 'rgba(52, 37, 37, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight:
                theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
              display: theme === 'dark' ? 'none' : 'block',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.15)',
              fontSize: '1.5rem',
              display: theme === 'dark' ? 'none' : 'flex',
            }}
          >
            <Link href={item.link}>
              <h3 className="font-semibold capitalize mb-0">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.position}</p>
              {/* <p className="!mt-0 font-light">{item.location}</p> */}
              {item.description.map((itm, ind) => (
                <div key={ind}>
                  <p className="!mt-1 !font-extrabold text-gray-700 dark:text-white/75">
                    {itm.title}
                  </p>
                  <ul className="list-disc">
                    {itm.desc.map((data, inx) => (
                      <li
                        key={inx}
                        className="!mt-1 ml-6 !font-normal text-gray-700 dark:text-white/75"
                      >
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Link>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}

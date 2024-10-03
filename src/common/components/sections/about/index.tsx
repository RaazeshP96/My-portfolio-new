'use client';

import { useSectionInView } from '@/common/lib/hooks';
import portfolioImg from '@/../public/images/photo.jpg';
import { smoothScrollTo } from '@/common/lib/utils';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      className="z-50 flex h-auto scroll-mt-5 sm:scroll-mt-0  w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full mt-[-4rem] sm:mt-0 lg:py-12 sm:text-center xl:max-w[1180px]"
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="group flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-12 w-full">
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                <div className="absolute inset-0 z-20 rounded-full opacity-10 lg:opacity-100 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-10"></div>
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt={portfolioImg.src.split('/')[3]}
                    placeholder="blur"
                    className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:h-[442px] xl:max-w-[650px]">
              <div className="flex h-full flex-col justify-center gap-6">
                <span className="text-center sm:text-left">
                  I'm a Fullstack Web Application Developer with expertise in
                  HTML5, CSS3, JavaScript frameworks like React.js and Next.js,
                  and backend technologies including Go (Golang), Gin Gonic,
                  Django, and Python.
                </span>
                <span className="text-center sm:text-left">
                  I have a proven ability to develop seamless, responsive web
                  applications focused on user experience and performance.
                </span>
                <span className="text-center sm:text-left">
                  I'm seeking Software Engineering opportunities where I can
                  leverage my skills to build impactful, user-centered solutions
                  and make meaningful contributions.
                </span>
                <p className="flex flex-col items-center ">
                  <span className="text-center sm:text-left">
                    So if you are interested,
                  </span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' });
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case">
                      Contact me!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}

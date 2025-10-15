import portfolioImg from '@/../public/images/photo.jpg';
import SectionDivider from '@/components/section-divider';
import SectionHeading from '@/components/section-heading';
import Image from 'next/image';
import ContactCta from './_components/contact-cta';

export default function AboutServer() {
  return (
    <section
      className="z-50 flex h-auto scroll-mt-5 sm:scroll-mt-0 w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <div className="w-full mt-[-4rem] sm:mt-0 lg:py-12 sm:text-center xl:max-w[1180px]">
          <div className="group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 w-full">
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                <div className="absolute inset-0 z-20 rounded-full opacity-10 lg:opacity-100 bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-10"></div>
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="Rajesh Prajapati - Next.js Developer from Nepal"
                    loading="lazy"
                    placeholder="blur"
                    className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:h-[442px] xl:max-w-[650px]">
              <div className="flex h-full flex-col justify-center gap-6">
                <span className="text-center sm:text-left">
                  Frontend Engineer with 5+ years of experience specializing in 
                  <strong> React, TypeScript, and modern design systems</strong>. 
                  Skilled at reviewing and refining complex codebases, ensuring UI accuracy, 
                  and optimizing performance.
                </span>
                <span className="text-center sm:text-left">
                  Experienced in collaborating with design teams using tools like 
                  <strong> Figma</strong> and component libraries 
                  (<strong>MUI, Ant Design</strong>) to deliver consistent, scalable, 
                  and user-centric applications.
                </span>
                <span className="text-center sm:text-left">
                  Passionate about creating seamless, responsive web applications 
                  that balance aesthetics with functionality, ensuring optimal user 
                  experiences across all devices.
                </span>
                <p className="flex flex-col items-center">
                  <span className="text-center sm:text-left">
                    So if you are interested,
                  </span>
                  <ContactCta />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}


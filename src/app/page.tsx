import About from '@/components/sections/about/about-animated';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects/projects-animated';
import Skills from '@/components/sections/skills/skills-animated';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

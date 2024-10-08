'use client';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

type Theme = 'light' | 'dark';

const ModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    setIsMounted(true);
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
    } else {
      if (systemTheme === 'light') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    }
  }, [setTheme, systemTheme]);

  //hydration
  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-5 right-5 bg-[#EED193] w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-white border-[#AB4A20] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === 'light' && <BsSun />}
      {theme === 'dark' && <BsMoon />}
    </button>
  );
};

export default ModeToggle;

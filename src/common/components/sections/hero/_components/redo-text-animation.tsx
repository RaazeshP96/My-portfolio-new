'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    'Every line of code is a brushstroke on the canvas of the web.',
    'In the world of code, details matter as much as creativity.',
    'Front-end is where design meets functionality, and magic happens.',
    'Writing clean code is like writing a story the next developer can easily follow.',
    'The beauty of code lies in its simplicity and elegance.',
    'Great UI isn’t just about how it looks, but how it feels.',
    'Testing is the guardrail for innovation — break it, then fix it stronger.',
    'Coding is not just solving problems; it’s crafting solutions.',
    'Version control is my time machine, taking me back when things go wrong.',
    'A well-structured codebase is the foundation of every successful project.',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}

import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import ModeToggle from '@/common/theme/mode-toggler';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Rajesh Prajapati | Portfolio | Software Engineer',
  description:
    'Rajesh Prajapati is an experienced software engineer specializing in Next.js development. Discover the portfolio of a skilled Nepali frontend engineer and web developer.',
  keywords: [
    'Rajesh',
    'Raazesh',
    'Frontend developer',
    'Rajeshp96',
    'Raazeshp96',
    'Full stack developer',
    'Raazesh Prajapati',
    'Rajesh Prajapati',
    'Next.js developer',
    'React.js developer',
    'Frontend engineer',
    'Software engineer',
    'Nepali software engineer',
    'Web developer',
  ],
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <Analytics />
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed left-1 right-auto top-1 z-[99] sm:bottom-6 sm:left-6 sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Krishna MK — Front End Developer',
  description:
    'Front End Developer specialising in React, Next.js and TypeScript. Building high-performance e-commerce platforms and enterprise admin tools.',
  keywords: ['Front End Developer', 'React', 'Next.js', 'TypeScript', 'Krishna MK'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${jost.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
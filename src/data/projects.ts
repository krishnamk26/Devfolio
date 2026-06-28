import type { Project } from '@/src/types';

export const projects: Project[] = [
  {
    name: 'Special Order System',
    tagline: 'Enterprise order management',
    description:
      'Full-featured admin panel for managing special customer orders, calendar scheduling, and Konva-powered canvas annotations.',
    tech: ['Next.js 14', 'React 18', 'Redux Toolkit', 'MUI', 'FullCalendar', 'Konva'],
    status: 'Live',
    type: 'professional',
    url: 'altimus.co.uk',
    color: 'violet',
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    name: 'E-commerce UI Revamp',
    tagline: 'Seasonal storefront redesign',
    description:
      'Rebuilt the front-end storefront with seasonal homepage variations, dynamic theming, and improved product discovery flows.',
    tech: ['Next.js 12', 'React 18', 'MUI', 'Tailwind CSS'],
    status: 'Live',
    type: 'professional',
    url: 'altimus.co.uk',
    color: 'indigo',
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    name: 'Bogner London',
    tagline: 'Luxury branded storefront',
    description:
      'Standalone branded e-commerce experience for Bogner London with custom typography, animations, and premium product presentation.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    type: 'professional',
    url: 'bognerlondon.com',
    color: 'cyan',
    gradient: 'from-cyan-600 to-teal-700',
  },
  {
    name: 'London Ski',
    tagline: 'Ski gear deals platform',
    description:
      'Deals-focused storefront with promo-code engine, Elasticsearch product search, and dynamic filtering for ski equipment.',
    tech: ['Next.js', 'React', 'Elasticsearch', 'MUI'],
    status: 'In Development',
    type: 'professional',
    url: 'londonski.co.uk',
    color: 'emerald',
    gradient: 'from-emerald-600 to-green-700',
  },
  {
    name: 'Multi-Domain Platform',
    tagline: '60-component CMS registry',
    description:
      'Multi-tenant e-commerce platform powering multiple brands from a single codebase with a composable CMS component registry.',
    tech: ['Next.js 16', 'React 19', 'Zustand', 'shadcn/ui'],
    status: 'In Development',
    type: 'professional',
    color: 'amber',
    gradient: 'from-amber-600 to-orange-700',
  },
  {
    name: 'Retail POS Application',
    tagline: 'Windows desktop POS',
    description:
      'Flutter-based Windows point-of-sale app with Riverpod state management, barcode scanning, receipt printing, and offline SQLite.',
    tech: ['Flutter', 'Dart', 'Riverpod 2', 'SQLite'],
    status: 'In Development',
    type: 'professional',
    color: 'rose',
    gradient: 'from-rose-600 to-pink-700',
  },
  {
    name: 'Quiz App',
    tagline: 'Full-stack quiz platform',
    description:
      'Interactive quiz application with a React 19 front end, Express.js API, and PostgreSQL database for user scores and leaderboards.',
    tech: ['React 19', 'Vite', 'MUI', 'Express.js', 'PostgreSQL'],
    status: 'Live',
    type: 'personal',
    color: 'violet',
    gradient: 'from-violet-500 to-indigo-600',
  },
  {
    name: 'Stack Overflow Clone',
    tagline: 'Q&A community platform',
    description:
      'Community Q&A platform clone with voting, tagging, Markdown editor, and user reputation system.',
    tech: ['React', 'JavaScript', 'CSS'],
    status: 'Completed',
    type: 'personal',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Bulk Email Tool',
    tagline: 'Email campaign sender',
    description:
      'Bulk email tool with CSV upload, email templating, send-rate throttling, and real-time delivery status tracking.',
    tech: ['React', 'JavaScript', 'Node.js'],
    status: 'Completed',
    type: 'personal',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
  },
];
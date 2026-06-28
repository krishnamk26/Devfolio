import type { SkillGroup } from '@/src/types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: '⌨️',
    color: 'violet',
    gradient: 'from-violet-500/20 to-violet-600/5',
    skills: ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Dart'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚡',
    color: 'indigo',
    gradient: 'from-indigo-500/20 to-indigo-600/5',
    skills: ['React', 'Next.js 12–16', 'Vite', 'Tailwind CSS v4', 'Flutter'],
  },
  {
    title: 'UI Component Systems',
    icon: '🧩',
    color: 'cyan',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    skills: ['MUI v5–v7', 'shadcn/ui', 'Radix UI', 'Headless UI'],
  },
  {
    title: 'State Management',
    icon: '🔄',
    color: 'emerald',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    skills: ['Zustand', 'React Context API', 'Riverpod 2'],
  },
  {
    title: 'Design Tools',
    icon: '🎨',
    color: 'pink',
    gradient: 'from-pink-500/20 to-pink-600/5',
    skills: ['Figma', 'Adobe Illustrator', 'Design Systems', 'Responsive Design', 'Component-Driven Dev'],
  },
  {
    title: 'Dev Tools & Practices',
    icon: '🛠️',
    color: 'amber',
    gradient: 'from-amber-500/20 to-amber-600/5',
    skills: ['Git', 'GitHub', 'REST APIs', 'RBAC', 'SSR / SSG / ISR'],
  },
];
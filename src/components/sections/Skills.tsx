'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/src/data/skills';
import SectionTitle from '@/src/components/ui/SectionTitle';

const colorMap: Record<string, {
  border: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  headerText: string;
}> = {
  violet: {
    border: 'border-violet-200 dark:border-violet-500/25 hover:border-violet-400 dark:hover:border-violet-500/50',
    badgeBg: 'bg-violet-50 dark:bg-violet-500/10',
    badgeBorder: 'border-violet-200 dark:border-violet-500/20',
    badgeText: 'text-violet-700 dark:text-violet-300',
    headerText: 'text-violet-600 dark:text-violet-400',
  },
  indigo: {
    border: 'border-indigo-200 dark:border-indigo-500/25 hover:border-indigo-400 dark:hover:border-indigo-500/50',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-500/10',
    badgeBorder: 'border-indigo-200 dark:border-indigo-500/20',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    headerText: 'text-indigo-600 dark:text-indigo-400',
  },
  cyan: {
    border: 'border-cyan-200 dark:border-cyan-500/25 hover:border-cyan-400 dark:hover:border-cyan-500/50',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-500/10',
    badgeBorder: 'border-cyan-200 dark:border-cyan-500/20',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    headerText: 'text-cyan-600 dark:text-cyan-400',
  },
  emerald: {
    border: 'border-emerald-200 dark:border-emerald-500/25 hover:border-emerald-400 dark:hover:border-emerald-500/50',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    badgeBorder: 'border-emerald-200 dark:border-emerald-500/20',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    headerText: 'text-emerald-600 dark:text-emerald-400',
  },
  pink: {
    border: 'border-pink-200 dark:border-pink-500/25 hover:border-pink-400 dark:hover:border-pink-500/50',
    badgeBg: 'bg-pink-50 dark:bg-pink-500/10',
    badgeBorder: 'border-pink-200 dark:border-pink-500/20',
    badgeText: 'text-pink-700 dark:text-pink-300',
    headerText: 'text-pink-600 dark:text-pink-400',
  },
  amber: {
    border: 'border-amber-200 dark:border-amber-500/25 hover:border-amber-400 dark:hover:border-amber-500/50',
    badgeBg: 'bg-amber-50 dark:bg-amber-500/10',
    badgeBorder: 'border-amber-200 dark:border-amber-500/20',
    badgeText: 'text-amber-700 dark:text-amber-300',
    headerText: 'text-amber-600 dark:text-amber-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#F9FAFB] dark:bg-[#07071A]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="🚀 Skills"
          title="Technologies I Work With"
          subtitle="A curated set of tools and technologies I use to build modern, scalable web applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const colors = colorMap[group.color] ?? colorMap.violet;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group rounded-2xl border bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md dark:hover:shadow-none ${colors.border}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className={`font-semibold text-body ${colors.headerText}`}>{group.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-small font-medium transition-all duration-200 hover:scale-105 ${colors.badgeBg} ${colors.badgeBorder} ${colors.badgeText}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
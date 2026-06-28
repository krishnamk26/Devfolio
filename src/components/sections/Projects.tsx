'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Briefcase, User, Globe } from 'lucide-react';
import { projects } from '@/src/data/projects';
import SectionTitle from '@/src/components/ui/SectionTitle';
import type { Project } from '@/src/types';

type Filter = 'all' | 'professional' | 'personal';

const statusConfig = {
  Live: { bg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400', dot: 'bg-emerald-500 dark:bg-emerald-400' },
  'In Development': { bg: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400', dot: 'bg-amber-500 dark:bg-amber-400' },
  Completed: { bg: 'bg-slate-100 dark:bg-slate-500/10 border-slate-200 dark:border-slate-500/20 text-slate-600 dark:text-slate-400', dot: 'bg-slate-400' },
};

function BrowserPreview({ project }: { project: Project }) {
  return (
    <div className="rounded-t-xl overflow-hidden border border-b-0 border-slate-200 dark:border-white/8">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-white/3 border-b border-slate-200 dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 ml-2 h-5 rounded-md bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 flex items-center px-2.5 overflow-hidden">
          <Globe className="h-2.5 w-2.5 text-slate-400 dark:text-slate-600 shrink-0 mr-1.5" />
          <span className="text-tiny text-slate-400 dark:text-slate-600 truncate">{project.url ?? 'localhost:3000'}</span>
        </div>
      </div>
      {/* Preview gradient */}
      <div
        className={`h-36 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
        style={{ opacity: 0.75 }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <span className="text-5xl font-black text-white/30 select-none tracking-tighter">
          {project.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = projects.filter(p => filter === 'all' || p.type === filter);

  const filters: { key: Filter; label: string; icon: typeof Briefcase }[] = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'professional', label: 'Professional', icon: Briefcase },
    { key: 'personal', label: 'Personal', icon: User },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#F9FAFB] dark:bg-[#07071A]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="🗂️ Projects"
          title="Things I've Built"
          subtitle="A mix of professional production apps and personal side projects."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-small font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-violet-50 dark:bg-violet-500/20 border border-violet-300 dark:border-violet-500/40 text-violet-700 dark:text-violet-300'
                  : 'border border-slate-200 dark:border-white/8 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-transparent'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
              <span className={`rounded-full px-1.5 py-0.5 text-tiny ${
                filter === key
                  ? 'bg-violet-100 dark:bg-violet-500/30 text-violet-600 dark:text-violet-200'
                  : 'bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-500'
              }`}>
                {key === 'all' ? projects.length : projects.filter(p => p.type === key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const status = statusConfig[project.status];
              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group flex flex-col rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/2 overflow-hidden hover:border-violet-300 dark:hover:border-violet-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100 dark:hover:shadow-violet-500/5"
                >
                  <BrowserPreview project={project} />

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-5 border border-t-0 border-slate-200 dark:border-white/8 rounded-b-xl">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-body text-slate-900 dark:text-white leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                        {project.name}
                      </h3>
                      <span className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-tiny ${status.bg}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                        {project.status}
                      </span>
                    </div>

                    <p className="text-tiny text-slate-400 dark:text-slate-500 mb-3">{project.tagline}</p>
                    <p className="text-small text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 px-2 py-1 text-tiny text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {project.url && (
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-small text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors mt-auto"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Live
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown, GitBranch, Briefcase } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6', label: 'Production Apps' },
  { value: '9', label: 'Projects Worked On' },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-[#F9FAFB] dark:bg-[#07071A]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-violet-200/60 dark:bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-200/50 dark:bg-indigo-600/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-200/40 dark:bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Available badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 text-small text-emerald-700 dark:text-emerald-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Krishna MK
          </span>
        </motion.h1>

        {/* Role pill */}
        <motion.div {...fadeUp(0.2)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-2 text-body text-slate-700 dark:text-slate-300">
            <Briefcase className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            Front End Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-slate-500 dark:text-slate-400 text-body md:text-h5 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building high-performance e-commerce platforms and enterprise admin tools with{' '}
          <span className="text-violet-600 dark:text-violet-300">React</span>,{' '}
          <span className="text-indigo-600 dark:text-indigo-300">Next.js</span> &{' '}
          <span className="text-cyan-600 dark:text-cyan-300">TypeScript</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="/resume/Krishna_MK_Frontend_Developer_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-body shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download className="h-4 w-4" />
            Download Résumé
          </a>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white font-medium text-body hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
          </button>
          <a
            href="https://github.com/krishnamk26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-px">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="px-8 py-4 text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-small text-slate-400 dark:text-slate-500 mt-0.5">{stat.label}</p>
              </div>
              {i < stats.length - 1 && <div className="h-10 w-px bg-slate-200 dark:bg-white/10" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-tiny text-slate-400 dark:text-slate-600 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-slate-400 dark:text-slate-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/src/data/experience';
import SectionTitle from '@/src/components/ui/SectionTitle';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#F1F5F9] dark:bg-[#07071A]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          badge="💼 Experience"
          title="Work Experience"
          subtitle="Building production-grade applications and owning the full frontend lifecycle."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400 dark:from-violet-500/60 via-indigo-300 dark:via-indigo-500/40 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-16 pb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet-300 dark:border-violet-500/40 bg-white dark:bg-[#07071a]">
                <div className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none hover:border-violet-200 dark:hover:border-violet-500/25 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-h4 font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-body text-violet-600 dark:text-violet-300 font-medium mt-0.5">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1.5 text-small text-emerald-700 dark:text-emerald-400 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-small text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Promotion note */}
                {exp.promotionNote && (
                  <div className="flex items-center gap-2 mb-5 rounded-lg bg-amber-50 dark:bg-amber-500/8 border border-amber-200 dark:border-amber-500/15 px-4 py-2.5">
                    <TrendingUp className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                    <p className="text-small text-amber-700 dark:text-amber-300">{exp.promotionNote}</p>
                  </div>
                )}

                {/* Achievements */}
                <div className="space-y-2.5">
                  {exp.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-violet-500 dark:text-violet-400 shrink-0 mt-0.5" />
                      <p className="text-small text-slate-600 dark:text-slate-300 leading-relaxed">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
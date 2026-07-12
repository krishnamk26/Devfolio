'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, GitBranch, ExternalLink, GraduationCap, Award, Phone } from 'lucide-react';
import SectionTitle from '@/src/components/ui/SectionTitle';

const infoItems = [
  { icon: MapPin, label: 'Location', value: 'Madurai, Tamil Nadu, India' },
  { icon: Mail, label: 'Email', value: 'krishnamk2604@gmail.com', href: 'mailto:krishnamk2604@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9578675765' },
  { icon: GitBranch, label: 'GitHub', value: 'github.com/krishnamk26', href: 'https://github.com/krishnamk26' },
  { icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/krishnamk26', href: 'https://www.linkedin.com/in/krishnamk26/' },
];

const education = [
  { degree: 'B.Sc. Botany', institution: 'The Madura College, Madurai', year: '2015 – 2018' },
  { degree: 'Higher Secondary', institution: 'Sourashtra Hr. Sec. School, Madurai', year: '2013 – 2015' },
];

const certifications = [
  { name: 'Full Stack Development (FSD)', issuer: 'GUVI' },
  { name: 'MERN Full Stack Developer', issuer: 'GUVI' },
  { name: 'React', issuer: 'GUVI' },
  { name: 'JavaScript', issuer: 'GUVI' },
  { name: 'Node.js', issuer: 'GUVI' },
  { name: 'MongoDB', issuer: 'GUVI' },
  { name: 'MySQL', issuer: 'GUVI' },
  { name: 'HTML', issuer: 'GUVI' },
  { name: 'CSS', issuer: 'GUVI' },
  { name: 'Bootstrap', issuer: 'GUVI' },
];

const quickFacts = [
  { label: 'Started', value: 'Feb 2024' },
  { label: 'Promoted', value: 'In 2 months' },
  { label: 'Apps Owned', value: '6' },
  { label: 'Open to', value: 'On-site, Hybrid, & Remote' },
];

export default function About() {
  return (
    <section id="about" className="py-12 px-6 bg-[#F1F5F9] dark:bg-[#07071A]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          badge="🙋 About Me"
          title="Building the Web, One Component at a Time"
          subtitle="I'm a Front End Developer specialising in React and Next.js ecosystems, passionate about crafting fast, accessible, and beautifully designed user interfaces."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Bio + Facts */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none"
            >
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-body mb-4">
                I joined <span className="text-violet-600 dark:text-violet-300 font-medium">MN Gure Pvt Ltd</span> (a subsidiary of Altimus Retailers Ltd) as an intern and was promoted to Front End Developer within just two months. Since then, I&apos;ve owned the entire frontend across six production applications.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-body">
                My work spans rebuilding legacy Angular systems in React/Next.js, architecting multi-tenant platforms, building branded storefronts, and even introducing Flutter for a Windows POS application. I thrive at the intersection of engineering precision and design excellence.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 px-5 py-4 shadow-sm dark:shadow-none"
                >
                  <p className="text-tiny text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{fact.label}</p>
                  <p className="text-body font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Contact + Education + Certs */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none"
            >
              <h3 className="text-small font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-4">Contact Info</h3>
              <div className="space-y-3">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20">
                      <Icon className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                    </span>
                    <div>
                      <p className="text-tiny text-slate-400 dark:text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-small text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-300 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-small text-slate-700 dark:text-slate-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none"
            >
              <h3 className="text-small font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <div>
                      <p className="text-small font-medium text-slate-800 dark:text-white">{edu.degree}</p>
                      <p className="text-tiny text-slate-500 dark:text-slate-500">{edu.institution}</p>
                      <p className="text-tiny text-slate-400 dark:text-slate-600">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none"
            >
              <h3 className="text-small font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500 dark:text-amber-400" />
                Certifications
              </h3>
              <p className="text-tiny text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-1.5">
                Issued by
                <span className="rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-2 py-0.5 text-tiny font-medium text-amber-700 dark:text-amber-400">
                  GUVI
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert.name}
                    className="inline-flex items-center rounded-lg border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/10 px-3 py-1.5 text-tiny font-medium text-amber-700 dark:text-amber-300"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
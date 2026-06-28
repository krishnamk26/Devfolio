'use client';

import { GitBranch, ExternalLink, Mail, Code2 } from 'lucide-react';

const socials = [
  { icon: GitBranch, href: 'https://github.com/', label: 'GitHub' },
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:krishna@altimus.co.uk', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-[#F1F5F9]/80 dark:bg-[#07071a]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
            <Code2 className="h-4 w-4 text-white" />
          </span>
          <div>
            <p className="font-bold text-slate-900 dark:text-white text-small">Krishna.dev</p>
            <p className="text-tiny text-slate-400 dark:text-slate-500">Front End Developer · Madurai, India</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white hover:border-violet-300 dark:hover:border-violet-500/40 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-tiny text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Krishna MK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
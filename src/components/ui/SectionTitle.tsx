'use client';

interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ badge, title, subtitle, align = 'center' }: SectionTitleProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-14 ${isCenter ? 'text-center' : ''}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 text-small font-medium text-violet-700 dark:text-violet-400 mb-4">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-500 dark:text-slate-400 text-body max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
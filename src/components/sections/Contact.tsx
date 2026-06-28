'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, ExternalLink, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionTitle from '@/src/components/ui/SectionTitle';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'krishna@altimus.co.uk', href: 'mailto:krishna@altimus.co.uk' },
  { icon: GitBranch, label: 'GitHub', value: 'github.com/krishna', href: 'https://github.com/' },
  { icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/krishna', href: '#' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = () => {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof form]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F1F5F9] dark:bg-[#07071A]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          badge="📬 Contact"
          title="Let's Work Together"
          subtitle="I'm open to new opportunities — remote or on-site, globally."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                <p className="text-small font-medium text-slate-800 dark:text-white">Based in Madurai, India</p>
              </div>
              <p className="text-small text-slate-500 dark:text-slate-400">Open to remote collaboration & relocation opportunities globally.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none space-y-4">
              <h3 className="text-small font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider">Reach me via</h3>
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/3 group-hover:border-violet-300 dark:group-hover:border-violet-500/40 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 transition-all duration-200">
                    <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                  </span>
                  <div>
                    <p className="text-tiny text-slate-400 dark:text-slate-500">{label}</p>
                    <p className="text-small text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 shadow-sm dark:shadow-none">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 dark:text-emerald-400" />
                  <h3 className="text-h4 font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-body">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 text-small transition-all"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-small text-slate-600 dark:text-slate-400 mb-2 block font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Krishna MK"
                      className={`w-full rounded-xl border bg-white dark:bg-white/3 px-4 py-3 text-body text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-slate-50 dark:focus:bg-white/5 ${
                        errors.name
                          ? 'border-rose-400 dark:border-rose-500/50 focus:border-rose-500'
                          : 'border-slate-200 dark:border-white/10 focus:border-violet-400 dark:focus:border-violet-500/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-tiny text-rose-500 dark:text-rose-400">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-small text-slate-600 dark:text-slate-400 mb-2 block font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className={`w-full rounded-xl border bg-white dark:bg-white/3 px-4 py-3 text-body text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-slate-50 dark:focus:bg-white/5 ${
                        errors.email
                          ? 'border-rose-400 dark:border-rose-500/50 focus:border-rose-500'
                          : 'border-slate-200 dark:border-white/10 focus:border-violet-400 dark:focus:border-violet-500/50'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-tiny text-rose-500 dark:text-rose-400">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-small text-slate-600 dark:text-slate-400 mb-2 block font-medium">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full resize-none rounded-xl border bg-white dark:bg-white/3 px-4 py-3 text-body text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-slate-50 dark:focus:bg-white/5 ${
                        errors.message
                          ? 'border-rose-400 dark:border-rose-500/50 focus:border-rose-500'
                          : 'border-slate-200 dark:border-white/10 focus:border-violet-400 dark:focus:border-violet-500/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-tiny text-rose-500 dark:text-rose-400">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-body shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
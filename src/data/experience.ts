import type { Experience } from '@/src/types';

export const experiences: Experience[] = [
  {
    company: 'MN Gure Pvt Ltd',
    companyShort: 'MN Gure',
    role: 'Front End Developer',
    location: 'Madurai, Tamil Nadu, India',
    duration: 'Feb 2024 – Present',
    current: true,
    promotionNote: 'Promoted from Intern → Developer within 2 months',
    achievements: [
      'Own end-to-end frontend across 6 production applications',
      'Rebuilt legacy Angular admin panel in React / Next.js covering special orders, returns, 6 service modules, and invoicing',
      'Architected a multi-tenant e-commerce platform using Next.js 16 + React 19 with a 60-component CMS registry',
      'Modernised e-commerce UI with seasonal homepage variants and dynamic theme switching',
      'Built the Bogner London branded storefront with custom typography and premium UX',
      'Led development of London Ski deals storefront with promo-code engine and Elasticsearch integration',
      'Introduced Flutter for a Windows POS retail application with offline SQLite and barcode scanning',
    ],
  },
];
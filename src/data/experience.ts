import { type ExperienceItem, type Localized } from '@/types';

/**
 * Datos reales extraídos de ../old-portfolio/ (timeline + contacto).
 * Reescritos enfocados en IMPACTO, no en listas de tareas.
 * Identidad actual: AI Product Builder & Systems Integrator.
 */
export const experienceData: Localized<ExperienceItem[]> = {
  es: [
    {
      id: 'freelance',
      period: '2012 — Presente',
      role: 'Product Builder independiente',
      organization: 'Freelance',
      impact:
        'Diseño y entrego plataformas web y aplicaciones de producción end-to-end para empresas y particulares: desde el requerimiento hasta el deploy y mantenimiento.',
      type: 'work',
    },
    {
      id: 'globalinstaller',
      period: '2013 — 2015',
      role: 'E-commerce de iluminación y construcción en seco',
      organization: 'GlobalInstaller.com',
      impact:
        'Tienda online de iluminación y Drywall/PVC con ventas, desarrollo y mantenimiento continuo sobre la plataforma.',
      type: 'work',
    },
    {
      id: 'maestristas',
      period: '2016 — Presente',
      role: 'Marketing digital & Desarrollo web para pymes',
      organization: 'Maestristas.com',
      impact:
        'Emprendimiento propio: servicios de marketing digital y desarrollo web para pymes, en operación activa.',
      type: 'entrepreneurship',
    },
    {
      id: 'doitpossible',
      period: '2020 — 2021',
      role: 'Front-end · WordPress · WooCommerce',
      organization: 'doitpossible.es',
      impact:
        'Sitios web, tiendas y marketplaces en producción para el mercado español, sobre CMS y e-commerce.',
      type: 'work',
    },
    {
      id: 'unab',
      period: '2021',
      role: 'Desarrollo de Software',
      organization: 'UNAB · Ministerio TIC Colombia',
      impact:
        'Técnico profesional y diplomados en programación y desarrollo de software — Universidad Autónoma de Bucaramanga.',
      type: 'education',
    },
    {
      id: 'certificaciones',
      period: '2018 — 2022',
      role: 'Certificación profesional virtual',
      organization: 'FreeCodeCamp · Udemy · Google · IAB Spain · EDX',
      impact:
        'Certificaciones en programación y desarrollo web en plataformas virtuales, complementando la formación formal.',
      type: 'education',
    },
  ],
  en: [
    {
      id: 'freelance',
      period: '2012 — Present',
      role: 'Independent Product Builder',
      organization: 'Freelance',
      impact:
        'I design and ship end-to-end production web platforms and applications for companies and individuals: from requirements to deploy and maintenance.',
      type: 'work',
    },
    {
      id: 'globalinstaller',
      period: '2013 — 2015',
      role: 'Lighting & dry construction e-commerce',
      organization: 'GlobalInstaller.com',
      impact:
        'Online store for lighting and Drywall/PVC with sales, development, and ongoing maintenance on the platform.',
      type: 'work',
    },
    {
      id: 'maestristas',
      period: '2016 — Present',
      role: 'Digital marketing & web development for SMBs',
      organization: 'Maestristas.com',
      impact:
        'Own venture: digital marketing and web development services for SMBs, in active operation.',
      type: 'entrepreneurship',
    },
    {
      id: 'doitpossible',
      period: '2020 — 2021',
      role: 'Front-end · WordPress · WooCommerce',
      organization: 'doitpossible.es',
      impact:
        'Websites, stores, and marketplaces in production for the Spanish market, on CMS and e-commerce.',
      type: 'work',
    },
    {
      id: 'unab',
      period: '2021',
      role: 'Software Development',
      organization: 'UNAB · Ministry of ICT Colombia',
      impact:
        'Professional technician and diplomas in programming and software development — Universidad Autónoma de Bucaramanga.',
      type: 'education',
    },
    {
      id: 'certificaciones',
      period: '2018 — 2022',
      role: 'Virtual professional certification',
      organization: 'FreeCodeCamp · Udemy · Google · IAB Spain · EDX',
      impact:
        'Certifications in programming and web development on virtual platforms, complementing formal education.',
      type: 'education',
    },
  ],
};
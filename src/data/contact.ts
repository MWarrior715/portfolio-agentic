import { type ContactItem, type Localized } from '@/types';

/**
 * Datos reales extraídos de ../old-portfolio/ (sección Contacto + index.html).
 * Solo canales verificables. No se inventan redes sociales sin URL real.
 * Las etiquetas se traducen; los valores (email, teléfonos) son iguales en ambos idiomas.
 */
export const contactData: Localized<ContactItem[]> = {
  es: [
    {
      id: 'email',
      label: 'Email',
      value: 'mguerrerom715@gmail.com',
      href: 'mailto:mguerrerom715@gmail.com',
      icon: 'mail',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+57 320 952 9591',
      href: 'https://wa.me/573209529591',
      icon: 'whatsapp',
    },
    {
      id: 'phone',
      label: 'Teléfono',
      value: '+57 317 014 4140',
      href: 'tel:+573170144140',
      icon: 'phone',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/MWarrior715',
      href: 'https://github.com/MWarrior715',
      icon: 'github',
    },
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Bogotá, Colombia',
      href: 'https://www.google.com/maps/search/?api=1&query=Bogota+Colombia',
      icon: 'map',
    },
    {
      id: 'languages',
      label: 'Idiomas',
      value: 'Español · Inglés',
      icon: 'languages',
    },
  ],
  en: [
    {
      id: 'email',
      label: 'Email',
      value: 'mguerrerom715@gmail.com',
      href: 'mailto:mguerrerom715@gmail.com',
      icon: 'mail',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+57 320 952 9591',
      href: 'https://wa.me/573209529591',
      icon: 'whatsapp',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+57 317 014 4140',
      href: 'tel:+573170144140',
      icon: 'phone',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/MWarrior715',
      href: 'https://github.com/MWarrior715',
      icon: 'github',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Bogotá, Colombia',
      href: 'https://www.google.com/maps/search/?api=1&query=Bogota+Colombia',
      icon: 'map',
    },
    {
      id: 'languages',
      label: 'Languages',
      value: 'Spanish · English',
      icon: 'languages',
    },
  ],
};
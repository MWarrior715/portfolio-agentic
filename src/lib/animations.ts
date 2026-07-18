// Portafolio agéntico · AI Product Builder
import { type Variants } from 'framer-motion';

/** Entrada suave: fade + desplazamiento vertical hacia arriba. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/** Contenedor que escala la aparición de sus hijos en cascada. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/** Entrada con escala (zoom-in). */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/** Entrada lateral desde la derecha. */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/** Configuración de viewport reutilizable para activar animación al hacer scroll. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
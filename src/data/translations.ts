// Generado asistido por Claude Code
// Diccionario de UI tipado. `es` es la fuente de verdad; `en: typeof es`
// garantiza en compile-time que ambos idiomas tienen las mismas claves.

const es = {
  nav: {
    home: 'Inicio',
    engineering: 'Ingeniería',
    projects: 'Proyectos',
    quiklii: 'QUIKLII',
    contact: 'Contacto',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    langEs: 'ES',
    langEn: 'EN',
  },
  hero: {
    titleLine1: 'AI Product Builder',
    titleSep: '&',
    titleLine2: 'Systems Integrator',
    subtitle:
      'Reduzco la distancia entre una idea compleja y un producto funcional. Conecto desarrollo, inteligencia artificial, automatización y estrategia de negocio.',
    ctaProjects: 'Ver Proyectos',
    ctaContact: 'Contactar',
  },
  aiFirst: {
    title: 'Ingeniería',
    titleAccent: 'AI-First',
    subtitle:
      'No solo uso IA para escribir código. Diseño sistemas donde agentes especializados orquestan cada fase del desarrollo.',
    roles: [
      {
        title: 'Agente Orquestador',
        description:
          'Planifica, divide tareas y gestiona el contexto global del proyecto. Garantiza que cada agente trabaje hacia un objetivo coherente.',
      },
      {
        title: 'Agente Constructor',
        description:
          'Genera, refactoriza y valida código production-ready con estándares estrictos. Cada entrega pasa por revisión automatizada.',
      },
      {
        title: 'Agente de Razonamiento',
        description:
          'Valida lógica de negocio, sugiere optimizaciones y asegura coherencia arquitectónica antes de que el código llegue a producción.',
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    titleAccent: 'en producción',
    subtitle:
      'Cada caso sigue el mismo formato: problema real, solución arquitectónica, impacto medido y ahorro cuantificado.',
    codeLabel: 'Código',
  },
  quiklii: {
    title: 'Caso',
    titleAccent: 'QUIKLII',
    stackTitle: 'Stack integrado',
    stackSubtitle:
      'Una sola arquitectura conecta frontend, backend, base de datos, pagos y tiempo real.',
  },
  experience: {
    title: 'Experiencia',
    titleAccent: 'con impacto',
    subtitle:
      'Una década construyendo productos reales para empresas y emprendimientos. Aquí el resultado, no la lista de tareas.',
  },
  contact: {
    title: 'Hablemos de tu',
    titleAccent: 'proyecto',
    subtitle:
      'Abierto a retos de producto, integración de sistemas y oportunidades laborales para financiar QUIKLII. Cualquiera de estos canales funciona.',
    cta: 'Escríbeme directamente',
  },
};

const en: typeof es = {
  nav: {
    home: 'Home',
    engineering: 'Engineering',
    projects: 'Projects',
    quiklii: 'QUIKLII',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    langEs: 'ES',
    langEn: 'EN',
  },
  hero: {
    titleLine1: 'AI Product Builder',
    titleSep: '&',
    titleLine2: 'Systems Integrator',
    subtitle:
      'I close the gap between a complex idea and a working product. I connect development, AI, automation, and business strategy.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact',
  },
  aiFirst: {
    title: 'Engineering',
    titleAccent: 'AI-First',
    subtitle:
      "I don't just use AI to write code. I design systems where specialized agents orchestrate every phase of development.",
    roles: [
      {
        title: 'Orchestrator Agent',
        description:
          'Plans, splits tasks, and manages the project\'s global context. Ensures every agent works toward a coherent goal.',
      },
      {
        title: 'Builder Agent',
        description:
          'Generates, refactors, and validates production-ready code under strict standards. Every delivery goes through automated review.',
      },
      {
        title: 'Reasoning Agent',
        description:
          'Validates business logic, suggests optimizations, and ensures architectural coherence before code reaches production.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    titleAccent: 'in production',
    subtitle:
      'Every case follows the same format: real problem, architectural solution, measured impact, and quantified savings.',
    codeLabel: 'Code',
  },
  quiklii: {
    title: 'Case',
    titleAccent: 'QUIKLII',
    stackTitle: 'Integrated stack',
    stackSubtitle:
      'A single architecture connects frontend, backend, database, payments, and real-time.',
  },
  experience: {
    title: 'Experience',
    titleAccent: 'with impact',
    subtitle:
      'A decade building real products for companies and ventures. Here\'s the outcome, not the task list.',
  },
  contact: {
    title: "Let's talk about your",
    titleAccent: 'project',
    subtitle:
      'Open to product challenges, systems integration, and job opportunities to fund QUIKLII. Any of these channels works.',
    cta: 'Email me directly',
  },
};

export const translations = { es, en } as const;
export type Dictionary = typeof es;
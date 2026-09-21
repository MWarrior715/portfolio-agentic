// Portafolio agéntico · AI Product Builder
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
  dock: {
    ariaLabel: 'Navegación rápida',
    langEs: 'Cambiar a español',
    langEn: 'Cambiar a inglés',
  },
  hero: {
    eyebrow: 'Perfil Profesional',
    titleLine1: 'AI Product Builder',
    titleSep: '&',
    titleLine2: 'Systems Integrator',
    subtitle:
      'Reduzco la distancia entre una idea compleja y un producto funcional. Conecto desarrollo, inteligencia artificial, automatización y estrategia de negocio.',
    ctaProjects: 'Ver Proyectos',
    ctaContact: 'Contactar',
    network: {
      negocio: 'Negocio',
      personas: 'Personas',
      territorio: 'Territorio',
      integrador: 'Integrador',
      rag: 'RAG',
      agentesIa: 'Agentes IA',
      automatizacion: 'Automatización',
    },
  },
  aiFirst: {
    eyebrow: 'METODOLOGÍA',
    title: 'Ingeniería',
    titleAccent: 'AI-First',
    subtitle:
      'No solo uso IA para escribir código. Diseño sistemas donde agentes especializados orquestan cada fase del desarrollo desde el contexto y las realidades del producto o solución.',
    roles: [
      {
        eyebrow: 'Orquestación',
        title: 'Agente Orquestador',
        description:
          'Planifica, divide tareas y gestiona el contexto global del proyecto.',
      },
      {
        eyebrow: 'Generación',
        title: 'Agente Constructor',
        description:
          'Genera, refactoriza y valida código production-ready con estándares estrictos.',
      },
      {
        eyebrow: 'Razonamiento',
        title: 'Agente de Razonamiento',
        description:
          'Valida lógica de negocio, sugiere optimizaciones y asegura coherencia arquitectónica.',
      },
    ],
  },
  projects: {
    eyebrow: 'LABORATORIO IA',
    title: 'Laboratorio de Productos',
    titleAccent: 'IA',
    subtitle:
      'Cada caso sigue el mismo formato: problema real, solución arquitectónica, impacto medido y ahorro cuantificado.',
    codeLabel: 'Código',
    demoLabel: 'Demo en vivo',
    caseLabels: {
      problem: 'Problema',
      solution: 'Solución',
      impact: 'Impacto',
      savings: 'Ahorro',
    },
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
      'Una década construyendo productos reales para empresas y emprendimientos. Siempre entendiendo el contexto y la realidad donde la solución o producto se implementa.',
  },
  contact: {
    eyebrow: 'CONTACTO',
    title: 'Hablemos de tu',
    titleAccent: 'proyecto',
    subtitle:
      'Quiero aportar al desarrollo de productos, integración de sistemas y oportunidades laborales.',
    cta: 'Escríbeme directamente',
    portraitAlt: 'Retrato de Manuel Guerrero',
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
  dock: {
    ariaLabel: 'Quick navigation',
    langEs: 'Switch to Spanish',
    langEn: 'Switch to English',
  },
  hero: {
    eyebrow: 'Professional Profile',
    titleLine1: 'AI Product Builder',
    titleSep: '&',
    titleLine2: 'Systems Integrator',
    subtitle:
      'I close the gap between a complex idea and a working product. I connect development, AI, automation, and business strategy.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact',
    network: {
      negocio: 'Business',
      personas: 'People',
      territorio: 'Territory',
      integrador: 'Integrator',
      rag: 'RAG',
      agentesIa: 'AI Agents',
      automatizacion: 'Automation',
    },
  },
  aiFirst: {
    eyebrow: 'METHODOLOGY',
    title: 'Engineering',
    titleAccent: 'AI-First',
    subtitle:
      "I don't just use AI to write code. I design systems where specialized agents orchestrate every phase of development from the context and realities of the product or solution.",
    roles: [
      {
        eyebrow: 'Orchestration',
        title: 'Orchestrator Agent',
        description:
          'Plans, divides tasks, and manages the global project context.',
      },
      {
        eyebrow: 'Generation',
        title: 'Builder Agent',
        description:
          'Generates, refactors, and validates production-ready code with strict standards.',
      },
      {
        eyebrow: 'Reasoning',
        title: 'Reasoning Agent',
        description:
          'Validates business logic, suggests optimizations, and ensures architectural coherence.',
      },
    ],
  },
  projects: {
    eyebrow: 'AI LAB',
    title: 'AI Products',
    titleAccent: 'Lab',
    subtitle:
      'Every case follows the same format: real problem, architectural solution, measured impact, and quantified savings.',
    codeLabel: 'Code',
    demoLabel: 'Live demo',
    caseLabels: {
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Impact',
      savings: 'Savings',
    },
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
      'A decade building real products for companies and ventures. Always understanding the context and reality where the solution or product is implemented.',
  },
  contact: {
    eyebrow: 'CONTACT',
    title: "Let's talk about your",
    titleAccent: 'project',
    subtitle:
      'I want to contribute to product development, systems integration, and job opportunities.',
    cta: 'Email me directly',
    portraitAlt: 'Portrait of Manuel Guerrero',
  },
};

export const translations = { es, en } as const;
export type Dictionary = typeof es;
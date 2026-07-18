/** Idiomas soportados por el portafolio. */
export type Lang = 'es' | 'en';

/** Contenido localizado en todos los idiomas soportados. */
export type Localized<T> = Record<Lang, T>;

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** Caso de negocio en formato Problem -> Solution -> Impact -> Savings. */
  problem: string;
  solution: string;
  impact: string;
  savings: string;
  stack: string[];
  /** Métrica de impacto destacada (texto corto, ej: "95% reducción..."). */
  metric: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

/** Capa de arquitectura del caso QUIKLII. */
export interface QuikliiLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  /** Nombre del ícono lucide-react a renderizar (mapeado en el componente). */
  icon: 'hammer' | 'cpu' | 'rocket';
}

/** Métrica destacada del caso QUIKLII. */
export interface QuikliiMetric {
  value: string;
  label: string;
}

/** Datos del caso de estudio QUIKLII. */
export interface QuikliiData {
  positioning: string;
  description: string;
  stack: string[];
  layers: QuikliiLayer[];
  metrics: QuikliiMetric[];
  architectureCode: string;
}

/** Tipo de entrada de experiencia. */
export type ExperienceType = 'work' | 'entrepreneurship' | 'education';

/** Item de experiencia (timeline), enfocado en impacto. */
export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  impact: string;
  type: ExperienceType;
}

/** Íconos disponibles para un canal de contacto. */
export type ContactIcon = 'mail' | 'phone' | 'whatsapp' | 'github' | 'map' | 'languages';

/** Canal de contacto (dato real extraído del old-portfolio). */
export interface ContactItem {
  id: string;
  label: string;
  value: string;
  /** href opcional: si existe, el ítem es un enlace clicable. */
  href?: string;
  icon: ContactIcon;
}
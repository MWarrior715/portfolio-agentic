import { type Localized, type ProjectData } from '@/types';

export const projectsData: Localized<ProjectData[]> = {
  es: [
    {
      id: 'ai-app-builder',
      title: 'AI App Builder Agent',
      tagline: 'De una descripción a una app funcional en minutos',
      description:
        'Sistema multiagente (Orquestador, UI, Backend, Contenido, QA) que genera aplicaciones web completas a partir de lenguaje natural.',
      problem:
        'Equipos junior tardan semanas en entregar una app desde cero. La distancia entre idea y producto es lenta y costosa.',
      solution:
        'Orquesto un sistema multiagente que recibe lenguaje natural y coordina UI, Backend, Contenido y QA hasta generar una app funcional y consistente.',
      impact:
        'Lo que 3 juniors entregan en 3 semanas, el sistema lo materializa en 2 horas, con estándares de código consistentes.',
      savings: '95% de reducción en tiempo de entrega',
      stack: ['LangGraph', 'Claude API', 'React', 'Node.js', 'TypeScript', 'TailwindCSS'],
      metric: '95% reducción en tiempo de entrega',
      tags: ['Multiagente', 'Generación de Código'],
      githubUrl: 'https://github.com/MWarrior715/ai-app-builder',
      demoUrl: '#',
    },
    {
      id: 'legal-rag-colombia',
      title: 'AI Legal Assistant – Propiedad Horizontal',
      tagline: 'Jurisprudencia colombiana consultable en segundos',
      description:
        'Sistema RAG sobre legislación colombiana real (Ley 675 de 2001). Ingesta PDFs, vectoriza y responde citando fuentes exactas.',
      problem:
        'Consultar jurisprudencia de propiedad horizontal requiere horas de lectura manual de PDFs y leyes dispersas.',
      solution:
        'Construí un sistema RAG sobre la Ley 675 de 2001: ingestión de PDFs, vectorización semántica y respuestas con trazabilidad a la fuente legal exacta.',
      impact:
        'Respuestas en segundos que citan el artículo y documento de origen, eliminando la incertidumbre de las respuestas genéricas.',
      savings: '90% menos tiempo en consultas legales',
      stack: ['LlamaIndex', 'Pinecone', 'FastAPI', 'Python', 'OpenAI Embeddings'],
      metric: '90% menos tiempo en consultas',
      tags: ['RAG', 'Legal Tech', 'Nicho Colombia'],
      githubUrl: 'https://github.com/MWarrior715/legal-rag-colombia',
      demoUrl: '#',
    },
    {
      id: 'autonomous-workflow',
      title: 'Autonomous Workflow Agent',
      tagline: 'Leads calificados y propuestas en piloto automático',
      description:
        'Automatización autónoma de procesos B2B: recibe leads, los califica con IA, genera propuestas y hace seguimiento.',
      problem:
        'Los leads B2B esperan hasta 24 horas por una respuesta y la cualificación manual es inconsistente y costosa.',
      solution:
        'Automatización autónoma que recibe leads, los califica con IA (score 1-100), genera propuestas personalizadas y ejecuta el seguimiento.',
      impact:
        'Tiempo de respuesta de 24 horas a 2 minutos, con cualificación consistente y propuestas listas sin intervención humana.',
      savings: '24h → 2 min tiempo de respuesta',
      stack: ['n8n', 'OpenAI Functions', 'Node.js', 'SendGrid', 'PostgreSQL'],
      metric: '24h → 2 min tiempo de respuesta',
      tags: ['Automatización', 'n8n', 'Lead Gen'],
      githubUrl: 'https://github.com/MWarrior715/autonomous-workflow',
      demoUrl: '#',
    },
    {
      id: 'ai-booking-engine',
      title: 'AI Booking Engine',
      tagline: 'Motor de reservas inteligente, multi-rubro y listo para producción',
      description:
        'Motor de reservas con IA conversacional, adaptable a restaurantes, gimnasios, spas, salones, consultorios y coworking. Disponibilidad, conflictos y confirmaciones en tiempo real.',
      problem:
        'Las agendas por WhatsApp o teléfono pierden reservas, duplican cupos y no escalan entre locales con flujos distintos.',
      solution:
        'Motor de reservas sobre Next.js y PostgreSQL con IA conversacional: gestiona disponibilidad, conflictos de calendario y confirmaciones automáticas, configurable por rubro.',
      impact:
        'Reservas 24/7 sin fricción, cero doble-booking y un solo sistema para varios tipos de negocio.',
      savings: '~70% menos tiempo humano en agenda y cupos',
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Socket.io'],
      metric: '~70% menos gestión manual de reservas',
      tags: ['IA Conversacional', 'SaaS', 'Multi-rubro'],
      githubUrl: 'https://github.com/MWarrior715/ai-booking-engine',
      demoUrl: '#',
    },
    {
      id: 'ai-operations-center',
      title: 'AI Operations Center',
      tagline: 'Consola central donde múltiples agentes colaboran en tiempo real',
      description:
        'Consola de observabilidad y orquestación de agentes (research, sales, scheduling, customer, coding, reporting) que trabajan simultáneamente sobre un estado compartido.',
      problem:
        'Cuando varios agentes operan a la vez, sin un panel único no hay visibilidad ni coordinación: cada uno trabaja a ciegas.',
      solution:
        'Construí una consola central con estado compartido y WebSocket que orquesta y muestra agentes colaborativos trabajando simultáneamente, con observabilidad en tiempo real.',
      impact:
        'Un solo panel para ver, coordinar y corregir todos los agentes del ecosistema en producción.',
      savings: 'Decisiones operativas en segundos, no en reuniones de alineación',
      stack: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'Redis', 'Python', 'LangGraph'],
      metric: '1 consola · N agentes coordinados en tiempo real',
      tags: ['Multiagente', 'Observabilidad', 'Tiempo real'],
      githubUrl: 'https://github.com/MWarrior715/ai-operations-center',
      demoUrl: '#',
    },
    {
      id: 'multi-agent-crm',
      title: 'Multi-Agent CRM Assistant',
      tagline: 'CRM impulsado por agentes que automatizan el flujo comercial completo',
      description:
        'CRM con agentes inteligentes: captura de leads, clasificación, resumen, seguimiento, emails, propuestas, historial y tareas, sin intervención manual.',
      problem:
        'El seguimiento comercial se hace a mano, los leads se enfrían y el historial se pierde entre WhatsApp, correo y hojas de cálculo.',
      solution:
        'CRM con agentes especializados que capturan, clasifican, resumen y hacen seguimiento de leads, generan emails y propuestas, y mantienen historial y tareas unificadas.',
      impact:
        'El flujo comercial completo en piloto automático, con contexto centralizado por lead.',
      savings: '24h → minutos en seguimiento y propuesta comercial',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'LangGraph', 'SendGrid', 'TypeScript'],
      metric: '24h → minutos en seguimiento comercial',
      tags: ['CRM', 'Agentes IA', 'Automatización comercial'],
      githubUrl: 'https://github.com/MWarrior715/multi-agent-crm',
      demoUrl: '#',
    },
  ],
  en: [
    {
      id: 'ai-app-builder',
      title: 'AI App Builder Agent',
      tagline: 'From a description to a working app in minutes',
      description:
        'Multi-agent system (Orchestrator, UI, Backend, Content, QA) that generates complete web applications from natural language.',
      problem:
        'Junior teams take weeks to ship an app from scratch. The distance from idea to product is slow and expensive.',
      solution:
        'I orchestrate a multi-agent system that takes natural language and coordinates UI, Backend, Content, and QA until it produces a functional, consistent app.',
      impact:
        'What 3 juniors deliver in 3 weeks, this system ships in 2 hours, with consistent code standards.',
      savings: '95% reduction in delivery time',
      stack: ['LangGraph', 'Claude API', 'React', 'Node.js', 'TypeScript', 'TailwindCSS'],
      metric: '95% reduction in delivery time',
      tags: ['Multi-agent', 'Code Generation'],
      githubUrl: 'https://github.com/MWarrior715/ai-app-builder',
      demoUrl: '#',
    },
    {
      id: 'legal-rag-colombia',
      title: 'AI Legal Assistant – Horizontal Property',
      tagline: 'Colombian jurisprudence queryable in seconds',
      description:
        'RAG system over real Colombian legislation (Law 675 of 2001). Ingests PDFs, vectorizes, and answers citing exact sources.',
      problem:
        'Querying horizontal property jurisprudence takes hours of manual reading across scattered PDFs and laws.',
      solution:
        'I built a RAG system over Law 675 of 2001: PDF ingestion, semantic vectorization, and answers with traceability to the exact legal source.',
      impact:
        'Answers in seconds that cite the article and source document, removing the uncertainty of generic responses.',
      savings: '90% less time on legal queries',
      stack: ['LlamaIndex', 'Pinecone', 'FastAPI', 'Python', 'OpenAI Embeddings'],
      metric: '90% less time on legal queries',
      tags: ['RAG', 'Legal Tech', 'Colombia Niche'],
      githubUrl: 'https://github.com/MWarrior715/legal-rag-colombia',
      demoUrl: '#',
    },
    {
      id: 'autonomous-workflow',
      title: 'Autonomous Workflow Agent',
      tagline: 'Leads qualified and proposals on autopilot',
      description:
        'Autonomous B2B process automation: receives leads, qualifies them with AI, generates proposals, and follows up.',
      problem:
        'B2B leads wait up to 24 hours for a response, and manual qualification is inconsistent and costly.',
      solution:
        'Autonomous automation that receives leads, qualifies them with AI (1-100 score), generates tailored proposals, and runs follow-up.',
      impact:
        'Response time from 24 hours to 2 minutes, with consistent qualification and proposals ready without human intervention.',
      savings: '24h → 2 min response time',
      stack: ['n8n', 'OpenAI Functions', 'Node.js', 'SendGrid', 'PostgreSQL'],
      metric: '24h → 2 min response time',
      tags: ['Automation', 'n8n', 'Lead Gen'],
      githubUrl: 'https://github.com/MWarrior715/autonomous-workflow',
      demoUrl: '#',
    },
    {
      id: 'ai-booking-engine',
      title: 'AI Booking Engine',
      tagline: 'Smart, multi-industry booking engine, production-ready',
      description:
        'Conversational AI booking engine, adaptable to restaurants, gyms, spas, salons, clinics and coworking. Real-time availability, conflicts and confirmations.',
      problem:
        'Booking by WhatsApp or phone loses reservations, double-books slots and does not scale across venues with different flows.',
      solution:
        'Booking engine on Next.js and PostgreSQL with conversational AI: handles availability, calendar conflicts and automatic confirmations, configurable per industry.',
      impact:
        '24/7 frictionless reservations, zero double-booking and one system for several business types.',
      savings: '~70% less human time on scheduling and slots',
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Socket.io'],
      metric: '~70% less manual booking management',
      tags: ['Conversational AI', 'SaaS', 'Multi-industry'],
      githubUrl: 'https://github.com/MWarrior715/ai-booking-engine',
      demoUrl: '#',
    },
    {
      id: 'ai-operations-center',
      title: 'AI Operations Center',
      tagline: 'Central console where multiple agents collaborate in real time',
      description:
        'Observability and orchestration console for agents (research, sales, scheduling, customer, coding, reporting) working simultaneously over shared state.',
      problem:
        'When several agents run at once without a single panel, there is no visibility or coordination — each works blind.',
      solution:
        'Built a central console with shared state and WebSocket that orchestrates and renders collaborative agents working simultaneously, with real-time observability.',
      impact:
        'A single panel to see, coordinate and correct every agent in the production ecosystem.',
      savings: 'Operational decisions in seconds, not in alignment meetings',
      stack: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'Redis', 'Python', 'LangGraph'],
      metric: '1 console · N agents coordinated in real time',
      tags: ['Multi-agent', 'Observability', 'Real-time'],
      githubUrl: 'https://github.com/MWarrior715/ai-operations-center',
      demoUrl: '#',
    },
    {
      id: 'multi-agent-crm',
      title: 'Multi-Agent CRM Assistant',
      tagline: 'Agent-driven CRM that automates the full sales flow',
      description:
        'CRM with intelligent agents: lead capture, classification, summary, follow-up, emails, proposals, history and tasks, without manual intervention.',
      problem:
        'Sales follow-up is manual, leads go cold and history gets lost across WhatsApp, email and spreadsheets.',
      solution:
        'CRM with specialized agents that capture, classify, summarize and follow up on leads, generate emails and proposals, and keep unified history and tasks.',
      impact:
        'The full sales flow on autopilot, with centralized per-lead context.',
      savings: '24h → minutes on follow-up and sales proposals',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Python', 'LangGraph', 'SendGrid', 'TypeScript'],
      metric: '24h → minutes on sales follow-up',
      tags: ['CRM', 'AI Agents', 'Sales Automation'],
      githubUrl: 'https://github.com/MWarrior715/multi-agent-crm',
      demoUrl: '#',
    },
  ],
};
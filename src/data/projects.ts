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
  ],
};
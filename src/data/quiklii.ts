import { type Localized, type QuikliiData } from '@/types';

export const quikliiData: Localized<QuikliiData> = {
  es: {
    positioning: 'Laboratorio de Integración',
    description:
      'QUIKLII no es una app de domicilios más. Es el laboratorio donde integro desarrollo, IA, pagos y operaciones en tiempo real sobre una sola arquitectura. Cada pedido cruza 5 sistemas distintos y se resuelve en segundos.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Wompi', 'Nequi', 'PSE', 'Efectivo', 'Socket.io', 'TypeScript'],
    metrics: [
      { value: '40%', label: 'más rápido que el promedio de la industria' },
      { value: '3 capas', label: 'AI-assisted · Operaciones · Crecimiento' },
      { value: '5', label: 'métodos de pago unificados en un solo flujo' },
      { value: 'Tiempo real', label: 'tracking con Socket.io' },
    ],
    layers: [
      {
        id: 'ai-assisted',
        title: 'Desarrollo AI-assisted',
        subtitle: 'Cómo se construye',
        description:
          'Cada feature nace desde una especificación estructurada y se materializa con agentes que generan, validan y refactorizan código hasta cumplir estándares de producción.',
        capabilities: [
          'Generación de módulos desde especificación',
          'Refactor automático con revisión de tipos estricta',
          'Tests generados antes de integrar',
        ],
        icon: 'hammer',
      },
      {
        id: 'operaciones',
        title: 'Operaciones con Agentes',
        subtitle: 'Cómo opera en vivo',
        description:
          'Agentes especializados orquestan el flujo de cada pedido en tiempo real: validación de pago, asignación de driver, tracking y optimización de ruta.',
        capabilities: [
          'Validación de pagos Wompi / Nequi / PSE / Efectivo',
          'Asignación de driver por radio y score',
          'Tracking en tiempo real con Socket.io',
          'Optimización de ruta con tráfico en vivo',
        ],
        icon: 'cpu',
      },
      {
        id: 'crecimiento',
        title: 'Crecimiento con IA',
        subtitle: 'Cómo escala',
        description:
          'La IA analiza patrones de demanda y comportamiento para alimentar decisiones de cobertura, pricing y expansión sin intervención manual.',
        capabilities: [
          'Detección de zonas de alta demanda',
          'Sugerencia de pricing dinámico',
          'Segmentación de usuarios por comportamiento',
        ],
        icon: 'rocket',
      },
    ],
    architectureCode: `// QUIKLII - AI-Powered Delivery Architecture
const orderFlow = await agent.orchestrate([
  agent.validatePayment({ method: "Wompi | Cash" }),
  agent.assignDriver({ radius: "3km", score: "highest" }),
  agent.trackRealtime({ socket: "order_8923" }),
  agent.optimizeRoute({ traffic: "live" })
]);

// Result: Pedido entregado 40% más rápido
// que el promedio de la industria.`,
  },
  en: {
    positioning: 'Integration Lab',
    description:
      'QUIKLII is not just another delivery app. It is the lab where I integrate development, AI, payments, and real-time operations on a single architecture. Every order crosses 5 different systems and resolves in seconds.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Wompi', 'Nequi', 'PSE', 'Cash', 'Socket.io', 'TypeScript'],
    metrics: [
      { value: '40%', label: 'faster than the industry average' },
      { value: '3 layers', label: 'AI-assisted · Operations · Growth' },
      { value: '5', label: 'payment methods unified in one flow' },
      { value: 'Real-time', label: 'tracking with Socket.io' },
    ],
    layers: [
      {
        id: 'ai-assisted',
        title: 'AI-assisted Development',
        subtitle: 'How it is built',
        description:
          'Every feature starts from a structured spec and is materialized by agents that generate, validate, and refactor code to production standards.',
        capabilities: [
          'Module generation from spec',
          'Auto refactor with strict type review',
          'Tests generated before merging',
        ],
        icon: 'hammer',
      },
      {
        id: 'operaciones',
        title: 'Agent Operations',
        subtitle: 'How it runs live',
        description:
          'Specialized agents orchestrate each order\'s flow in real time: payment validation, driver assignment, tracking, and route optimization.',
        capabilities: [
          'Payment validation Wompi / Nequi / PSE / Cash',
          'Driver assignment by radius and score',
          'Real-time tracking with Socket.io',
          'Route optimization with live traffic',
        ],
        icon: 'cpu',
      },
      {
        id: 'crecimiento',
        title: 'AI Growth',
        subtitle: 'How it scales',
        description:
          'AI analyzes demand and behavior patterns to feed coverage, pricing, and expansion decisions without manual intervention.',
        capabilities: [
          'High-demand zone detection',
          'Dynamic pricing suggestions',
          'User segmentation by behavior',
        ],
        icon: 'rocket',
      },
    ],
    architectureCode: `// QUIKLII - AI-Powered Delivery Architecture
const orderFlow = await agent.orchestrate([
  agent.validatePayment({ method: "Wompi | Cash" }),
  agent.assignDriver({ radius: "3km", score: "highest" }),
  agent.trackRealtime({ socket: "order_8923" }),
  agent.optimizeRoute({ traffic: "live" })
]);

// Result: Order delivered 40% faster
// than the industry average.`,
  },
};
// Portafolio agéntico · AI Product Builder
import { useTranslation } from '@/hooks/useTranslation';

interface PillProps {
  cx: number;
  cy: number;
  w: number;
  label: string;
  color: string;
}

/** Píldora de nodo: borde redondeado con etiqueta centrada. */
function Pill({ cx, cy, w, label, color }: PillProps) {
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 18}
        width={w}
        height={36}
        rx={18}
        fill="var(--bg)"
        fillOpacity="0.9"
        stroke={color}
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="13"
        className="font-mono"
        fill={color}
      >
        {label}
      </text>
    </g>
  );
}

interface CircleNodeProps {
  cx: number;
  cy: number;
  r: number;
  label: string;
  color: string;
}

/** Nodo circular con etiqueta centrada. */
function CircleNode({ cx, cy, r, label, color }: CircleNodeProps) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="var(--bg)"
        fillOpacity="0.9"
        stroke={color}
        strokeWidth="1.5"
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="13"
        className="font-mono"
        fill={color}
      >
        {label}
      </text>
    </g>
  );
}

/**
 * Grafo de red decorativo del hero — versión viva del diagrama del banner:
 * contextos (naranja) convergen en "Integrador" y se orquestan con
 * capacidades IA (verde). Solo decorativo: aria-hidden.
 */
export function NetworkGraph({ className = '' }: { className?: string }) {
  const t = useTranslation();
  const warm = 'var(--accent-warm)';
  const green = 'var(--accent)';

  return (
    <svg
      viewBox="0 0 640 520"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="net-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Conexiones naranjas: contextos → Integrador (con flujo animado) */}
      <g stroke={warm} strokeWidth="1.4" fill="none" opacity="0.55">
        <path className="network-flow" d="M160 78 C 200 140, 240 190, 268 222" />
        <path className="network-flow" d="M110 196 C 170 216, 220 232, 252 238" />
        <path className="network-flow" d="M150 388 C 200 340, 240 290, 262 258" />
        <path d="M296 222 C 360 180, 420 164, 477 152" opacity="0.7" />
      </g>

      {/* Puntos naranjas de intersección */}
      <g fill={warm} opacity="0.75">
        <circle cx="222" cy="148" r="4" />
        <circle cx="350" cy="320" r="4" />
        <circle cx="196" cy="250" r="3" />
      </g>

      {/* Malla verde: capacidades IA interconectadas */}
      <g stroke={green} strokeWidth="1.2" opacity="0.45" fill="none">
        <path d="M552 78 L 536 134" />
        <path d="M536 170 L 548 278" />
        <path d="M590 60 L 628 108" />
        <path d="M628 108 L 600 208" />
        <path d="M600 208 L 548 278" />
        <path d="M616 356 L 552 314" />
        <path d="M486 388 L 478 314" />
        <path d="M420 120 L 477 152" />
        <path d="M468 36 L 514 42" />
      </g>

      {/* Nodos pequeños de la malla verde */}
      <g fill={green} opacity="0.8">
        <circle cx="468" cy="36" r="5" />
        <circle cx="628" cy="108" r="6" />
        <circle cx="600" cy="208" r="5" />
        <circle cx="616" cy="356" r="6" />
        <circle cx="486" cy="388" r="5" />
        <circle cx="420" cy="120" r="4" />
      </g>

      {/* Hub central: Integrador (resplandor + texto serif) */}
      <g className="network-glow">
        <text
          x="296"
          y="240"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="26"
          fill={warm}
          opacity="0.5"
          filter="url(#net-glow)"
          style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          {t.hero.network.integrador}
        </text>
      </g>
      <text
        x="296"
        y="240"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="26"
        fill={warm}
        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
      >
        {t.hero.network.integrador}
      </text>

      {/* Contextos (naranja) */}
      <Pill cx={160} cy={60} w={100} label={t.hero.network.negocio} color={warm} />
      <CircleNode cx={66} cy={196} r={44} label={t.hero.network.personas} color={warm} />
      <CircleNode cx={104} cy={396} r={46} label={t.hero.network.territorio} color={warm} />

      {/* Capacidades IA (verde) */}
      <Pill cx={552} cy={60} w={76} label={t.hero.network.rag} color={green} />
      <Pill cx={536} cy={152} w={118} label={t.hero.network.agentesIa} color={green} />
      <Pill cx={548} cy={296} w={148} label={t.hero.network.automatizacion} color={green} />
    </svg>
  );
}
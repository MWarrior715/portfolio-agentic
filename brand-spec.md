# Especificación de marca — Manuel Guerrero Portfolio

Dirección: **Dark Luxury Utilitario / Tech-Editorial**. Un solo acento, superficies profundas no puras, tipografía con autoridad, y una postura de "menos es más".

## Tokens de color (OKLch)

```css
:root {
  --bg: oklch(9% 0.01 260);         /* casi negro, con frío sutil */
  --surface: oklch(14% 0.015 260);   /* tarjetas, paneles */
  --surface-raised: oklch(18% 0.02 260);
  --fg: oklch(96% 0.005 260);        /* texto principal */
  --muted: oklch(68% 0.015 260);     /* subtítulos, metadatos */
  --border: oklch(24% 0.015 260);    /* bordes estructurales */
  --border-subtle: oklch(18% 0.01 260);
  --accent: oklch(68% 0.18 165);     /* verde ágata / mint oscuro */
  --accent-2: oklch(55% 0.16 165);   /* acento para texto/link */
}
```

Light mode invertido:

```css
.light, :root:not(.dark) {
  --bg: oklch(98% 0.01 260);
  --surface: oklch(100% 0 0);
  --surface-raised: oklch(96% 0.01 260);
  --fg: oklch(18% 0.02 260);
  --muted: oklch(55% 0.02 260);
  --border: oklch(88% 0.015 260);
  --border-subtle: oklch(94% 0.01 260);
  --accent: oklch(60% 0.16 165);
  --accent-2: oklch(50% 0.16 165);
}
```

## Escala tipográfica

- **Display**: `"Newsreader"` / `Source Serif 4` → serif de alto rendimiento en pantalla. Títulos hero ≥ 56px, tracking -0.02em.
- **Body**: `Inter` → 16px/1.6, tracking 0.
- **Mono**: `JetBrains Mono` → stack, métricas, labels de tech, código.
- **UI labels / buttons**: Inter 14px, weight 500, tracking 0.02em, mayúsculas con tracking 0.08em.

## Postura de diseño (reglas de uso)

1. **Un solo acento.** `--accent` verde ágata aparece en: (a) el punto focal de la sección (eyebrow o CTA), y (b) un detalle funcional (hover de link activo, indicador de capa). Nunca más de 2 usos visibles por viewport.
2. **Sin bordes laterales de color en tarjetas.** Las tarjetas usan bordes neutros `--border` o fondo `--surface-raised`; el acento entra por un chip, un indicador de estado o un link.
3. **Números y stack en mono.** Métricas, años, tech tags y porcentajes usan JetBrains Mono.
4. **Fondos profundos, no puros.** Evitar `#000` y `#fff`; los tokens OKLch mantienen calidez/frío controlado.
5. **Formas contenidas.** Radio `rounded-xl` (16px) para tarjetas, `rounded-lg` (8px) para controles. Sin sombras difusas grandes; usa bordes y fondos para jerarquía.
6. **Código como textura, no decoración.** El componente de código es una ventana de terminal realista con prompt y highlight de acento, no un typewriter de titilar infinito.
7. **Métricas honestas.** Cada porcentaje o tiempo debe tener fuente o ser reemplazado por un resultado observable ("Respuestas en segundos", "Demo en vivo").

## Voz y jerarquía

- Hero: una línea display grande, un subtítulo de cuerpo de 18–20px con `max-width: 60ch`, un CTA primario + secundario.
- Secciones: eyebrow en mono mayúsculas con tracking, título display de 40–48px, subtítulo de 18px.
- Tarjetas de proyecto: título en 20px, tagline muted, 2–3 líneas de caso en lugar de 4 bloques completos, stack en mono chips.
- QUIKLII: 4 métricas grandes en mono, 3 capas como tarjetas limpias con un bullet de acento, un diagrama de arquitectura estático/diagrama visual.
- Experiencia: lista compacta sin línea central, con periodo mono + role + organización + impacto.
- Contacto: tarjetas sin borde lateral, icono en superficie sutil, CTA primario grande.

## Imágenes / assets

- Perfil: foto real o ilustración abstracta generada coherente con la paleta.
- Diagramas: 1 diagrama de flujo para QUIKLII y 1 para App Builder, como SVG inline monocromo con acento.
- No emoji, no gradientes decorativos, no placeholder genérico.

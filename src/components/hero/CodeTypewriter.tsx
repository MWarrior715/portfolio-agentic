// Portafolio agéntico · AI Product Builder
import { useEffect, useState } from 'react';

interface CodeTypewriterProps {
  code: string;
  typingSpeed?: number;
  className?: string;
}

export function CodeTypewriter({
  code,
  typingSpeed = 24,
  className = '',
}: CodeTypewriterProps) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let index = 0;

    const timer = setInterval(() => {
      if (index >= code.length) {
        clearInterval(timer);
        return;
      }
      setDisplayed((prev) => prev + code.charAt(index));
      index += 1;
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [code, typingSpeed]);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-structural bg-[var(--surface)] shadow-2xl ${className}`}
      data-od-id="code-terminal"
    >
      <div className="flex items-center gap-2 border-b border-structural px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[oklch(60%_0.15_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(75%_0.15_95)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
        <span className="ml-3 font-mono text-xs text-[var(--muted)]">quiklii-architecture.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 text-left text-xs leading-relaxed sm:text-sm">
        <code className="font-mono text-[var(--fg)]">
          {displayed}
          <span className="inline-block h-4 w-2 animate-pulse bg-[var(--accent)] align-text-bottom" />
        </code>
      </pre>
    </div>
  );
}

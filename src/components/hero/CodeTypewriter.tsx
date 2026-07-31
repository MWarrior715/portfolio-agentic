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
      className={`max-w-full overflow-hidden rounded-xl border border-structural bg-[var(--surface)] shadow-2xl ${className}`}
      data-od-id="code-terminal"
    >
      <div className="flex items-center gap-2 border-b border-structural px-3 py-2 sm:px-4 sm:py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(60%_0.15_25)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(75%_0.15_95)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] sm:h-3 sm:w-3" />
        <span className="ml-2 font-mono text-[10px] text-[var(--muted)] sm:ml-3 sm:text-xs">quiklii-architecture.ts</span>
      </div>
      <pre className="max-w-full overflow-x-auto p-3 text-left text-[10px] leading-relaxed sm:p-5 sm:text-xs lg:text-sm">
        <code className="break-words font-mono text-[var(--fg)]">
          {displayed}
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-[var(--accent)] align-text-bottom sm:h-4 sm:w-2" />
        </code>
      </pre>
    </div>
  );
}

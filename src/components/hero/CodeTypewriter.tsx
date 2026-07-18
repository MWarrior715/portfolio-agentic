// Generado asistido por Claude Code
import { useEffect, useState } from 'react';

interface CodeTypewriterProps {
  code: string;
  typingSpeed?: number;
  className?: string;
}

export function CodeTypewriter({
  code,
  typingSpeed = 32,
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
    <pre
      className={`overflow-x-auto rounded-lg border border-gray-200 bg-gray-100 p-4 text-left text-xs leading-relaxed dark:border-gray-800 dark:bg-[#0d1117] sm:text-sm ${className}`}
    >
      <code className="font-mono text-gray-800 dark:text-gray-200">
        {displayed}
        <span className="inline-block h-4 w-2 animate-pulse bg-indigo-500 align-text-bottom" />
      </code>
    </pre>
  );
}

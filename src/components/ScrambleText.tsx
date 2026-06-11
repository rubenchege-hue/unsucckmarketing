"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;':\",./<>?`~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnMount?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  scrambleOnHover = true,
  scrambleOnMount = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isScramblingRef = useRef(false);

  const cleanup = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    isScramblingRef.current = false;
  }, []);

  const scramble = useCallback(() => {
    cleanup();

    isScramblingRef.current = true;
    let frame = 0;
    const totalFrames = 14;

    timerRef.current = setInterval(() => {
      frame++;

      if (frame > totalFrames) {
        cleanup();
        setDisplayText(text);
        return;
      }

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            // Stagger: characters settle from left to right in a wave
            const progress = frame / totalFrames;
            const charThreshold = (i / text.length) * 0.5 + 0.15;
            if (progress > charThreshold) {
              return text[i];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
    }, 55);
  }, [text, cleanup]);

  // Auto-scramble on mount for a dramatic entrance effect
  useEffect(() => {
    if (scrambleOnMount) {
      const timeout = setTimeout(scramble, 1500);
      return () => clearTimeout(timeout);
    }
  }, [scrambleOnMount, scramble]);

  // Cleanup on unmount
  useEffect(() => cleanup, [cleanup]);

  return (
    <span
      className={className}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}

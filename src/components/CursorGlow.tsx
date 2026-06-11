"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Only enable on devices with a fine pointer (mouse, not touch)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (hasFinePointer) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-1000"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.04), transparent 40%)`,
      }}
    />
  );
}

"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-[#7C3AED]/8 blur-[80px] transition-[left,top] duration-[50ms] ease-linear"
        style={{
          left: pos.x - 150,
          top: pos.y - 150,
        }}
      />
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleHoverTargets = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]');
      setHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('mouseover', handleHoverTargets, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseover', handleHoverTargets);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            hovering
              ? 'w-6 h-6 bg-accent-400/30 backdrop-blur-sm border border-accent-400/50'
              : 'w-3 h-3 bg-white/80'
          }`}
        ></div>
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1 : 0.5})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-500 ${
            hovering
              ? 'w-20 h-20 bg-accent-400/5 border border-accent-400/10'
              : 'w-16 h-16 bg-white/[0.02] border border-white/[0.04]'
          }`}
        ></div>
      </div>
    </>
  );
}
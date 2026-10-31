import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] hover:border-accent-400/30 transition-all duration-300 cursor-pointer group"
    >
      <i className="ri-arrow-up-line text-lg group-hover:-translate-y-0.5 transition-transform"></i>
    </button>
  );
}
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Close */}
          <button
            onClick={() => setDismissed(true)}
            className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.1] transition-all duration-300 cursor-pointer"
          >
            <i className="ri-close-line text-xs"></i>
          </button>

          {/* Main Widget */}
          <motion.div
            className="glass-card rounded-2xl p-5 w-[300px] md:w-[340px] relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-accent-500/10 blur-[40px]"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-accent-400/20 flex items-center justify-center">
                  <i className="ri-rocket-line text-accent-400"></i>
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm">Start Your Project</p>
                  <p className="text-white/30 text-[11px]">Free consultation & estimate</p>
                </div>
              </div>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.REACT_APP_NAVIGATE?.('/contact');
                }}
                className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold uppercase tracking-wider mb-2 hover:shadow-[0_0_25px_rgba(0,194,255,0.25)] transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Get Free Quote
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/918130543714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-semibold hover:bg-green-500/15 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line"></i>
                  WhatsApp
                </a>
                <a
                  href="tel:+918130543714"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 text-[11px] font-semibold hover:bg-white/[0.06] transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-line"></i>
                  Call
                </a>
                <a
                  href="tel:+919990390519"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 text-[11px] font-semibold hover:bg-white/[0.06] transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-line"></i>
                  Call 2
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
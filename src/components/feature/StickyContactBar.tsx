import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop Sticky Bottom Bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="hidden md:block fixed bottom-0 left-0 right-0 z-50"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="bg-dark-500/95 backdrop-blur-2xl border-t border-white/[0.06] shadow-[0_-4px_40px_rgba(0,0,0,0.3)]">
              <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-white/30 text-xs min-w-0">
                  <i className="ri-customer-service-2-line text-accent-400 flex-shrink-0"></i>
                  <span className="whitespace-nowrap hidden lg:inline">Need help? Call us:</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <a
                    href="tel:+918130543714"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.06] text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-accent-400 text-sm"></i>
                    +91 81305 43714
                  </a>
                  <a
                    href="tel:+919990390519"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.06] text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-accent-400 text-sm"></i>
                    +91 99903 90519
                  </a>
                  <a
                    href="https://wa.me/918130543714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/15 text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line"></i>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:info@digiindiasolutions.com"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.06] text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-mail-line text-accent-400"></i>
                    Email
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(0,194,255,0.25)] transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Get Free Quote
                    <i className="ri-arrow-right-line"></i>
                  </a>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white/80 hover:text-white hover:bg-white/[0.08] text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-line"></i>
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Action Buttons */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="md:hidden fixed bottom-5 right-5 z-50 flex flex-col gap-2.5"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <motion.a
              href="tel:+918130543714"
              className="w-11 h-11 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-400 hover:bg-accent-500/30 shadow-[0_4px_20px_rgba(0,194,255,0.15)] transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Call +91 81305 43714"
            >
              <i className="ri-phone-fill text-lg"></i>
            </motion.a>
            <motion.a
              href="https://wa.me/918130543714"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500/30 shadow-[0_4px_20px_rgba(34,197,94,0.15)] transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Chat on WhatsApp"
            >
              <i className="ri-whatsapp-fill text-lg"></i>
            </motion.a>
            <motion.a
              href="mailto:info@digiindiasolutions.com"
              className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Send Email"
            >
              <i className="ri-mail-fill text-lg"></i>
            </motion.a>
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="w-11 h-11 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,194,255,0.25)] transition-all cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Book Demo"
            >
              <i className="ri-calendar-check-fill text-lg"></i>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
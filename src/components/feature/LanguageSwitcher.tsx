import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentLang = i18n.language === 'hi' ? 'hi' : 'en';

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.05] transition-all text-xs cursor-pointer whitespace-nowrap"
        title={t('lang.switch', 'Switch Language')}
      >
        <i className="ri-global-line"></i>
        <span>{currentLang === 'hi' ? 'हि' : 'EN'}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
            <motion.div
              className="absolute right-0 top-full mt-1 w-36 glass-card rounded-xl p-1.5 z-50"
              initial={{ opacity: 0, y: -5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <button
                onClick={() => switchLang('en')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                  currentLang === 'en' ? 'bg-white/[0.06] text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                }`}
              >
                <span className="text-sm">🇺🇸</span>
                {t('lang.en', 'English')}
              </button>
              <button
                onClick={() => switchLang('hi')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                  currentLang === 'hi' ? 'bg-white/[0.06] text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                }`}
              >
                <span className="text-sm">🇮🇳</span>
                {t('lang.hi', 'हिन्दी')}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: string;
  icon: string;
}

const searchData: SearchResult[] = [
  { title: 'Website Development', description: 'Custom websites & web applications', path: '/services/website-development', category: 'Services', icon: 'ri-global-line' },
  { title: 'Mobile App Development', description: 'iOS & Android native apps', path: '/services/mobile-app-development', category: 'Services', icon: 'ri-smartphone-line' },
  { title: 'Custom Software', description: 'Tailored enterprise solutions', path: '/services/custom-software', category: 'Services', icon: 'ri-settings-line' },
  { title: 'AI & Automation', description: 'Intelligent process automation', path: '/services/ai-automation', category: 'Services', icon: 'ri-brain-line' },
  { title: 'ERP Solutions', description: 'Enterprise resource planning', path: '/services/erp-solutions', category: 'Services', icon: 'ri-database-2-line' },
  { title: 'CRM Solutions', description: 'Customer relationship management', path: '/services/crm-solutions', category: 'Services', icon: 'ri-user-line' },
  { title: 'Digital Marketing', description: 'SEO, PPC, and growth marketing', path: '/services/digital-marketing', category: 'Services', icon: 'ri-megaphone-line' },
  { title: 'Cloud Solutions', description: 'AWS, GCP, Azure migration', path: '/services/cloud-solutions', category: 'Services', icon: 'ri-cloud-line' },
  { title: 'Healthcare Solutions', description: 'EMR, telemedicine, HIPAA compliant', path: '/industries/healthcare', category: 'Industries', icon: 'ri-heart-pulse-line' },
  { title: 'Finance & Banking', description: 'Core banking, fraud detection', path: '/industries/finance', category: 'Industries', icon: 'ri-bank-line' },
  { title: 'Manufacturing', description: 'Industry 4.0, IoT, smart factory', path: '/industries/manufacturing', category: 'Industries', icon: 'ri-settings-3-line' },
  { title: 'Case Studies', description: 'Success stories & results', path: '/case-studies', category: 'Resources', icon: 'ri-file-text-line' },
  { title: 'Portfolio', description: 'Our latest work & projects', path: '/portfolio', category: 'Resources', icon: 'ri-folders-line' },
  { title: 'Cost Calculator', description: 'Instant project pricing', path: '/calculators', category: 'Tools', icon: 'ri-calculator-line' },
  { title: 'Careers', description: 'Join our team of 200+ engineers', path: '/careers', category: 'Company', icon: 'ri-briefcase-line' },
];

export default function AISearch() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery('');
    navigate(path);
  };

  const handleKeyNav = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    if (e.key === 'ArrowUp') setSelectedIndex((i) => Math.max(i - 1, 0));
    if (e.key === 'Enter' && results[selectedIndex]) handleSelect(results[selectedIndex].path);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/30 text-xs hover:text-white/60 hover:bg-white/[0.05] transition-all cursor-pointer"
      >
        <i className="ri-search-line"></i>
        <span>Search...</span>
        <kbd className="ml-4 px-1.5 py-0.5 rounded bg-white/[0.06] text-white/20 text-[10px] border border-white/[0.06]">⌘K</kbd>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/60 transition-all cursor-pointer"
      >
        <i className="ri-search-line text-sm"></i>
      </button>

      {/* Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div ref={overlayRef} className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh]" onClick={(e) => { if (e.target === overlayRef.current) setIsOpen(false); }}>
            <motion.div
              className="absolute inset-0 bg-dark-500/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="glass-card rounded-2xl w-full max-w-lg mx-4 overflow-hidden relative z-10"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.04]">
                <i className="ri-search-line text-white/30"></i>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyNav}
                  placeholder={t('search.placeholder', 'Search services, blogs, portfolio...')}
                  className="flex-1 bg-transparent text-white text-sm placeholder-white/20 outline-none"
                />
                <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white/50 cursor-pointer">
                  <i className="ri-close-line"></i>
                </button>
              </div>

              {results.length > 0 && (
                <div className="max-h-[400px] overflow-y-auto p-2">
                  {results.map((result, i) => (
                    <button
                      key={result.title}
                      onClick={() => handleSelect(result.path)}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                        i === selectedIndex ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className={`${result.icon} text-accent-400 text-sm`}></i>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{result.title}</p>
                        <p className="text-white/30 text-xs">{result.description}</p>
                        <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-white/[0.03] text-white/20 text-[10px]">{result.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {query && results.length === 0 && (
                <div className="p-8 text-center">
                  <i className="ri-search-line text-2xl text-white/10 mb-2 block"></i>
                  <p className="text-white/30 text-sm">{t('search.noResults', 'No results found')}</p>
                </div>
              )}

              {!query && (
                <div className="p-4 text-center">
                  <p className="text-white/15 text-xs">Type to search across services, industries, and resources</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
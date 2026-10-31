import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import FloatingCTA from '@/components/feature/FloatingCTA';
import { portfolioProjectsA } from '@/mocks/portfolio';
import { portfolioProjectsB } from '@/mocks/portfolioExtended';
import { portfolioProjectsC, newPortfolioCategories } from '@/mocks/portfolioNew';
import { usePageSEO } from '@/hooks/usePageSEO';

const allProjects = [...portfolioProjectsA, ...portfolioProjectsB, ...portfolioProjectsC];

const allCategories = [
  'All',
  'Corporate Website',
  'Business Website',
  'Healthcare',
  'Healthcare Technology',
  'Education',
  'E-Commerce',
  'Hotel Software',
  'Restaurant',
  'Art & Design',
  'Gaming',
  'Media & Entertainment',
  'Fitness & Wellness',
  'Manufacturing',
  'Industrial',
  'Real Estate',
  'Legal',
  'Security',
  'NGO',
  'Coaching',
];

const filterIcons: Record<string, string> = {
  'All': 'ri-apps-line',
  'Corporate Website': 'ri-building-4-line',
  'Business Website': 'ri-briefcase-4-line',
  'Healthcare': 'ri-heart-pulse-line',
  'Healthcare Technology': 'ri-microscope-line',
  'Education': 'ri-graduation-cap-line',
  'E-Commerce': 'ri-shopping-cart-2-line',
  'Hotel Software': 'ri-hotel-line',
  'Restaurant': 'ri-restaurant-line',
  'Art & Design': 'ri-palette-line',
  'Gaming': 'ri-gamepad-line',
  'Media & Entertainment': 'ri-film-line',
  'Fitness & Wellness': 'ri-heart-pulse-line',
  'Manufacturing': 'ri-settings-3-line',
  'Industrial': 'ri-tools-line',
  'Real Estate': 'ri-building-2-line',
  'Legal': 'ri-scales-line',
  'Security': 'ri-shield-check-line',
  'NGO': 'ri-heart-line',
  'Coaching': 'ri-user-heart-line',
};

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);

  usePageSEO({
    title: 'Portfolio | Digi India Solutions - 40+ Premium Projects Across 20 Industries',
    description: 'Browse Digi India Solutions portfolio of 40+ projects across corporate websites, mobile apps, ERP systems, e-commerce, healthcare software, art platforms, gaming experiences, and enterprise solutions delivered in Delhi, India.',
    keywords: 'software portfolio, IT company projects, website portfolio India, mobile app projects, ERP portfolio, custom software projects, Delhi IT company portfolio, healthcare software, e-commerce development',
    canonical: 'https://www.digiindiasolutions.com/portfolio',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filtered = useMemo(() => {
    let result = activeFilter === 'All' ? allProjects : allProjects.filter((p) => p.category === activeFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-950 overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[560px] flex items-center justify-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-50/70 via-background-50/30 to-background-50"></div>
          <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]"></div>
          <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="section-tag mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Our Portfolio
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                Work That <span className="text-gradient">Speaks</span>{' '}
                <span className="block">For Itself</span>
              </motion.h1>
              <motion.p
                className="text-foreground-700/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                40+ projects across 20+ industries — corporate websites, SaaS platforms, e-commerce stores, healthcare apps, gaming experiences, and enterprise solutions that deliver measurable business results.
              </motion.p>
            </motion.div>

            {/* Search */}
            <motion.div
              className="mt-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <div className="relative">
                <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-700/30 text-sm"></i>
                <input
                  type="text"
                  placeholder="Search projects, technologies, industries..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-background-100 border border-background-200/60 text-sm text-foreground-950 placeholder:text-foreground-700/30 focus:outline-none focus:border-primary-500/30 focus:ring-2 focus:ring-primary-500/10 transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-background-200/60 flex items-center justify-center cursor-pointer hover:bg-background-200 transition-colors"
                  >
                    <i className="ri-close-line text-foreground-700/40 text-[10px]"></i>
                  </button>
                )}
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { v: '40+', l: 'Projects' },
                { v: '20+', l: 'Industries' },
                { v: '98%', l: 'Client Satisfaction' },
                { v: '4.9', l: 'Avg Rating' },
              ].map((s, i) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">{s.v}</div>
                  <div className="text-foreground-700/30 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-4 pt-2 sticky top-[72px] z-30 bg-background-50/90 backdrop-blur-xl border-b border-background-200/50">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <motion.div
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                  className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-accent-500 text-background-50 shadow-[0_0_20px_rgba(var(--accent-500),0.2)]'
                      : 'bg-background-100 text-foreground-700/50 hover:bg-background-200/60 hover:text-foreground-700/80'
                  }`}
                >
                  <i className={`${filterIcons[cat] || 'ri-folder-line'} text-[11px]`}></i>
                  {cat}
                </button>
              ))}
            </motion.div>
            {searchQuery && (
              <div className="mt-2 text-xs text-foreground-700/40">
                <i className="ri-search-line mr-1"></i>
                Found {filtered.length} results for "<span className="font-medium text-foreground-700/60">{searchQuery}</span>"
              </div>
            )}
          </div>
        </section>

        {/* Project Grid with Glassmorphism */}
        <section className="py-10 md:py-16">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10" ref={gridRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + searchQuery}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {displayed.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(145deg, rgba(var(--background-100), 0.7) 0%, rgba(var(--background-50), 0.5) 50%, rgba(var(--background-200), 0.3) 100%)',
                      border: '1px solid rgba(var(--foreground-950), 0.06)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.45 }}
                    whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
                  >
                    {/* Glassmorphism hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--accent-500), 0.08), transparent 40%)`,
                      }}
                    ></div>

                    {/* 3D tilt effect - subtle shadow lift */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none"
                      style={{
                        boxShadow: '0 20px 60px -20px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)',
                      }}
                    ></div>

                    {/* Image */}
                    <div className="relative h-44 md:h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-400"></div>
                      <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                        <span className="px-2.5 py-1 rounded-full bg-background-50/85 backdrop-blur-md text-foreground-700/60 text-[10px] font-bold uppercase tracking-wider border border-foreground-950/6">
                          {project.category}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-background-50/60 backdrop-blur-md text-foreground-700/35 text-[10px] border border-foreground-950/4">
                          {project.duration}
                        </span>
                      </div>
                      {/* Industry badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 rounded-full bg-accent-500/15 backdrop-blur-md text-accent-500/80 text-[9px] font-medium border border-accent-500/10">
                          {project.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-grow relative z-10">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-heading font-semibold text-foreground-950 text-sm leading-snug group-hover:text-accent-500 transition-colors duration-300">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-foreground-700/35 text-[11px] leading-relaxed mb-3 line-clamp-2 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="px-1.5 py-0.5 rounded bg-background-200/50 text-[9px] text-foreground-700/40 font-medium">
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded bg-background-200/30 text-[9px] text-foreground-700/25">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Business results highlight */}
                      <div className="mb-4">
                        <span className="text-accent-500/70 text-[9px] uppercase tracking-wider font-bold">Results</span>
                        <p className="text-foreground-700/45 text-[10px] leading-relaxed mt-0.5 line-clamp-1">
                          {project.businessResults[0]}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-foreground-950/5">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-background-200/40 hover:bg-background-200/70 text-foreground-700/50 hover:text-foreground-700/80 text-[11px] font-medium transition-all duration-300 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="ri-external-link-line text-[10px]"></i>
                          Live Site
                        </a>
                        <button
                          onClick={() => navigate(`/portfolio/${project.slug}`)}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-accent-500/10 hover:bg-accent-500/20 text-accent-500 text-[11px] font-medium transition-all duration-300 cursor-pointer"
                        >
                          <i className="ri-article-line text-[10px]"></i>
                          Case Study
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Show More */}
            {filtered.length > 12 && (
              <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="glass-btn cursor-pointer"
                >
                  {showAll ? 'Show Less' : `View All ${filtered.length} Projects`}
                  <i className={showAll ? 'ri-arrow-up-line ml-2' : 'ri-arrow-down-line ml-2'}></i>
                </button>
              </motion.div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-background-200/40 flex items-center justify-center mb-4">
                  <i className="ri-folder-open-line text-2xl text-foreground-700/20"></i>
                </div>
                <p className="text-foreground-700/30 text-sm">No projects found matching your search.</p>
                <button onClick={() => { setSearchQuery(''); setActiveFilter('All'); }} className="mt-3 text-xs text-accent-500 hover:text-accent-600 cursor-pointer transition-colors">
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-16 md:py-24 bg-background-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(var(--background-100), 0.8), rgba(var(--background-50), 0.6))',
                border: '1px solid rgba(var(--foreground-950), 0.06)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-primary-500/8"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
              <div className="relative z-10">
                <motion.div className="section-tag mx-auto mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  Let's Build Yours
                </motion.div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950 mb-3">
                  Ready to Build Your Next{' '}
                  <span className="text-gradient">Digital Product?</span>
                </h2>
                <p className="text-foreground-700/40 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Let's transform your business with world-class technology. Your project could be the next one in our portfolio.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Free Consultation
                    <i className="ri-arrow-right-line ml-2"></i>
                  </motion.a>
                  <a
                    href="/our-journey"
                    onClick={(e) => { e.preventDefault(); navigate('/our-journey'); }}
                    className="glass-btn cursor-pointer"
                  >
                    <i className="ri-road-map-line mr-2"></i>
                    Our Journey
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
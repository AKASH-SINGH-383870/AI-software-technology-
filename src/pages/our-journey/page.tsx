import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import FloatingCTA from '@/components/feature/FloatingCTA';
import { usePageSEO } from '@/hooks/usePageSEO';

interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

const milestones: TimelineMilestone[] = [
  {
    year: '2022',
    title: 'The Beginning',
    subtitle: 'Founded with a Vision',
    description: 'Digi India Solutions was founded with a clear vision: To empower businesses through innovative technology solutions, custom software development, and digital transformation. Starting with a small but passionate team, our mission was to build high-quality websites and software that help businesses grow faster.',
    highlights: [
      'Company founded in Rohini, New Delhi',
      'Started with website development services',
      'First 5 clients onboarded',
      'Built the foundation for scalable tech delivery',
    ],
    icon: 'ri-rocket-line',
    color: 'from-amber-500 to-orange-500',
  },
  {
    year: '2023',
    title: 'Building Strong Foundations',
    subtitle: 'Expanding Service Capabilities',
    description: 'Expanded our services beyond website development. Started delivering Custom Software Development, CRM Solutions, ERP Systems, Mobile App Development, UI/UX Design, and Digital Marketing. Successfully delivered projects across multiple industries including Healthcare, Education, Manufacturing, Hospitality, and Retail.',
    highlights: [
      'Launched Custom Software Development division',
      'Added CRM & ERP solutions to service portfolio',
      'Expanded into Mobile App Development',
      'Delivered 15+ projects across 8 industries',
      'Team grew to 10+ members',
    ],
    icon: 'ri-building-2-line',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2024',
    title: 'Growth & Innovation',
    subtitle: 'Scaling Across India',
    description: 'Expanded our client portfolio across India. Introduced AI Automation Solutions, Business Process Automation, Cloud Solutions, Enterprise Software, and Advanced Web Applications. Focused on building scalable, secure, and high-performance digital solutions for businesses of all sizes.',
    highlights: [
      'Introduced AI Automation & BPA services',
      'Launched Cloud Solutions practice',
      'Expanded client base across 10+ Indian cities',
      'Delivered first enterprise-grade software project',
      'Team grew to 20+ technology professionals',
    ],
    icon: 'ri-line-chart-line',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2025',
    title: 'AI & Enterprise Transformation',
    subtitle: 'Intelligent Automation Era',
    description: 'Strengthened our expertise in Artificial Intelligence and Business Automation. Launched advanced services including AI Chatbots, AI-Powered CRM, AI Workflow Automation, Smart ERP Solutions, Enterprise Dashboards, and Real-Time Analytics. Helped businesses automate operations and improve productivity through intelligent software.',
    highlights: [
      'Launched AI Chatbots & AI-Powered CRM',
      'Developed AI Workflow Automation solutions',
      'Built Smart ERP with real-time analytics',
      'Enterprise dashboard deployments across industries',
      'Team expanded to 35+ AI & software engineers',
    ],
    icon: 'ri-brain-line',
    color: 'from-violet-500 to-purple-500',
  },
  {
    year: '2026',
    title: 'Scaling Globally',
    subtitle: 'Enterprise-Grade Digital Products',
    description: 'Focused on building enterprise-grade digital products for businesses worldwide. Expanded capabilities in AI Solutions, Enterprise Software Development, SaaS Platforms, Cloud Infrastructure, Mobile Applications, and Digital Transformation Consulting. Established as a trusted technology partner delivering modern, scalable, and future-ready software solutions.',
    highlights: [
      'Enterprise SaaS platform development',
      'Global cloud infrastructure deployments',
      'Cross-industry digital transformation projects',
      '40+ projects delivered across 20+ industries',
      'Growing international client partnerships',
    ],
    icon: 'ri-global-line',
    color: 'from-rose-500 to-pink-500',
  },
  {
    year: 'FUTURE',
    title: 'The Journey Continues',
    subtitle: 'Building Tomorrow, Today',
    description: 'Our journey has only just begun. Our vision is to become one of the world\'s leading technology companies, helping businesses across the globe transform through Artificial Intelligence, Cloud Computing, Enterprise Software, and Digital Innovation. We continue to invest in cutting-edge technologies, world-class talent, and customer success to build the future of digital transformation.',
    highlights: [
      'AI-first enterprise solutions',
      'Global technology partnerships',
      'Next-gen SaaS platform innovations',
      'Expanding to new international markets',
      'Continuous investment in R&D and talent',
    ],
    icon: 'ri-star-line',
    color: 'from-amber-400 to-yellow-400',
  },
];

interface Stat {
  value: number;
  label: string;
  suffix: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 40, label: 'Projects Delivered', suffix: '+', icon: 'ri-folder-check-line' },
  { value: 30, label: 'Happy Clients', suffix: '+', icon: 'ri-user-heart-line' },
  { value: 20, label: 'Industries Served', suffix: '+', icon: 'ri-building-4-line' },
  { value: 5, label: 'Countries Reached', suffix: '', icon: 'ri-global-line' },
  { value: 35, label: 'Team Members', suffix: '+', icon: 'ri-team-line' },
  { value: 98, label: 'Client Satisfaction', suffix: '%', icon: 'ri-emotion-happy-line' },
];

export default function OurJourney() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  usePageSEO({
    title: 'Our Journey | Digi India Solutions - From 2022 to Global Technology Partner',
    description: 'Explore the inspiring journey of Digi India Solutions from a small team in 2022 to a global technology partner. See our milestones in AI, ERP, CRM, and digital transformation.',
    keywords: 'Digi India Solutions journey, tech company growth story, IT company timeline, software company history, Delhi tech company journey',
    canonical: 'https://www.digiindiasolutions.com/our-journey',
  });

  // Animate stats when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStatsVisible) return;
    stats.forEach((stat, i) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setAnimatedStats((prev) => {
            const next = [...prev];
            next[i] = stat.value;
            return next;
          });
          clearInterval(interval);
        } else {
          setAnimatedStats((prev) => {
            const next = [...prev];
            next[i] = Math.floor(current);
            return next;
          });
        }
      }, duration / steps);
      return () => clearInterval(interval);
    });
  }, [isStatsVisible]);

  // Scroll-based timeline progress
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const lineProgress = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-950 overflow-x-hidden">
      <Navbar />

      <main ref={containerRef}>
        {/* Hero */}
        <section className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center overflow-hidden pt-14">
          <div className="absolute inset-0 bg-gradient-to-br from-background-100 via-background-50 to-background-100"></div>
          <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px]"></div>
          <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(var(--foreground-950), 0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="section-tag mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Our Journey
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                From a <span className="text-gradient">Small Team</span>{' '}
                <span className="block">to a Global Technology Partner</span>
              </motion.h1>
              <motion.p
                className="text-foreground-700/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                Every great company starts with a vision. Here's ours — a story of passion, innovation, and the relentless pursuit of digital excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-16 md:py-24" ref={timelineRef}>
          {/* Background timeline line - desktop horizontal, mobile vertical */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block relative">
              {/* Progress line */}
              <div className="absolute top-[120px] left-0 right-0 h-0.5 bg-background-200/60 rounded-full"></div>
              <motion.div
                className="absolute top-[120px] left-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full"
                style={{ width: lineProgress }}
              ></motion.div>

              {/* Milestones */}
              <div className="flex justify-between items-start pt-20">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="relative flex flex-col items-center cursor-pointer group"
                    style={{ width: `${100 / milestones.length}%` }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Dot */}
                    <div className={`absolute -top-[138px] w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                      activeIndex === i
                        ? `bg-gradient-to-br ${m.color} border-transparent scale-150 shadow-[0_0_20px_rgba(var(--primary-500),0.3)]`
                        : 'bg-background-100 border-background-200/60 group-hover:border-accent-500/40 group-hover:scale-125'
                    }`}></div>

                    {/* Year */}
                    <div className={`font-heading text-xl font-bold mb-2 transition-all duration-300 ${
                      activeIndex === i ? 'text-foreground-950' : 'text-foreground-700/30 group-hover:text-foreground-700/60'
                    }`}>
                      {m.year}
                    </div>

                    {/* Title */}
                    <div className={`text-xs font-semibold uppercase tracking-wider text-center transition-all duration-300 max-w-[120px] leading-snug ${
                      activeIndex === i ? 'text-foreground-700/60' : 'text-foreground-700/25 group-hover:text-foreground-700/40'
                    }`}>
                      {m.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden relative pl-10">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-background-200/60 rounded-full"></div>
              <motion.div
                className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full"
                style={{ height: lineProgress }}
              ></motion.div>

              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className="relative cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Mobile dot */}
                    <div className={`absolute -left-[38px] top-1 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10 ${
                      activeIndex === i
                        ? `bg-gradient-to-br ${m.color} border-transparent scale-150 shadow-[0_0_15px_rgba(var(--primary-500),0.3)]`
                        : 'bg-background-100 border-background-200/60'
                    }`}></div>

                    <div className={`font-heading text-xl font-bold mb-1 ${activeIndex === i ? 'text-foreground-950' : 'text-foreground-700/35'}`}>
                      {m.year}
                    </div>
                    <div className={`text-xs font-semibold uppercase tracking-wider ${activeIndex === i ? 'text-foreground-700/60' : 'text-foreground-700/30'}`}>
                      {m.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Active Milestone Detail */}
        <section className="py-10 md:py-16 bg-background-100">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="rounded-2xl p-6 md:p-10 lg:p-12 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(var(--background-100), 0.9), rgba(var(--background-50), 0.7))',
                  border: '1px solid rgba(var(--foreground-950), 0.05)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                {/* Background glow */}
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${milestones[activeIndex].color} opacity-[0.04] blur-[80px]`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${milestones[activeIndex].color} flex items-center justify-center shadow-[0_8px_30px_rgba(var(--primary-500),0.15)]`}>
                      <i className={`${milestones[activeIndex].icon} text-white text-xl md:text-2xl`}></i>
                    </div>
                    <div>
                      <div className="font-heading text-3xl md:text-5xl font-bold text-foreground-950">
                        {milestones[activeIndex].year}
                      </div>
                      <div className="text-foreground-700/50 text-sm md:text-base mt-1">
                        {milestones[activeIndex].subtitle}
                      </div>
                    </div>
                  </div>

                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground-950 mb-4">
                    {milestones[activeIndex].title}
                  </h2>

                  <p className="text-foreground-700/55 text-sm md:text-base leading-[1.8] mb-8 max-w-3xl">
                    {milestones[activeIndex].description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {milestones[activeIndex].highlights.map((h, j) => (
                      <motion.div
                        key={j}
                        className="flex items-center gap-3 p-3 rounded-xl bg-background-100/60 border border-foreground-950/4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.08, duration: 0.3 }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestones[activeIndex].color} flex items-center justify-center flex-shrink-0`}>
                          <i className="ri-check-line text-white text-[10px]"></i>
                        </div>
                        <span className="text-foreground-700/55 text-sm">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Year navigation pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {milestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-pointer px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    activeIndex === i
                      ? `bg-gradient-to-r ${m.color} text-white shadow-[0_4px_15px_rgba(var(--primary-500),0.2)]`
                      : 'bg-background-100 text-foreground-700/35 hover:text-foreground-700/60 hover:bg-background-200/50'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Statistics */}
        <section className="py-16 md:py-24" ref={statsRef}>
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto mb-4">By The Numbers</div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950">
                Our Growth in <span className="text-gradient">Numbers</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-5 rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(var(--background-100), 0.7), rgba(var(--background-50), 0.5))',
                    border: '1px solid rgba(var(--foreground-950), 0.04)',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-background-200/50 flex items-center justify-center mb-3">
                    <i className={`${stat.icon} text-accent-500 text-lg`}></i>
                  </div>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 mb-1">
                    {animatedStats[i]}{stat.suffix}
                  </div>
                  <div className="text-foreground-700/35 text-[11px] uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-12 md:py-16 bg-background-100">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-foreground-950/4 text-7xl md:text-9xl font-serif absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                &ldquo;
              </div>
              <p className="text-foreground-700/50 text-lg md:text-2xl leading-relaxed italic max-w-2xl mx-auto relative z-10 pt-6">
                Every successful partnership starts with a conversation. From a single client to a growing family of businesses across industries — our journey is built on trust, innovation, and the belief that technology can transform any business.
              </p>
              <div className="mt-6 text-foreground-700/30 text-sm font-semibold">
                — Digi India Solutions Team
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <motion.div
              className="rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(var(--primary-500), 0.08), rgba(var(--accent-500), 0.06), rgba(var(--primary-500), 0.04))',
                border: '1px solid rgba(var(--primary-500), 0.1)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
              <div className="relative z-10">
                <motion.div className="section-tag mx-auto mb-5">Join Our Journey</motion.div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground-950 mb-4">
                  Let's Build Something{' '}
                  <span className="text-gradient">Extraordinary</span> Together
                </h2>
                <p className="text-foreground-700/40 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Your story could be the next chapter in ours. Let's create digital solutions that drive real business growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Start Your Project
                    <i className="ri-arrow-right-line"></i>
                  </motion.a>
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background-200/60 text-foreground-700/60 font-semibold text-sm hover:bg-background-200 hover:text-foreground-700/80 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="ri-calendar-line"></i>
                    Book Free Consultation
                  </motion.a>
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground-950/8 text-foreground-700/50 font-semibold text-sm hover:bg-background-200/30 hover:text-foreground-700/70 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <i className="ri-mail-line"></i>
                    Contact Our Team
                  </motion.a>
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
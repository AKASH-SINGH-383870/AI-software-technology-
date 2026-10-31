import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import FloatingCTA from '@/components/feature/FloatingCTA';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { portfolioProjectsA } from '@/mocks/portfolio';
import { portfolioProjectsB } from '@/mocks/portfolioExtended';
import { portfolioProjectsC } from '@/mocks/portfolioNew';
import type { PortfolioProject } from '@/mocks/portfolio';

const allProjects: PortfolioProject[] = [...portfolioProjectsA, ...portfolioProjectsB, ...portfolioProjectsC];

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? allProjects.find((p) => p.slug === slug) : undefined;
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'results'>('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveGallery(0);
    setActiveTab('overview');
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-500 text-white">
        <Navbar />
        <main className="pt-24">
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
                <i className="ri-file-search-line text-3xl text-white/30"></i>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Project Not Found</h2>
              <p className="text-white/30 text-sm mb-6">The case study you are looking for does not exist.</p>
              <button onClick={() => navigate('/portfolio')} className="glass-btn cursor-pointer">
                View All Projects
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : null;

  const allGalleryImages = [project.image, project.mobileImage, project.dashboardImage, ...project.gallery];

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: `https://www.digiindiasolutions.com/portfolio/${project.slug}`,
    image: project.image,
    creator: {
      '@type': 'Organization',
      name: 'Digi India Solutions',
      url: 'https://www.digiindiasolutions.com',
    },
    about: { '@type': 'Thing', name: project.industry },
    keywords: project.technologies.join(', '),
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}></script>
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Breadcrumb customLabel={project.name} customPath={`/portfolio/${project.slug}`} />
        </div>

        {/* Hero */}
        <section className="relative h-[300px] md:h-[450px] lg:h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeGallery}
              src={allGalleryImages[activeGallery]}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-dark-500/30"></div>

          {/* Gallery dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {allGalleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveGallery(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeGallery ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              ></button>
            ))}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-6 md:pb-10">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md text-white/70 text-[10px] font-bold uppercase tracking-wider border border-white/[0.06]">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md text-white/50 text-[10px] font-medium uppercase tracking-wider border border-white/[0.04]">
                  {project.industry}
                </span>
                <span className="px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md text-white/50 text-[10px] font-medium border border-white/[0.04]">
                  {project.duration}
                </span>
              </div>
              <motion.h1
                className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.name}
              </motion.h1>
              <motion.p
                className="text-white/40 text-sm md:text-base max-w-2xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Quick Actions Bar */}
        <section className="border-b border-white/[0.06] bg-dark-600 sticky top-[72px] z-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 py-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary-500/10 flex items-center justify-center">
                    <i className="ri-building-4-line text-primary-400 text-[10px]"></i>
                  </div>
                  <span className="text-white/40 text-xs">{project.client}</span>
                </div>
                <div className="w-px h-5 bg-white/[0.06]"></div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-accent-500/10 flex items-center justify-center">
                    <i className="ri-time-line text-accent-400 text-[10px]"></i>
                  </div>
                  <span className="text-white/40 text-xs">{project.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-500/15 hover:bg-accent-500/25 text-accent-400 text-xs font-semibold transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-external-link-line"></i>
                  Visit Live Site
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="border-b border-white/[0.04] bg-dark-500/60 backdrop-blur-sm sticky top-[120px] z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-none">
              {(['overview', 'process', 'results'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-3 pt-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap relative ${
                    activeTab === tab ? 'text-white' : 'text-white/30 hover:text-white/50'
                  }`}
                >
                  {tab === 'overview' ? 'Overview' : tab === 'process' ? 'Process & Tech' : 'Results'}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                      layoutId="tab-indicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    ></motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-16">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <OverviewTab key="overview" project={project} />
              )}
              {activeTab === 'process' && (
                <ProcessTab key="process" project={project} />
              )}
              {activeTab === 'results' && (
                <ResultsTab key="results" project={project} />
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-10 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto mb-3">Tech Stack</div>
              <h3 className="font-heading font-bold text-white text-xl md:text-2xl">Technologies Powering This Project</h3>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm font-medium hover:bg-white/[0.06] hover:text-white/80 hover:border-white/[0.1] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto mb-3">Project Gallery</div>
              <h3 className="font-heading font-bold text-white text-xl md:text-2xl">A Closer Look</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {allGalleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark-500/0 group-hover:bg-dark-500/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 md:py-16 bg-dark-600">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-6 md:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-4 right-6 text-white/[0.02]">
                <i className="ri-double-quotes-r text-6xl"></i>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-accent-400/80 text-sm"></i>
                  ))}
                </div>
                <p className="text-white/55 text-base md:text-lg leading-relaxed mb-6 italic">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/25 to-accent-500/20 flex items-center justify-center text-white font-bold text-xs border border-white/[0.06]">
                    {project.testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold text-sm">{project.testimonial.name}</p>
                    <p className="text-white/25 text-xs">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next / Prev Navigation */}
        <section className="py-10 md:py-14 bg-dark-500">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between gap-4">
              {prevProject ? (
                <button
                  onClick={() => { navigate(`/portfolio/${prevProject.slug}`); window.scrollTo(0, 0); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-pointer group"
                >
                  <i className="ri-arrow-left-line text-white/40 group-hover:text-white/70 transition-colors"></i>
                  <div className="text-left">
                    <div className="text-white/20 text-[9px] uppercase tracking-wider font-bold">Previous</div>
                    <div className="text-white/50 text-xs group-hover:text-white/70 transition-colors max-w-[160px] truncate">{prevProject.name}</div>
                  </div>
                </button>
              ) : <div></div>}

              {nextProject && (
                <button
                  onClick={() => { navigate(`/portfolio/${nextProject.slug}`); window.scrollTo(0, 0); }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-right">
                    <div className="text-white/20 text-[9px] uppercase tracking-wider font-bold">Next</div>
                    <div className="text-white/50 text-xs group-hover:text-white/70 transition-colors max-w-[160px] truncate">{nextProject.name}</div>
                  </div>
                  <i className="ri-arrow-right-line text-white/40 group-hover:text-white/70 transition-colors"></i>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-primary-500/8"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
              <div className="relative z-10">
                <motion.div className="section-tag mx-auto mb-5">Start Your Project</motion.div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Ready to Build Your{' '}
                  <span className="text-gradient">Success Story?</span>
                </h2>
                <p className="text-white/35 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Let's discuss how we can create a similar impact for your business. Your project could be our next featured case study.
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
                    href="https://wa.me/918130543714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn cursor-pointer"
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    Call Now
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

/* ======== TAB COMPONENTS ======== */

function OverviewTab({ project }: { project: PortfolioProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Client Overview */}
      <SectionBlock
        icon="ri-building-4-line"
        iconColor="text-primary-400"
        iconBg="bg-primary-500/10"
        title="Client Overview"
      >
        <p className="text-white/40 text-sm leading-[1.8]">
          {project.client} — {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.services.map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-md bg-primary-500/5 border border-primary-500/10 text-primary-400/70 text-[11px] font-medium">
              {s}
            </span>
          ))}
        </div>
      </SectionBlock>

      {/* Challenge */}
      <SectionBlock
        icon="ri-alert-line"
        iconColor="text-red-400"
        iconBg="bg-red-500/10"
        title="The Challenge"
        delay={0.1}
      >
        <p className="text-white/40 text-sm leading-[1.8]">{project.challenge}</p>
      </SectionBlock>

      {/* Goals */}
      <SectionBlock
        icon="ri-focus-3-line"
        iconColor="text-accent-400"
        iconBg="bg-accent-500/10"
        title="Project Goals"
        delay={0.15}
      >
        <ul className="space-y-2.5">
          {project.goals.map((g, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
              <div className="w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-check-line text-accent-400 text-[10px]"></i>
              </div>
              {g}
            </li>
          ))}
        </ul>
      </SectionBlock>

      {/* Features Delivered */}
      <SectionBlock
        icon="ri-star-line"
        iconColor="text-yellow-400"
        iconBg="bg-yellow-500/10"
        title="Features Delivered"
        delay={0.2}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {project.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03]">
              <div className="w-4 h-4 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-400/70"></div>
              </div>
              <span className="text-white/45 text-xs leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </SectionBlock>
    </motion.div>
  );
}

function ProcessTab({ project }: { project: PortfolioProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Research */}
      <SectionBlock
        icon="ri-search-eye-line"
        iconColor="text-primary-400"
        iconBg="bg-primary-500/10"
        title="Research & Discovery"
      >
        <p className="text-white/40 text-sm leading-[1.8]">{project.research}</p>
      </SectionBlock>

      {/* UI/UX Process */}
      <SectionBlock
        icon="ri-pencil-ruler-2-line"
        iconColor="text-accent-400"
        iconBg="bg-accent-500/10"
        title="UI/UX Process"
        delay={0.1}
      >
        <p className="text-white/40 text-sm leading-[1.8]">{project.uiuxProcess}</p>
      </SectionBlock>

      {/* Design System */}
      <SectionBlock
        icon="ri-palette-line"
        iconColor="text-purple-400"
        iconBg="bg-purple-500/10"
        title="Design System"
        delay={0.15}
      >
        <p className="text-white/40 text-sm leading-[1.8]">{project.designSystem}</p>
      </SectionBlock>

      {/* Development Process */}
      <SectionBlock
        icon="ri-code-s-slash-line"
        iconColor="text-green-400"
        iconBg="bg-green-500/10"
        title="Development Process"
        delay={0.2}
      >
        <p className="text-white/40 text-sm leading-[1.8]">{project.devProcess}</p>
      </SectionBlock>
    </motion.div>
  );
}

function ResultsTab({ project }: { project: PortfolioProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Business Results */}
      <SectionBlock
        icon="ri-bar-chart-box-line"
        iconColor="text-green-400"
        iconBg="bg-green-500/10"
        title="Business Results"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.businessResults.map((r, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-xl p-5 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <div className="text-xl md:text-2xl font-heading font-bold text-accent-400 mb-1">
                {r.split(' ').slice(0, 2).join(' ')}
                {r.split(' ').length > 2 && <span className="block text-white/30 text-xs font-normal mt-0.5">{r.split(' ').slice(2).join(' ')}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      {/* Performance Improvements */}
      <SectionBlock
        icon="ri-speed-up-line"
        iconColor="text-accent-400"
        iconBg="bg-accent-500/10"
        title="Performance Improvements"
        delay={0.1}
      >
        <ul className="space-y-2">
          {project.performanceImprovements.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
              <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-check-line text-green-400 text-[10px]"></i>
              </div>
              {p}
            </li>
          ))}
        </ul>
      </SectionBlock>

      {/* SEO Improvements */}
      <SectionBlock
        icon="ri-search-line"
        iconColor="text-primary-400"
        iconBg="bg-primary-500/10"
        title="SEO Improvements"
        delay={0.15}
      >
        <ul className="space-y-2">
          {project.seoImprovements.map((s, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
              <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-check-line text-primary-400 text-[10px]"></i>
              </div>
              {s}
            </li>
          ))}
        </ul>
      </SectionBlock>
    </motion.div>
  );
}

/* ======== SHARED SECTION BLOCK ======== */

function SectionBlock({
  icon,
  iconColor,
  iconBg,
  title,
  children,
  delay = 0,
}: {
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
          <i className={`${icon} ${iconColor} text-sm`}></i>
        </div>
        <h3 className="font-heading font-semibold text-white text-lg">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}
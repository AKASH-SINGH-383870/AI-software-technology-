import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { blogPosts } from '@/mocks/blog';
import { caseStudies } from '@/mocks/caseStudies';
import { portfolioProjectsA } from '@/mocks/portfolio';
import { portfolioProjectsB } from '@/mocks/portfolioExtended';

const allPortfolio = [...portfolioProjectsA, ...portfolioProjectsB];

const tabs = [
  { key: 'all', label: 'All Resources', icon: 'ri-stack-line' },
  { key: 'blogs', label: 'Blogs', icon: 'ri-article-line' },
  { key: 'case-studies', label: 'Case Studies', icon: 'ri-file-chart-line' },
  { key: 'portfolio', label: 'Portfolio', icon: 'ri-briefcase-line' },
  { key: 'guides', label: 'Guides & Whitepapers', icon: 'ri-book-open-line' },
  { key: 'docs', label: 'Documentation', icon: 'ri-file-code-line' },
];

const guides = [
  { title: 'Enterprise Digital Transformation Playbook', desc: 'A comprehensive 40-page guide covering strategy, technology selection, change management, and ROI measurement for enterprise digital transformation.', icon: 'ri-booklet-line', pages: '40 pages', format: 'PDF' },
  { title: 'Choosing the Right Tech Stack for Your SaaS Product', desc: 'Decision framework comparing 12 technology stacks across performance, scalability, hiring, and cost dimensions. Includes real-world case studies.', icon: 'ri-stack-line', pages: '28 pages', format: 'PDF' },
  { title: 'The Complete Guide to HIPAA-Compliant Software Development', desc: 'Everything healthcare startups need to know about building HIPAA-compliant applications — from architecture to audit preparation.', icon: 'ri-shield-check-line', pages: '35 pages', format: 'PDF' },
  { title: 'AI Implementation Roadmap for Mid-Market Companies', desc: 'Step-by-step guide to identifying AI opportunities, building proof-of-concepts, and scaling AI across your organization.', icon: 'ri-brain-line', pages: '22 pages', format: 'PDF' },
  { title: 'Cloud Migration Strategy Handbook', desc: 'AWS, Azure, and GCP comparison with migration patterns, cost optimization strategies, and real migration timelines from 50+ projects.', icon: 'ri-cloud-line', pages: '45 pages', format: 'PDF' },
  { title: 'Mobile App Development Cost Guide 2025', desc: 'Detailed cost breakdowns for iOS, Android, and cross-platform apps across simple, medium, and complex categories with regional rate comparisons.', icon: 'ri-smartphone-line', pages: '18 pages', format: 'PDF' },
];

const docs = [
  { title: 'API Documentation', desc: 'RESTful API reference for all our platform services with authentication, endpoints, request/response examples, and rate limits.', icon: 'ri-code-box-line' },
  { title: 'SDK Quick Start Guides', desc: 'Get started with our SDKs for React, Node.js, Python, Flutter, and Swift in under 10 minutes with working examples.', icon: 'ri-terminal-box-line' },
  { title: 'Architecture Decision Records', desc: 'Transparent documentation of every major architectural decision — why we chose it, alternatives considered, and trade-offs.', icon: 'ri-git-branch-line' },
  { title: 'Security & Compliance Docs', desc: 'SOC 2 reports, penetration test summaries, data processing agreements, and security whitepapers for enterprise procurement.', icon: 'ri-lock-line' },
  { title: 'Deployment & DevOps Guides', desc: 'CI/CD pipeline setup, Docker configuration, Kubernetes manifests, and infrastructure-as-code templates for production deployments.', icon: 'ri-server-line' },
  { title: 'Integration Playbooks', desc: 'Step-by-step guides for integrating with Salesforce, SAP, Oracle, Microsoft Dynamics, Shopify, and 50+ third-party platforms.', icon: 'ri-plug-line' },
];

export default function KnowledgeCenter() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const renderBlogs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {blogPosts.slice(0, 6).map((post, i) => (
        <motion.div
          key={post.slug}
          className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ y: -4 }}
          onClick={() => navigate(`/blogs/${post.slug}`)}
        >
          <div className="relative h-40 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-dark-500/80 backdrop-blur-sm text-accent-400 text-[10px] font-medium">{post.category}</span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 text-white/20 text-[10px] mb-2">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/15"></span>
              <span>{post.readingTime}</span>
            </div>
            <h4 className="font-heading font-semibold text-white text-sm mb-2 line-clamp-2 group-hover:text-accent-400 transition-colors">{post.title}</h4>
            <p className="text-white/30 text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent-500/15 flex items-center justify-center text-[10px] font-bold text-accent-400">{post.author.avatar}</div>
              <span className="text-white/25 text-[10px]">{post.author.name}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCaseStudies = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {caseStudies.slice(0, 4).map((cs, i) => (
        <motion.div
          key={cs.slug}
          className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -4 }}
          onClick={() => navigate(`/case-studies/${cs.slug}`)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr]">
            <img src={cs.image} alt={cs.title} className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="p-5 flex flex-col justify-center">
              <span className="text-accent-400 text-[10px] font-medium mb-1">{cs.industry}</span>
              <h4 className="font-heading font-semibold text-white text-xs mb-2 line-clamp-2">{cs.title}</h4>
              <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2 mb-3">{cs.challenge}</p>
              <div className="flex items-center gap-3 text-white/20 text-[10px]">
                <span>{cs.duration}</span>
                <span className="w-1 h-1 rounded-full bg-white/15"></span>
                <span>{cs.team}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderPortfolio = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {allPortfolio.slice(0, 6).map((proj, i) => (
        <motion.div
          key={proj.id}
          className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ y: -4 }}
        >
          <div className="relative h-40 overflow-hidden">
            <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-dark-500/80 backdrop-blur-sm text-accent-400 text-[10px] font-medium">{proj.category}</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-heading font-semibold text-white text-sm mb-1">{proj.name}</h4>
            <p className="text-white/30 text-xs leading-relaxed line-clamp-2 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {proj.technologies.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-white/25 text-[9px]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderGuides = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {guides.map((guide, i) => (
        <motion.div
          key={guide.title}
          className="glass-card-hover rounded-2xl p-5 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ y: -4 }}
        >
          <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
            <i className={`${guide.icon} text-accent-400 text-lg`}></i>
          </div>
          <h4 className="font-heading font-semibold text-white text-sm mb-2 group-hover:text-accent-400 transition-colors">{guide.title}</h4>
          <p className="text-white/30 text-xs leading-relaxed line-clamp-2 mb-3">{guide.desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-white/20 text-[10px]">{guide.pages} • {guide.format}</span>
            <span className="text-accent-400 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Download →</span>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderDocs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {docs.map((doc, i) => (
        <motion.div
          key={doc.title}
          className="glass-card-hover rounded-2xl p-5 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ y: -4 }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-3">
            <i className={`${doc.icon} text-white/40 text-lg`}></i>
          </div>
          <h4 className="font-heading font-semibold text-white text-sm mb-2 group-hover:text-accent-400 transition-colors">{doc.title}</h4>
          <p className="text-white/30 text-xs leading-relaxed">{doc.desc}</p>
        </motion.div>
      ))}
    </div>
  );

  const renderAll = () => (
    <div className="space-y-16">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <i className="ri-article-line text-accent-400"></i> Latest Blogs
          </h3>
          <button onClick={() => navigate('/blogs')} className="text-accent-400 text-xs font-medium hover:underline cursor-pointer">View All →</button>
        </div>
        {renderBlogs()}
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <i className="ri-file-chart-line text-accent-400"></i> Case Studies
          </h3>
          <button onClick={() => navigate('/case-studies')} className="text-accent-400 text-xs font-medium hover:underline cursor-pointer">View All →</button>
        </div>
        {renderCaseStudies()}
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <i className="ri-briefcase-line text-accent-400"></i> Portfolio
          </h3>
          <button onClick={() => navigate('/portfolio')} className="text-accent-400 text-xs font-medium hover:underline cursor-pointer">View All →</button>
        </div>
        {renderPortfolio()}
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <i className="ri-book-open-line text-accent-400"></i> Guides & Whitepapers
          </h3>
        </div>
        {renderGuides()}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'blogs': return renderBlogs();
      case 'case-studies': return renderCaseStudies();
      case 'portfolio': return renderPortfolio();
      case 'guides': return renderGuides();
      case 'docs': return renderDocs();
      default: return renderAll();
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[300px] md:min-h-[380px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="section-tag mb-5 flex items-center gap-2">
                <i className="ri-book-read-line"></i>
                Knowledge Center
              </div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Everything You Need to <span className="text-gradient">Build Smarter</span>
              </h1>
              <p className="text-white/40 text-base md:text-lg max-w-xl">
                Blogs, case studies, portfolio, whitepapers, guides, and documentation — all in one place. Explore insights from 500+ enterprise projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-dark-600 border-y border-white/[0.03]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { value: '25+', label: 'Blog Articles' },
                { value: '6', label: 'Case Studies' },
                { value: '28', label: 'Portfolio Projects' },
                { value: '6', label: 'Whitepapers' },
                { value: '6', label: 'Doc Sections' },
              ].map((s, i) => (
                <motion.div key={s.label} className="text-center"
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">{s.value}</p>
                  <p className="text-white/25 text-[10px]">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === tab.key
                      ? 'bg-accent-500/10 border border-accent-500/20 text-accent-400'
                      : 'bg-white/[0.02] border border-white/[0.04] text-white/40 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>

            {renderContent()}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Want a Custom Whitepaper?</h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">Our research team creates custom whitepapers and ROI analyses for your specific industry and use case — free for qualified enterprises.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Request Custom Research
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
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
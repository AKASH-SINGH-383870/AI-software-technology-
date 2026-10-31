import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { industries } from '@/mocks/industries';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function Industries() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);

  usePageSEO({
    title: 'Industries We Serve | Digi India Solutions - Healthcare, Finance, Retail, Manufacturing',
    description: 'Digi India Solutions delivers tailored IT solutions across Healthcare, Finance, Retail, Manufacturing, Education, Hospitality, Construction, and Real Estate. Industry-specific software development in Delhi, India.',
    keywords: 'industry solutions, healthcare software, finance IT, retail technology, manufacturing ERP, education technology, hospitality software, construction management, real estate technology',
    canonical: 'https://www.digiindiasolutions.com/industries',
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[380px] md:min-h-[480px] flex items-center justify-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 via-dark-500/40 to-dark-500"></div>
          <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="section-tag mx-auto mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Industries
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Solutions for Every <span className="text-gradient">Industry</span>
              </motion.h1>
              <motion.p
                className="text-white/40 text-base md:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Deep industry expertise combined with technical excellence. We deliver tailored solutions that solve real business problems across every vertical.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="space-y-4">
              {industries.map((industry, idx) => {
                const isExpanded = expanded === industry.slug;
                return (
                  <motion.div
                    key={industry.slug}
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'border-white/[0.12] bg-white/[0.03]' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.5 }}
                  >
                    <div className="p-5 md:p-7">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                        {/* Icon + Title */}
                        <div className="flex items-center gap-4 flex-shrink-0 lg:w-[280px]">
                          <motion.div
                            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                          >
                            <i className={`${industry.icon} text-2xl text-accent-400`}></i>
                          </motion.div>
                          <div>
                            <h3 className="font-heading font-semibold text-white text-lg">{industry.title}</h3>
                            <div className="flex items-center gap-4 mt-1.5">
                              {industry.stats.map((s) => (
                                <div key={s.label} className="flex items-baseline gap-1">
                                  <span className="text-sm font-bold text-accent-400">{s.value}</span>
                                  <span className="text-[10px] text-white/25 font-medium">{s.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/35 text-sm leading-relaxed flex-grow max-w-[600px]">
                          {industry.desc}
                        </p>

                        {/* Expand Button */}
                        <button
                          onClick={() => setExpanded(isExpanded ? null : industry.slug)}
                          className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] text-white/45 text-xs font-medium hover:bg-white/[0.06] hover:text-white/70 transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                          {isExpanded ? 'Show Less' : 'View Details'}
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                            <i className="ri-arrow-down-s-line text-sm"></i>
                          </motion.div>
                        </button>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-white/[0.05]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Highlights */}
                              <div>
                                <h5 className="text-white/25 text-[10px] uppercase tracking-[0.15em] font-semibold mb-3">
                                  Our Expertise
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {industry.highlights.map((h) => (
                                    <span
                                      key={h}
                                      className="px-3 py-1.5 rounded-lg bg-accent-500/5 border border-accent-500/10 text-sm text-accent-400/80 font-medium"
                                    >
                                      {h}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Case Studies */}
                              <div>
                                <h5 className="text-white/25 text-[10px] uppercase tracking-[0.15em] font-semibold mb-3">
                                  Featured Case Studies
                                </h5>
                                <div className="space-y-3">
                                  {industry.caseStudies.map((cs) => (
                                    <div
                                      key={cs.title}
                                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-300 cursor-pointer group"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                                        <i className="ri-file-text-line text-accent-400 text-sm"></i>
                                      </div>
                                      <div>
                                        <h6 className="text-white/80 text-xs font-semibold mb-0.5 group-hover:text-accent-300 transition-colors duration-300">
                                          {cs.title}
                                        </h6>
                                        <p className="text-white/30 text-[11px]">{cs.desc}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                              <a
                                href="/contact"
                                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                                className="glass-btn-primary cursor-pointer text-sm"
                              >
                                Get {industry.title} Solutions
                                <i className="ri-arrow-right-line ml-2"></i>
                              </a>
                              <button
                                onClick={() => navigate('/portfolio')}
                                className="glass-btn cursor-pointer text-sm"
                              >
                                View Portfolio
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Why Us</div>
              <h2 className="section-title text-white">
                Why Companies <span className="text-gradient">Trust Us</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: 'ri-shield-check-line', title: 'Industry Compliance', desc: 'HIPAA, SOC 2, GDPR, PCI-DSS ready solutions for regulated industries.' },
                { icon: 'ri-team-line', title: 'Domain Experts', desc: 'Teams with deep vertical expertise across 12+ industries.' },
                { icon: 'ri-lightbulb-flash-line', title: 'Innovation First', desc: 'AI, IoT, Blockchain solutions customized per industry needs.' },
                { icon: 'ri-customer-service-2-line', title: 'Dedicated Support', desc: '24/7 support with industry-specific SLAs and dedicated managers.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card-hover rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-white/[0.06] flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-accent-400`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
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
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Not Sure Which Solution Fits Your Industry?
                </h3>
                <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Book a free discovery call. We&apos;ll analyze your needs and recommend the best approach for your industry.
                </p>
                <motion.a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="glass-btn-primary inline-flex items-center cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Schedule Free Consultation
                  <i className="ri-calendar-line ml-2"></i>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
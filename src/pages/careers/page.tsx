import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { jobOpenings, departments, benefits, hiringProcess } from '@/mocks/company';

export default function Careers() {
  const navigate = useNavigate();
  const [activeDept, setActiveDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

  const filtered = activeDept === 'All'
    ? jobOpenings
    : jobOpenings.filter((j) => j.department === activeDept);

  const uniqueDepts = ['All', ...Array.from(new Set(jobOpenings.map((j) => j.department)))];

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[380px] md:min-h-[480px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/60 via-dark-500/30 to-dark-500"></div>
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="section-tag mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}>
                Join Our Team
              </motion.div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Build the <span className="text-gradient">Future</span> With Us
              </h1>
              <p className="text-white/40 text-base md:text-lg max-w-xl mb-8">
                200+ engineers, designers, and strategists building world-class software for Fortune 500 clients across 12 countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#openings" className="glass-btn-primary cursor-pointer">
                  View Openings ({jobOpenings.length})
                  <i className="ri-arrow-down-line ml-2"></i>
                </a>
                <button onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })} className="glass-btn cursor-pointer">
                  <i className="ri-play-circle-line mr-2"></i>
                  Our Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Department Stats */}
        <section className="py-10 md:py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {departments.map((dept, i) => (
                <motion.div
                  key={dept.name}
                  className="glass-card rounded-xl p-4 text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveDept(dept.name)}
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-accent-500/10 flex items-center justify-center mb-2">
                    <i className={`${dept.icon} text-accent-400 text-sm`}></i>
                  </div>
                  <p className="text-white text-xs font-semibold">{dept.name}</p>
                  <p className="text-accent-400 text-[10px]">{dept.count} members</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="section-tag mx-auto">Why Join Us</div>
              <h2 className="section-title text-white">Benefits & <span className="text-gradient">Perks</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="glass-card-hover rounded-2xl p-6"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-4">
                    <i className={`${b.icon} text-lg text-accent-400`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-2">{b.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="section-tag mx-auto">Our Process</div>
              <h2 className="section-title text-white">How We <span className="text-gradient">Hire</span></h2>
              <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">Transparent, efficient, and respectful of your time.</p>
            </motion.div>
            <div className="flex flex-col md:flex-row items-start gap-4 max-w-4xl mx-auto">
              {hiringProcess.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="flex-1 glass-card rounded-2xl p-5 text-center relative"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-1">{step.title}</h4>
                  <p className="text-white/30 text-[11px] leading-relaxed">{step.desc}</p>
                  {i < hiringProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-accent-400/30">
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="section-tag">Open Positions</div>
              <h2 className="section-title text-white">
                <span className="text-gradient">{jobOpenings.length}</span> Current Openings
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-2 mb-8">
              {uniqueDepts.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeDept === d
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'bg-white/[0.03] text-white/50 hover:text-white border border-white/[0.05]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  className="glass-card-hover rounded-2xl p-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm">{job.title}</h4>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-accent-400 text-[11px]">{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-white/15"></span>
                        <span className="text-white/30 text-[11px]">{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-white/15"></span>
                        <span className="text-white/30 text-[11px]">{job.type}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-400 text-[10px] font-semibold whitespace-nowrap">{job.salary}</span>
                  </div>
                  <p className="text-white/30 text-xs leading-relaxed mb-3">{job.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white/20 text-[10px]">{job.experience}</span>
                    <span className="text-accent-400 text-[11px] font-medium">View Details →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Do Not See Your Role?</h3>
                <p className="text-white/40 text-sm max-w-md mx-auto mb-8">We are always looking for exceptional people. Send your resume and we will keep you in mind.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Send Your Resume
                  <i className="ri-send-plane-line ml-2"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Detail Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
            <motion.div
              className="absolute inset-0 bg-dark-500/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative z-10"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-close-line"></i>
              </button>

              <div className="mb-6">
                <div className="section-tag mb-2">{selectedJob.department}</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">{selectedJob.title}</h3>
                <div className="flex items-center gap-3 text-sm text-white/30">
                  <span>{selectedJob.location}</span>
                  <span className="w-1 h-1 rounded-full bg-white/15"></span>
                  <span>{selectedJob.type}</span>
                  <span className="w-1 h-1 rounded-full bg-white/15"></span>
                  <span>{selectedJob.experience}</span>
                  <span className="w-1 h-1 rounded-full bg-white/15"></span>
                  <span className="text-primary-400">{selectedJob.salary}</span>
                </div>
              </div>

              <p className="text-white/35 text-sm leading-relaxed mb-6">{selectedJob.description}</p>

              <div className="mb-5">
                <h4 className="font-heading font-semibold text-white text-sm mb-3">Requirements</h4>
                <div className="space-y-2">
                  {selectedJob.requirements.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <i className="ri-check-line text-accent-400 text-sm mt-0.5"></i>
                      <span className="text-white/35 text-xs">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedJob.niceToHave && (
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-white text-sm mb-3">Nice to Have</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.niceToHave.map((n) => (
                      <span key={n} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/30 text-[11px]">{n}</span>
                    ))}
                  </div>
                </div>
              )}

              <a href="/contact" onClick={(e) => { e.preventDefault(); setSelectedJob(null); navigate('/contact'); }} className="glass-btn-primary w-full justify-center cursor-pointer">
                Apply for this Position
                <i className="ri-rocket-line ml-2"></i>
              </a>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
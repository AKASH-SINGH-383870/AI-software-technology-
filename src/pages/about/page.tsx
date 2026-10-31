import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { teamMembers, companyStats, milestones, values } from '@/mocks/team';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function About() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'About Us | Digi India Solutions - IT Company in Delhi, India',
    description: 'Learn about Digi India Solutions, a premium IT company in Rohini, New Delhi. Founded in 2010, we are 200+ engineers serving clients across 12 countries with world-class software development.',
    keywords: 'about Digi India Solutions, IT company Delhi, software company Rohini, tech team India, company history, mission vision',
    canonical: 'https://www.digiindiasolutions.com/about',
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/40 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="section-tag mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Us
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                We Build Software That <span className="text-gradient">Powers the World</span>
              </motion.h1>
              <motion.p
                className="text-white/40 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Digi India Solutions was founded in 2010 with a simple mission: make world-class software accessible to businesses of all sizes. Today, we are 200+ engineers, designers, and strategists serving clients across 12 countries.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-20 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {companyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
                    <i className={`${stat.icon} text-accent-400 text-lg`}></i>
                  </div>
                  <div className="text-xl md:text-2xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-white/30 text-[11px]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="section-tag mb-5">Our Mission</div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Transforming Businesses Through <span className="text-gradient">Technology</span>
                </h2>
                <p className="text-white/40 text-sm leading-[1.8] mb-6">
                  We believe every business deserves access to world-class technology. Whether you are a startup with a bold idea or a Fortune 500 modernizing legacy systems, we bring the same level of passion, expertise, and commitment to your success.
                </p>
                <p className="text-white/40 text-sm leading-[1.8]">
                  Our approach combines deep technical expertise with business acumen. We do not just write code — we solve problems, create opportunities, and build platforms that become competitive advantages.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    className="glass-card-hover rounded-2xl p-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-3">
                      <i className={`${v.icon} text-lg text-accent-400`}></i>
                    </div>
                    <h4 className="font-heading font-semibold text-white text-sm mb-1">{v.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Our Journey</div>
              <h2 className="section-title text-white">
                <span className="text-gradient">15 Years</span> of Building Excellence
              </h2>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-accent-500/20 to-transparent"></div>

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    className={`relative flex items-start gap-6 md:gap-8 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className={`hidden md:block w-[calc(50%-32px)] ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`glass-card rounded-xl p-4 ${isLeft ? 'ml-auto' : 'mr-auto'} max-w-[280px]`}>
                        <p className="text-accent-400 font-heading font-bold text-sm mb-1">{m.year}</p>
                        <h4 className="text-white font-heading font-semibold text-sm mb-1">{m.title}</h4>
                        <p className="text-white/30 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    <div className="w-8 flex-shrink-0 flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent-500 border-2 border-dark-500 shadow-[0_0_10px_rgba(0,194,255,0.5)] mt-2"></div>
                    </div>

                    <div className="flex-grow md:hidden">
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-accent-400 font-heading font-bold text-sm mb-1">{m.year}</p>
                        <h4 className="text-white font-heading font-semibold text-sm mb-1">{m.title}</h4>
                        <p className="text-white/30 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    <div className="hidden md:block w-[calc(50%-32px)]"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">The Team</div>
              <h2 className="section-title text-white">
                Meet the <span className="text-gradient">Experts</span>
              </h2>
              <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
                Our leadership team brings decades of combined experience from Google, Infosys, Adobe, and IIT.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  className="glass-card-hover rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="font-heading font-semibold text-white text-sm">{member.name}</h4>
                      <p className="text-accent-400 text-[11px] font-medium">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-white/35 text-xs leading-relaxed mb-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.expertise.map((ex) => (
                        <span key={ex} className="px-2 py-0.5 rounded-md bg-accent-500/5 border border-accent-500/10 text-[10px] text-accent-400/80">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-7 h-7 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-accent-400 hover:bg-white/[0.06] transition-all">
                          <i className="ri-linkedin-fill text-xs"></i>
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="w-7 h-7 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-accent-400 hover:bg-white/[0.06] transition-all">
                          <i className="ri-twitter-x-fill text-xs"></i>
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="w-7 h-7 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-accent-400 hover:bg-white/[0.06] transition-all">
                          <i className="ri-github-fill text-xs"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
 */}
        {/* CTA */}
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
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Join Our Growing Team
                </h3>
                <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-8">
                  We are always looking for exceptional talent. If you are passionate about technology and want to work on world-class projects, we want to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Open Positions
                    <i className="ri-briefcase-4-line ml-2"></i>
                  </motion.a>
                  <button onClick={() => navigate('/contact')} className="glass-btn cursor-pointer">
                    Contact Us
                  </button>
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
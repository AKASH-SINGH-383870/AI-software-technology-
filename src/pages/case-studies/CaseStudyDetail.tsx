import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { caseStudies } from '@/mocks/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const study = slug ? caseStudies.find((c) => c.slug === slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-dark-500 text-white">
        <Navbar />
        <main className="pt-24">
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
                <i className="ri-file-search-line text-3xl text-white/30"></i>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Case Study Not Found</h2>
              <p className="text-white/30 text-sm mb-6">The case study you are looking for does not exist.</p>
              <button onClick={() => navigate('/case-studies')} className="glass-btn cursor-pointer">
                View All Case Studies
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: `${study.client} - ${study.title}. Industry: ${study.industry}. Duration: ${study.duration}.`,
    url: `https://www.digiindiasolutions.com/case-studies/${study.slug}`,
    image: study.image,
    author: {
      '@type': 'Organization',
      name: 'Digi India Solutions',
      url: 'https://www.digiindiasolutions.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Digi India Solutions',
      url: 'https://www.digiindiasolutions.com',
    },
    about: { '@type': 'Thing', name: study.industry },
    keywords: study.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}></script>
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Breadcrumb customLabel={study.title} customPath={`/case-studies/${study.slug}`} />
        </div>

        {/* Hero Image */}
        <section className="relative h-[300px] md:h-[420px] overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/30 via-dark-500/60 to-dark-500"></div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-6 md:pb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md text-white/70 text-[10px] font-bold uppercase tracking-wider border border-white/[0.06]">
                  {study.industry}
                </span>
                {study.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent-500/10 backdrop-blur-md text-accent-400 text-[10px] font-bold uppercase tracking-wider border border-accent-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.h1
                className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {study.title}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Meta Bar */}
        <section className="border-b border-white/[0.06] bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <i className="ri-building-4-line text-primary-400 text-xs"></i>
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase">Client</p>
                  <p className="text-white/60 text-xs font-medium">{study.client}</p>
                </div>
              </div>
              <div className="w-px h-7 bg-white/[0.06] hidden md:block"></div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-accent-500/10 flex items-center justify-center">
                  <i className="ri-time-line text-accent-400 text-xs"></i>
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase">Duration</p>
                  <p className="text-white/60 text-xs font-medium">{study.duration}</p>
                </div>
              </div>
              <div className="w-px h-7 bg-white/[0.06] hidden md:block"></div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <i className="ri-team-line text-primary-400 text-xs"></i>
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase">Team</p>
                  <p className="text-white/60 text-xs font-medium">{study.team}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            {/* Challenge */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <i className="ri-alert-line text-red-400 text-sm"></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">The Challenge</h3>
              </div>
              <p className="text-white/40 text-sm leading-[1.8]">{study.challenge}</p>
            </motion.div>

            {/* Approach */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <i className="ri-lightbulb-line text-primary-400 text-sm"></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">Our Approach</h3>
              </div>
              <p className="text-white/40 text-sm leading-[1.8]">{study.approach}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center">
                  <i className="ri-tools-line text-accent-400 text-sm"></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">The Solution</h3>
              </div>
              <ul className="space-y-2.5">
                {study.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
                    <div className="w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-accent-400 text-[10px]"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                  <i className="ri-stack-line text-primary-400 text-sm"></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-sm text-white/50 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <i className="ri-bar-chart-box-line text-green-400 text-sm"></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg">Results & Impact</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {study.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    className="glass-card rounded-xl p-5 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <div className="text-xl md:text-2xl font-heading font-bold text-accent-400 mb-1">{r.value}</div>
                    <div className="text-white/30 text-xs">{r.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              className="glass-card rounded-2xl p-6 md:p-8 relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute top-4 right-4 text-white/[0.03]">
                <i className="ri-double-quotes-r text-5xl"></i>
              </div>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6 italic relative z-10">
                "{study.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/15 flex items-center justify-center text-white font-bold text-xs border border-white/[0.06]">
                  {study.testimonial.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{study.testimonial.name}</p>
                  <p className="text-white/25 text-xs">{study.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Case Studies */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">More Stories</div>
              <h2 className="section-title text-white">Other Case Studies</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {caseStudies
                .filter((c) => c.slug !== study.slug)
                .slice(0, 3)
                .map((cs, i) => (
                  <motion.div
                    key={cs.id}
                    className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    onClick={() => { navigate(`/case-studies/${cs.slug}`); window.scrollTo(0, 0); }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/20 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 rounded-md bg-dark-500/80 text-white/70 text-[10px] font-bold">
                          {cs.industry}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-heading font-semibold text-white text-sm mb-1 group-hover:text-accent-300 transition-colors duration-300">
                        {cs.title}
                      </h4>
                      <p className="text-white/30 text-xs line-clamp-2 mb-3">{cs.challenge}</p>
                      <span className="text-accent-400 text-xs font-semibold inline-flex items-center gap-1">
                        Read More
                        <i className="ri-arrow-right-line"></i>
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
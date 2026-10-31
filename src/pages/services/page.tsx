import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { servicesData } from '@/mocks/services';
import { usePageSEO } from '@/hooks/usePageSEO';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Services() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'IT Services | Digi India Solutions - Web, Mobile, AI, ERP, CRM, Cloud',
    description: 'Explore our comprehensive IT services: Website Development, Mobile Apps, Custom Software, AI Automation, ERP, CRM, Digital Marketing, Cloud Solutions, and UI/UX Design. Serving Delhi, India & globally.',
    keywords: 'IT services Delhi, website development company, mobile app development, custom software, AI automation services, ERP solutions, CRM development, digital marketing agency, cloud solutions, UI UX design',
    canonical: 'https://www.digiindiasolutions.com/services',
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="absolute inset-0 aurora-bg"></div>
          <div className="absolute inset-0 grid-bg"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Our Services</div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Comprehensive <span className="text-gradient">IT Solutions</span>
              </h1>
              <p className="text-white/40 text-base md:text-lg">
                From strategy to execution, we deliver end-to-end digital solutions that transform how your business operates and grows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
            >
              {servicesData.map((service) => (
                <motion.div
                  key={service.slug}
                  variants={cardVariants}
                  className="glass-card-hover rounded-2xl p-6 md:p-7 group cursor-pointer flex flex-col"
                  onClick={() => navigate(`/services/${service.slug}`)}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500">
                    <i className="ri-code-s-slash-line text-xl md:text-2xl text-accent-400"></i>
                  </div>

                  <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-accent-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-4 flex-grow">
                    {service.overview.slice(0, 140)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] text-white/40">{tech}</span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-accent-400 text-xs font-semibold tracking-wide group-hover:translate-x-1 transition-transform">
                    Explore Service
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto mb-6">
                  Schedule a free consultation with our experts. We will analyze your requirements and recommend the best solution for your business.
                </p>
                <motion.a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="glass-btn-primary cursor-pointer inline-flex"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book Free Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
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
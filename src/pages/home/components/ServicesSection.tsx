import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    icon: 'ri-global-line',
    title: 'Website Development',
    slug: 'website-development',
    desc: 'High-performance websites built with cutting-edge tech stacks. From corporate sites to complex web portals.',
    category: 'Web',
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    desc: 'Native & cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    category: 'Mobile',
  },
  {
    icon: 'ri-code-box-line',
    title: 'Custom Software',
    slug: 'custom-software',
    desc: 'Tailor-made software solutions built to address your unique business challenges and workflows.',
    category: 'Software',
  },
  {
    icon: 'ri-robot-line',
    title: 'AI & Automation',
    slug: 'ai-automation',
    desc: 'Intelligent automation solutions, chatbots, and AI-powered business workflows that boost efficiency.',
    category: 'AI',
  },
  {
    icon: 'ri-database-2-line',
    title: 'ERP Solutions',
    slug: 'erp-solutions',
    desc: 'Enterprise resource planning systems tailored for manufacturing, healthcare, education, and more.',
    category: 'Enterprise',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'CRM Solutions',
    slug: 'crm-solutions',
    desc: 'Customer relationship management platforms that streamline sales, support, and client engagement.',
    category: 'Enterprise',
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    desc: 'Data-driven SEO, PPC, and social media strategies that generate leads and maximize ROI.',
    category: 'Marketing',
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    desc: 'AWS, Azure, and GCP infrastructure, migration, DevOps, and managed cloud services.',
    category: 'Infrastructure',
  },
  {
    icon: 'ri-paint-brush-line',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    desc: 'User-centered design that creates intuitive, beautiful digital experiences across all platforms.',
    category: 'Design',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-dark-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">Our Services</div>
          <h2 className="section-title text-white mb-4">
            End-to-End <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From concept to deployment, we deliver complete digital transformation with cutting-edge technology and expert execution.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-card-hover rounded-2xl p-6 md:p-7 group cursor-pointer"
              onClick={() => navigate(`/services/${service.slug}`)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,194,255,0.15)] transition-all duration-500">
                <i className={`${service.icon} text-xl md:text-2xl text-accent-400`}></i>
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-white text-lg mb-2.5 group-hover:text-accent-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Learn More */}
              <span className="inline-flex items-center gap-1.5 text-accent-400 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                Learn More
                <i className="ri-arrow-right-line"></i>
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="/services"
            onClick={(e) => { e.preventDefault(); navigate('/services'); }}
            className="glass-btn cursor-pointer inline-flex"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
            <i className="ri-arrow-right-line ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
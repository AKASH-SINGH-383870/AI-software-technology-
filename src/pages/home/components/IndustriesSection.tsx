import { motion } from 'framer-motion';

const industries = [
  { icon: 'ri-heart-pulse-line', name: 'Healthcare', desc: 'Hospital management, patient portals, telemedicine platforms' },
  { icon: 'ri-graduation-cap-line', name: 'Education', desc: 'School ERP, LMS, virtual classrooms, student management' },
  { icon: 'ri-shopping-bag-3-line', name: 'E-Commerce', desc: 'Multi-vendor marketplaces, B2B portals, retail solutions' },
  { icon: 'ri-building-4-line', name: 'Real Estate', desc: 'Property management, CRM, virtual tours, lead management' },
  { icon: 'ri-hotel-line', name: 'Hospitality', desc: 'Hotel management, booking systems, restaurant POS' },
  { icon: 'ri-settings-3-line', name: 'Manufacturing', desc: 'ERP, inventory, supply chain, production planning' },
  { icon: 'ri-bank-line', name: 'Finance', desc: 'FinTech apps, payment gateways, blockchain solutions' },
  { icon: 'ri-truck-line', name: 'Logistics', desc: 'Fleet management, tracking systems, warehouse automation' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">Industries</div>
          <h2 className="section-title text-white mb-4">
            Solutions Across <span className="text-gradient">Industries</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tailored digital solutions that address the unique challenges of your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-5 md:p-6 text-center group cursor-pointer"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500">
                <i className={`${ind.icon} text-xl md:text-2xl text-accent-400`}></i>
              </div>
              <h3 className="font-heading font-semibold text-white text-sm mb-1.5">{ind.name}</h3>
              <p className="text-white/25 text-xs leading-relaxed hidden md:block">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: 'ri-layout-masonry-line',
    title: 'Modern UI/UX',
    desc: 'Beautiful, intuitive interfaces designed for maximum user engagement and conversion.',
  },
  {
    icon: 'ri-team-line',
    title: 'Experienced Team',
    desc: '50+ skilled engineers and designers with deep expertise across diverse technologies.',
  },
  {
    icon: 'ri-brain-line',
    title: 'AI-Powered Development',
    desc: 'Leveraging AI to accelerate development, improve code quality, and deliver smarter solutions.',
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Affordable Pricing',
    desc: 'Premium quality at competitive rates with flexible engagement models for every budget.',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Fast Delivery',
    desc: 'Agile methodology ensures rapid development without compromising on quality or security.',
  },
  {
    icon: 'ri-headphone-line',
    title: 'Dedicated Support',
    desc: 'Round-the-clock technical support and maintenance for uninterrupted business operations.',
  },
  {
    icon: 'ri-shield-keyhole-line',
    title: 'Enterprise Security',
    desc: 'Bank-grade security protocols, data encryption, and compliance with global standards.',
  },
  {
    icon: 'ri-stack-line',
    title: 'Scalable Solutions',
    desc: 'Architecture designed to scale seamlessly as your business grows and evolves.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function WhyChooseUs() {
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
          <div className="section-tag mx-auto">Why Choose Us</div>
          <h2 className="section-title text-white mb-4">
            Why Businesses <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine technical excellence with business understanding to deliver solutions that create real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-5 md:p-6 text-center group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,194,255,0.1)] transition-all duration-500">
                <i className={`${item.icon} text-2xl text-accent-400`}></i>
              </div>
              <h3 className="font-heading font-semibold text-white text-sm md:text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/30 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
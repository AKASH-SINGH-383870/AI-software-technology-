import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'CEO, HealthFirst Hospitals',
    text: 'Digi India transformed our entire hospital management system. Their ERP solution streamlined operations across 12 facilities, reducing admin time by 60%. Truly world-class execution.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'CTO, TradeGlobal Inc.',
    text: 'The e-commerce platform they built handles 100K+ daily transactions flawlessly. Their technical expertise and attention to detail exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Founder, EduTech Solutions',
    text: 'From concept to launch in 3 months — their team built our entire school ERP platform. Now serving 200+ schools. Phenomenal work ethic and quality.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'VP Engineering, CloudNine SaaS',
    text: 'The AI automation solution they developed saved us $2M annually in operational costs. Their understanding of AI and business processes is remarkable.',
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function TestimonialsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-dark-600 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/3 blur-[150px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">Testimonials</div>
          <h2 className="section-title text-white mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Trusted by 200+ businesses worldwide. Here is what they say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-6 md:p-8"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-5">
                <i className="ri-double-quotes-l text-accent-400 text-lg"></i>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} className="ri-star-fill text-accent-400 text-sm"></i>
                ))}
              </div>

              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/20 flex items-center justify-center font-heading font-bold text-white/60 text-sm">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
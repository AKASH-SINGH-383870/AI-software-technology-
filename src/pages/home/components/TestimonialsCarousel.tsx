import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    name: 'Vikram Singh',
    role: 'CTO, MedLife Healthcare',
    quote: 'DigiIndia transformed our patient management system. The platform now handles 50,000+ patients daily with zero downtime. Their team understood healthcare compliance deeply.',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20executive%20headshot%2C%20confident%20expression%2C%20navy%20suit%2C%20clean%20white%20studio%20background%2C%20warm%20natural%20lighting%2C%20corporate%20portrait%20photography&width=200&height=200&seq=test-vikram-2&orientation=squarish',
    company: 'MedLife',
    logo: '🏥',
  },
  {
    id: 2,
    name: 'Priya Agarwal',
    role: 'VP Operations, Luxe Hotels Group',
    quote: 'The property management system they built handles 200+ hotels seamlessly. Revenue increased 35% in year one. Best technology partner we have worked with.',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20executive%20headshot%2C%20warm%20smile%2C%20cream%20blazer%2C%20clean%20white%20studio%20background%2C%20natural%20lighting%2C%20corporate%20portrait%20photography&width=200&height=200&seq=test-priya-2&orientation=squarish',
    company: 'Luxe Hotels',
    logo: '🏨',
  },
  {
    id: 3,
    name: 'Rajesh Khanna',
    role: 'MD, Apex Manufacturing',
    quote: 'Their ERP solution replaced our 20-year-old system. Production efficiency improved by 40%. Real-time inventory tracking across 5 factories. Exceptional quality.',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20managing%20director%20headshot%2C%20distinguished%20grey%20hair%2C%20charcoal%20suit%2C%20clean%20white%20studio%20background%2C%20soft%20lighting%2C%20corporate%20portrait%20photography&width=200&height=200&seq=test-rajesh-2&orientation=squarish',
    company: 'Apex Mfg',
    logo: '🏭',
  },
  {
    id: 4,
    name: 'Ananya Desai',
    role: 'Director, EduTech Global',
    quote: 'The LMS platform handles 200K+ students simultaneously. Course completion rates jumped from 45% to 92%. Their AI-powered tutoring is genuinely revolutionary.',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20director%20headshot%2C%20confident%20smile%2C%20blue%20blazer%2C%20clean%20white%20studio%20background%2C%20bright%20lighting%2C%20corporate%20portrait%20photography&width=200&height=200&seq=test-ananya&orientation=squarish',
    company: 'EduTech',
    logo: '📚',
  },
  {
    id: 5,
    name: 'Arjun Mehta',
    role: 'CEO, QuickFin India',
    quote: 'Digital lending platform built in 12 weeks. Processing 10,000+ loan applications daily with 99.95% uptime. Their fintech expertise is unmatched in India.',
    rating: 5,
    image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20CEO%20headshot%2C%20confident%20look%2C%20dark%20suit%2C%20clean%20white%20studio%20background%2C%20dramatic%20lighting%2C%20corporate%20portrait%20photography&width=200&height=200&seq=test-arjun&orientation=squarish',
    company: 'QuickFin',
    logo: '💰',
  },
];

export default function TestimonialsCarousel() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const tst = testimonials[current];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-20"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <div className="section-tag mx-auto">Testimonials</div>
          <h2 className="section-title text-white">
            {t('testimonials.title', 'What Our')}{' '}
            <span className="text-gradient">{t('testimonials.title.highlight', 'Clients Say')}</span>
          </h2>
          <p className="text-white/30 text-sm mt-3">
            {t('testimonials.subtitle', 'Trusted by 500+ businesses across 12 countries')}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-[150px]"></div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={tst.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center relative"
            >
              {/* Large quote mark */}
              <div className="text-7xl md:text-9xl font-serif text-accent-500/10 absolute top-4 left-6 select-none leading-none">&ldquo;</div>

              {/* Client Image */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto border-2 border-white/[0.08]">
                  <img src={tst.image} alt={tst.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm">
                  {tst.logo}
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: tst.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-accent-400 text-sm"></i>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/60 text-sm md:text-base leading-relaxed italic max-w-2xl mx-auto mb-6">
                &ldquo;{tst.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-white font-heading font-semibold text-sm">{tst.name}</p>
                <p className="text-white/30 text-xs">{tst.role}</p>
              </div>

              {/* Company logo placeholder */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-accent-400/50 text-xs font-semibold uppercase tracking-wider">{tst.company}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === current
                      ? 'w-6 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'w-1.5 h-1.5 bg-white/[0.15] hover:bg-white/[0.3]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
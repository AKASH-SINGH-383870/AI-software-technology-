import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', prefix = '', label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/30 text-xs md:text-sm">{label}</p>
    </motion.div>
  );
}

export default function LiveStats() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-dark-600 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-600 via-transparent to-dark-600"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <div className="section-tag mx-auto">Our Impact</div>
          <h2 className="section-title text-white">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatedCounter end={850} suffix="+" label={t('stats.projects', 'Projects Delivered')} />
          <AnimatedCounter end={500} suffix="+" label={t('stats.clients', 'Clients Served')} />
          <AnimatedCounter end={12} label={t('stats.countries', 'Countries Covered')} />
          <AnimatedCounter end={15} suffix="+" label={t('stats.industries', 'Industries Served')} />
          <AnimatedCounter end={9} suffix="+" label={t('stats.years', 'Years of Experience')} />
          <AnimatedCounter end={200} suffix="+" label={t('stats.software', 'Software Products')} />
          <AnimatedCounter end={98} suffix="%" label={t('stats.satisfaction', 'Customer Satisfaction')} />
          <AnimatedCounter end={15000} suffix="+" label={t('stats.tickets', 'Support Tickets Resolved')} />
        </div>
      </div>
    </section>
  );
}
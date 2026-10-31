import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
  { value: 1000, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gradient mb-1">
      {count}{suffix}
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const floatingShapes = [
    { size: 'w-24 h-24', pos: 'top-[15%] left-[10%]', delay: 0, duration: 6, opacity: 0.06, gradient: 'from-primary-400 to-accent-400', rotate: 0 },
    { size: 'w-16 h-16', pos: 'top-[25%] right-[15%]', delay: 1.5, duration: 7, opacity: 0.08, gradient: 'from-accent-400 to-primary-400', rotate: 15 },
    { size: 'w-20 h-20', pos: 'bottom-[25%] left-[20%]', delay: 3, duration: 8, opacity: 0.05, gradient: 'from-primary-300 to-accent-500', rotate: 30 },
    { size: 'w-12 h-12', pos: 'bottom-[35%] right-[10%]', delay: 0.8, duration: 5, opacity: 0.07, gradient: 'from-accent-500 to-primary-400', rotate: 45 },
    { size: 'w-28 h-28', pos: 'top-[45%] left-[45%]', delay: 2, duration: 9, opacity: 0.04, gradient: 'from-primary-500 to-accent-300', rotate: 20 },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-500"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg"></div>
      <div className="absolute inset-0 grid-bg"></div>

      {/* Animated Glow Orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary-500/10 blur-[120px]"
        style={{
          left: `${50 + mousePos.x * 30}%`,
          top: `${30 + mousePos.y * 30}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.8s ease-out, top 0.8s ease-out',
        }}
      ></div>
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent-500/8 blur-[100px]"
        style={{
          left: `${30 - mousePos.x * 20}%`,
          top: `${60 - mousePos.y * 20}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 1s ease-out, top 1s ease-out',
        }}
      ></div>

      {/* Floating 3D Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.pos} ${shape.size} rounded-2xl bg-gradient-to-br ${shape.gradient}`}
          style={{ opacity: shape.opacity, filter: 'blur(1px)' }}
          animate={{
            y: [0, -25, 0],
            rotate: [shape.rotate, shape.rotate + 10, shape.rotate],
          }}
          transition={{
            y: { duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
            rotate: { duration: shape.duration + 2, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8">
            <motion.span
              className="w-2 h-2 rounded-full bg-accent-400"
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-accent-400 text-xs font-medium tracking-wider uppercase">Next-Gen IT Solutions</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-gradient-light">Transforming Businesses</span>
            <br />
            <span className="text-gradient">Through Technology & AI</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-white/40 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Building high-performance websites, mobile apps, enterprise software, and AI solutions that drive business growth at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="glass-btn-primary group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Consultation
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform inline-block"></i>
            </motion.a>
            <motion.a
              href="/portfolio"
              onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}
              className="glass-btn cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio
              <i className="ri-external-link-line ml-2"></i>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-xl p-5 md:p-6 text-center group hover:bg-white/[0.06] transition-all duration-500 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
                <div className="text-white/30 text-xs md:text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent pointer-events-none"></div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-white/30"
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
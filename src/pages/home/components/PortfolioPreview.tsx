import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'Healthcare ERP Platform',
    category: 'Enterprise Software',
    desc: 'A comprehensive hospital management system serving 50+ hospitals with real-time patient tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    stats: { metric: '40%', label: 'Efficiency Increase' },
    icon: 'ri-hospital-line',
    gradient: 'from-accent-500/20 to-primary-500/20',
  },
  {
    title: 'Global E-Commerce Platform',
    category: 'Web Development',
    desc: 'A multi-vendor marketplace processing 100K+ monthly transactions across 15 countries.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Azure'],
    stats: { metric: '3x', label: 'Revenue Growth' },
    icon: 'ri-shopping-cart-2-line',
    gradient: 'from-primary-500/20 to-accent-500/20',
  },
  {
    title: 'AI-Powered Chatbot Suite',
    category: 'AI & Automation',
    desc: 'Intelligent customer service automation reducing response time by 85% for enterprise clients.',
    tech: ['Python', 'OpenAI', 'React', 'Docker'],
    stats: { metric: '85%', label: 'Faster Response' },
    icon: 'ri-robot-line',
    gradient: 'from-accent-400/20 to-primary-400/20',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function PortfolioPreview() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-dark-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title text-white mb-4">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="section-subtitle">
              Explore how we have helped businesses transform through technology.
            </p>
          </div>
          <motion.a
            href="/portfolio"
            onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}
            className="glass-btn whitespace-nowrap cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Work
            <i className="ri-arrow-right-line ml-2"></i>
          </motion.a>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Image Area */}
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/[0.06] backdrop-blur-sm flex items-center justify-center`}>
                      <i className={`text-3xl text-accent-400/60 ${item.icon}`}></i>
                    </div>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md border border-white/[0.06] text-xs text-white/60">
                  {item.category}
                </div>
                {/* Stats Overlay */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-dark-500/80 backdrop-blur-md border border-white/[0.06]">
                  <div className="text-lg font-heading font-bold text-accent-400">{item.stats.metric}</div>
                  <div className="text-[10px] text-white/40">{item.stats.label}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-accent-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/35 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] text-white/40 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
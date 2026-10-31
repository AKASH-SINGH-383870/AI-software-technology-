import { motion } from 'framer-motion';

const processes = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'We analyze your business goals, target audience, and competitive landscape to craft a winning digital strategy.',
    icon: 'ri-search-eye-line',
    color: 'from-primary-500 to-accent-500',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    desc: 'Our designers create pixel-perfect wireframes and interactive prototypes that bring your vision to life.',
    icon: 'ri-pencil-ruler-2-line',
    color: 'from-accent-500 to-primary-400',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Using agile methodology, our engineers build scalable, secure, and high-performance solutions.',
    icon: 'ri-code-s-slash-line',
    color: 'from-primary-400 to-accent-400',
  },
  {
    step: '04',
    title: 'Testing & QA',
    desc: 'Rigorous automated and manual testing ensures your product is bug-free and performs flawlessly.',
    icon: 'ri-shield-check-line',
    color: 'from-accent-400 to-primary-500',
  },
  {
    step: '05',
    title: 'Launch & Support',
    desc: 'We deploy your solution and provide ongoing maintenance, updates, and 24/7 technical support.',
    icon: 'ri-rocket-2-line',
    color: 'from-primary-500 to-accent-300',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ProcessSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-600">
      <div className="absolute inset-0 grid-bg opacity-50"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">Our Process</div>
          <h2 className="section-title text-white mb-4">
            How We <span className="text-gradient">Build Success</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven, transparent development process that delivers exceptional results every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/20 via-primary-500/10 to-accent-500/20"></div>

          <div className="space-y-8 lg:space-y-0">
            {processes.map((p, i) => (
              <div
                key={p.step}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:mb-16`}
              >
                <motion.div
                  className={`lg:w-[45%] ${i % 2 === 0 ? 'lg:text-right lg:pr-14' : 'lg:text-left lg:pl-14'}`}
                  custom={i}
                  variants={i % 2 === 0 ? itemVariants : itemRightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="glass-card-hover rounded-2xl p-5 md:p-7">
                    <span className={`inline-block text-4xl md:text-5xl font-heading font-extrabold bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-3`}>
                      {p.step}
                    </span>
                    <h3 className="font-heading font-semibold text-white text-lg md:text-xl mb-2">{p.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>

                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-dark-500 border border-white/[0.06] items-center justify-center z-10">
                  <i className={`${p.icon} text-xl text-accent-400`}></i>
                </div>

                <div className="lg:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
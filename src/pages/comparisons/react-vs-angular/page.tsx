import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';

export default function ReactVsAngular() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[340px] md:min-h-[440px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <div className="section-tag mb-5">Technology Comparison</div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                React <span className="text-white/20">vs</span> <span className="text-gradient">Angular</span>
              </h1>
              <p className="text-white/40 text-base max-w-xl">Choosing the right frontend framework defines your project scalability, developer productivity, and time-to-market. Let us break down the real differences.</p>
            </motion.div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <i className="ri-reactjs-line text-2xl text-cyan-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">React</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">A lightweight JavaScript library by Meta for building user interfaces. React gives you maximum flexibility — choose your own router, state management, and tools. Best for teams that want control over every architectural decision.</p>
                <div className="flex flex-wrap gap-2">
                  {['Library (not framework)', 'JSX + Virtual DOM', 'Unidirectional data flow', 'Ecosystem flexibility', 'Huge community'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-cyan-500/8 border border-cyan-500/10 text-cyan-400 text-[10px]">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <i className="ri-angularjs-line text-2xl text-red-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Angular</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">A complete, opinionated framework by Google. Angular comes with everything built-in — routing, HTTP client, forms, state management. Best for large enterprise teams that want standardized architecture and long-term maintainability.</p>
                <div className="flex flex-wrap gap-2">
                  {['Full framework', 'TypeScript-first', 'Two-way data binding', 'Dependency injection', 'CLI tooling'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-red-500/8 border border-red-500/10 text-red-400 text-[10px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Comparison Table */}
            <div className="glass-card rounded-2xl overflow-hidden mb-14">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/[0.04]">
                      <th className="p-4 text-white/20 text-[10px] uppercase tracking-[0.15em] font-medium">Criteria</th>
                      <th className="p-4 text-cyan-400 text-xs font-semibold">React</th>
                      <th className="p-4 text-red-400 text-xs font-semibold">Angular</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      { criteria: 'Type', react: 'Library (UI-focused)', angular: 'Full Framework', reactClass: '', angularClass: '' },
                      { criteria: 'Learning Curve', react: 'Moderate (JSX + hooks)', angular: 'Steep (TypeScript, RxJS, DI)', reactClass: 'text-accent-400', angularClass: '' },
                      { criteria: 'Performance', react: 'Excellent (Virtual DOM)', angular: 'Good (Ivy compiler)', reactClass: 'text-accent-400', angularClass: '' },
                      { criteria: 'Bundle Size', react: 'Small (~42KB gzipped)', angular: 'Larger (~150KB+ gzipped)', reactClass: 'text-accent-400', angularClass: '' },
                      { criteria: 'Ecosystem', react: 'Massive (npm)', angular: 'Built-in + npm', reactClass: 'text-accent-400', angularClass: '' },
                      { criteria: 'Best For', react: 'SPAs, e-commerce, startups', angular: 'Enterprise apps, large teams', reactClass: '', angularClass: '' },
                      { criteria: 'State Management', react: 'Redux, Zustand, Context', angular: 'NgRx, Services, Signals', reactClass: '', angularClass: '' },
                      { criteria: 'Mobile Development', react: 'React Native (reuse 70%+ code)', angular: 'Ionic / NativeScript', reactClass: 'text-accent-400', angularClass: '' },
                      { criteria: 'Testing', react: 'Jest + React Testing Library', angular: 'Jasmine + Karma (built-in)', reactClass: '', angularClass: 'text-accent-400' },
                      { criteria: 'Hiring Pool', react: 'Very large (most popular)', angular: 'Moderate (enterprise-focused)', reactClass: 'text-accent-400', angularClass: '' },
                    ].map((row, i) => (
                      <tr key={row.criteria} className={`border-b border-white/[0.02] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                        <td className="p-4 text-white/50 font-medium">{row.criteria}</td>
                        <td className={`p-4 ${row.reactClass || 'text-white/35'}`}>{row.react}</td>
                        <td className={`p-4 ${row.angularClass || 'text-white/35'}`}>{row.angular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="font-heading font-semibold text-cyan-400 text-sm mb-3 flex items-center gap-2">
                  <i className="ri-check-double-line"></i> Choose React When
                </h4>
                <ul className="space-y-2">
                  {['You need maximum flexibility in architecture', 'Your team values control over tooling choices', 'You plan mobile app with React Native', 'Startup or mid-size company with fast iteration', 'SEO-critical applications (Next.js SSR)', 'Large community and npm package ecosystem needed'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs">
                      <i className="ri-arrow-right-s-line text-cyan-400/50 mt-0.5"></i>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4 className="font-heading font-semibold text-red-400 text-sm mb-3 flex items-center gap-2">
                  <i className="ri-check-double-line"></i> Choose Angular When
                </h4>
                <ul className="space-y-2">
                  {['Large enterprise with standardized architecture needs', 'TypeScript mandatory across the organization', 'Team prefers opinionated, batteries-included framework', 'Long-term maintainability is top priority', 'Complex forms and data-heavy dashboards', 'Dependency injection pattern fits your architecture'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs">
                      <i className="ri-arrow-right-s-line text-red-400/50 mt-0.5"></i>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto mb-10">
              <h3 className="font-heading text-xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {[
                  { q: 'Which is better for SEO?', a: 'React with Next.js wins hands-down for SEO due to server-side rendering and static generation. Angular Universal provides SSR but the ecosystem and community tooling for SEO in the React/Next.js world is far more mature.' },
                  { q: 'Which has better performance?', a: 'React Virtual DOM provides excellent runtime performance. Angular Ivy compiler produces highly optimized output. In real-world apps, both are fast enough. React with proper code splitting tends to have a smaller initial bundle.' },
                  { q: 'Which is easier to hire for?', a: 'React has roughly 3x more developers in the job market globally. However, Angular developers tend to have more enterprise experience. Choose based on your team composition and project requirements.' },
                  { q: 'Can I migrate from one to another?', a: 'Not easily. They are fundamentally different architectures. A migration would essentially be a full rewrite. We recommend choosing once and committing — both are excellent choices maintained by tech giants.' },
                ].map((faq, i) => (
                  <motion.div key={i} className="glass-card rounded-xl p-5"
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <h5 className="font-heading font-semibold text-white text-sm mb-1.5">{faq.q}</h5>
                    <p className="text-white/30 text-xs leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Need Help Choosing?</h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">Our architects will analyze your requirements and recommend the right stack — free 30-minute consultation.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Talk to an Architect
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
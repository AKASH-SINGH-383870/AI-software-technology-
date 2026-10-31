import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';

export default function FlutterVsReactNative() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[340px] md:min-h-[440px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="section-tag mb-5">Technology Comparison</div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Flutter <span className="text-white/20">vs</span> <span className="text-gradient">React Native</span>
              </h1>
              <p className="text-white/40 text-base max-w-xl">The two dominant cross-platform mobile frameworks — each with fundamentally different approaches. Which one delivers the best ROI for your mobile strategy?</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                  <i className="ri-flutter-line text-2xl text-sky-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Flutter</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">Google UI toolkit using Dart language. Renders its own widgets on a Skia canvas — no bridge to native components. Delivers pixel-perfect, 60fps UI across platforms with a single codebase. Ideal for brand-heavy, animation-rich apps.</p>
                <div className="flex flex-wrap gap-2">
                  {['Dart language', 'Own rendering engine', 'Hot reload (sub-second)', 'Widget-based UI', 'Strong Google backing'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-sky-500/8 border border-sky-500/10 text-sky-400 text-[10px]">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <i className="ri-reactjs-line text-2xl text-cyan-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">React Native</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">Meta framework using JavaScript/TypeScript. Bridges to native platform components — your app uses real iOS/Android UI elements. Best for teams already invested in React/web ecosystem who need code sharing between web and mobile.</p>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript/TypeScript', 'Native UI components', 'Fast Refresh', 'React ecosystem', 'Huge npm library access'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-cyan-500/8 border border-cyan-500/10 text-cyan-400 text-[10px]">{t}</span>
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
                      <th className="p-4 text-sky-400 text-xs font-semibold">Flutter</th>
                      <th className="p-4 text-cyan-400 text-xs font-semibold">React Native</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      { criteria: 'Language', flutter: 'Dart', reactNative: 'JavaScript / TypeScript', flutterClass: '', rnClass: 'text-accent-400' },
                      { criteria: 'Rendering', flutter: 'Own Skia engine', reactNative: 'Native platform components', flutterClass: 'text-accent-400', rnClass: '' },
                      { criteria: 'Performance', flutter: 'Excellent (60fps, no bridge)', reactNative: 'Good (JS bridge overhead)', flutterClass: 'text-accent-400', rnClass: '' },
                      { criteria: 'UI Consistency', flutter: 'Pixel-perfect across platforms', reactNative: 'Platform-native look & feel', flutterClass: 'text-accent-400', rnClass: '' },
                      { criteria: 'Code Sharing (Web)', flutter: 'Limited (Flutter Web beta)', reactNative: 'Excellent (React for web)', flutterClass: '', rnClass: 'text-accent-400' },
                      { criteria: 'Learning Curve', flutter: 'Moderate (new language: Dart)', reactNative: 'Easy (if you know React)', flutterClass: '', rnClass: 'text-accent-400' },
                      { criteria: 'Ecosystem', flutter: 'Growing fast, Google-backed', reactNative: 'Massive (React + npm)', flutterClass: '', rnClass: 'text-accent-400' },
                      { criteria: 'Best For', flutter: 'Brand-heavy, animation-rich apps', reactNative: 'Apps sharing logic with web', flutterClass: '', rnClass: '' },
                      { criteria: 'Hiring', flutter: 'Growing but smaller pool', reactNative: 'Large (React developers)', flutterClass: '', rnClass: 'text-accent-400' },
                      { criteria: 'App Size', flutter: 'Larger base (~7MB+)', reactNative: 'Smaller base (~3MB+)', flutterClass: '', rnClass: 'text-accent-400' },
                    ].map((row, i) => (
                      <tr key={row.criteria} className={`border-b border-white/[0.02] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                        <td className="p-4 text-white/50 font-medium">{row.criteria}</td>
                        <td className={`p-4 ${row.flutterClass || 'text-white/35'}`}>{row.flutter}</td>
                        <td className={`p-4 ${row.rnClass || 'text-white/35'}`}>{row.reactNative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="font-heading font-semibold text-sky-400 text-sm mb-3"><i className="ri-check-double-line mr-2"></i>Choose Flutter When</h4>
                <ul className="space-y-2">
                  {['Brand-heavy app requiring pixel-perfect custom UI', 'Animation-intensive experience (60fps critical)', 'No existing React/web codebase to share', 'Willing to adopt Dart as primary language', 'Targeting desktop + mobile from single codebase'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs"><i className="ri-arrow-right-s-line text-sky-400/50 mt-0.5"></i>{item}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4 className="font-heading font-semibold text-cyan-400 text-sm mb-3"><i className="ri-check-double-line mr-2"></i>Choose React Native When</h4>
                <ul className="space-y-2">
                  {['Existing React/web codebase to share logic', 'Team already proficient in JavaScript/TypeScript', 'Access to massive npm ecosystem is critical', 'Need platform-native look and feel', 'Web + mobile code sharing is a priority'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs"><i className="ri-arrow-right-s-line text-cyan-400/50 mt-0.5"></i>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto mb-10">
              <h3 className="font-heading text-xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {[
                  { q: 'Which is truly faster — Flutter or React Native?', a: 'Flutter has a performance edge because it compiles to native ARM code and renders directly on a canvas — no JavaScript bridge. React Native has improved significantly with the New Architecture (JSI + Fabric), but Flutter still wins on raw rendering performance and animation smoothness.' },
                  { q: 'Can I use my existing React web code in React Native?', a: 'You can share business logic, state management (Redux/Zustand), API clients, and utility functions between React web and React Native. UI components are not directly shareable since React Native uses native views while web uses DOM.' },
                  { q: 'Which has better third-party library support?', a: 'React Native wins significantly here due to the massive npm ecosystem. Flutter package ecosystem (pub.dev) is growing fast but still much smaller. For niche integrations, React Native usually has a ready-made solution while Flutter may require custom native plugin development.' },
                  { q: 'What about long-term viability?', a: 'Both are excellent bets. Google is heavily investing in Flutter (used in Google Pay, Google Ads). Meta continues investing in React Native (used in Facebook, Instagram, Microsoft Office). Neither is going anywhere.' },
                ].map((faq, i) => (
                  <motion.div key={i} className="glass-card rounded-xl p-5" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <h5 className="font-heading font-semibold text-white text-sm mb-1.5">{faq.q}</h5>
                    <p className="text-white/30 text-xs leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Still Deciding?</h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">Our mobile architects have built 50+ apps across both frameworks. Let us guide your decision based on real project data.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Get Expert Recommendation
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
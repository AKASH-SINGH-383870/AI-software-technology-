import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';

export default function CustomSoftwareVsSaaS() {
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
                Custom Software <span className="text-white/20">vs</span> <span className="text-gradient">SaaS</span>
              </h1>
              <p className="text-white/40 text-base max-w-xl">Build vs Buy — the billion-dollar question every enterprise faces. Custom software gives you total control; SaaS gives you speed. Which one actually costs less in the long run?</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <i className="ri-tools-line text-2xl text-amber-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Custom Software</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">Built from scratch to your exact specifications. Every feature, workflow, and integration is designed for your business — no compromises, no unused features, no per-user pricing. You own the code and the data entirely.</p>
                <div className="flex flex-wrap gap-2">
                  {['Full ownership', 'Unlimited customization', 'No per-user fees', 'Competitive advantage', 'Integrates with anything'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-amber-500/8 border border-amber-500/10 text-amber-400 text-[10px]">{t}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 border-l-2 border-l-accent-500/40"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <i className="ri-cloud-line text-2xl text-emerald-400"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">SaaS (Software as a Service)</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-4">Ready-to-use software hosted and maintained by a vendor. Deploy in days, pay monthly per user, and always get the latest updates. Best for standardized business processes where your workflow matches the software design.</p>
                <div className="flex flex-wrap gap-2">
                  {['Fast deployment', 'Lower upfront cost', 'Automatic updates', 'Vendor-managed security', 'Predictable pricing'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/10 text-emerald-400 text-[10px]">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden mb-14">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/[0.04]">
                      <th className="p-4 text-white/20 text-[10px] uppercase tracking-[0.15em] font-medium">Criteria</th>
                      <th className="p-4 text-amber-400 text-xs font-semibold">Custom Software</th>
                      <th className="p-4 text-emerald-400 text-xs font-semibold">SaaS</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      { criteria: 'Upfront Cost', custom: 'High (₹5L - ₹50L+)', saas: 'Low (₹500 - ₹5K/month)', customClass: '', saasClass: 'text-accent-400' },
                      { criteria: '3-Year TCO (50 users)', custom: '₹15L - ₹30L (one-time)', saas: '₹9L - ₹36L (recurring)', customClass: 'text-accent-400', saasClass: '' },
                      { criteria: 'Time to Deploy', custom: '3-12 months', saas: '1-14 days', customClass: '', saasClass: 'text-accent-400' },
                      { criteria: 'Customization', custom: 'Unlimited', saas: 'Limited (config only)', customClass: 'text-accent-400', saasClass: '' },
                      { criteria: 'Ownership', custom: 'You own everything', saas: 'Vendor owns software', customClass: 'text-accent-400', saasClass: '' },
                      { criteria: 'Data Control', custom: 'Full control (your servers)', saas: 'Vendor controls infrastructure', customClass: 'text-accent-400', saasClass: '' },
                      { criteria: 'Updates', custom: 'You decide when/how', saas: 'Automatic (mandatory)', customClass: '', saasClass: '' },
                      { criteria: 'Competitive Advantage', custom: 'Unique to your business', saas: 'Same as competitors', customClass: 'text-accent-400', saasClass: '' },
                      { criteria: 'Maintenance', custom: 'Your responsibility', saas: 'Vendor responsibility', customClass: '', saasClass: 'text-accent-400' },
                      { criteria: 'Scalability', custom: 'Architecture-dependent', saas: 'Vendor-guaranteed', customClass: '', saasClass: 'text-accent-400' },
                    ].map((row, i) => (
                      <tr key={row.criteria} className={`border-b border-white/[0.02] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                        <td className="p-4 text-white/50 font-medium">{row.criteria}</td>
                        <td className={`p-4 ${row.customClass || 'text-white/35'}`}>{row.custom}</td>
                        <td className={`p-4 ${row.saasClass || 'text-white/35'}`}>{row.saas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <motion.div className="glass-card rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h4 className="font-heading font-semibold text-amber-400 text-sm mb-3"><i className="ri-check-double-line mr-2"></i>Build Custom Software When</h4>
                <ul className="space-y-2">
                  {['Your business process is unique — no SaaS fits', 'The software itself IS your competitive advantage', 'You need deep integration with existing systems', 'Long-term (5+ year) TCO favors ownership', 'Data sovereignty and security are non-negotiable', 'You plan to scale to 500+ users quickly'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs"><i className="ri-arrow-right-s-line text-amber-400/50 mt-0.5"></i>{item}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="glass-card rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h4 className="font-heading font-semibold text-emerald-400 text-sm mb-3"><i className="ri-check-double-line mr-2"></i>Buy SaaS When</h4>
                <ul className="space-y-2">
                  {['Your process is standard (CRM, email, HR, accounting)', 'Speed to deploy is the #1 priority', 'You have limited in-house technical resources', 'The vendor product is well-established and trusted', 'Per-user pricing is economical at your scale', 'You do not want the burden of maintenance'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/35 text-xs"><i className="ri-arrow-right-s-line text-emerald-400/50 mt-0.5"></i>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* TCO Calculator Note */}
            <motion.div className="glass-card rounded-2xl p-6 md:p-8 mb-14 text-center border border-accent-500/10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                <i className="ri-calculator-line text-xl text-accent-400"></i>
              </div>
              <h4 className="font-heading font-bold text-white mb-2">The Break-Even Math</h4>
              <p className="text-white/35 text-sm max-w-xl mx-auto">
                Custom software typically breaks even with SaaS at 3-5 years for teams of 50+ users. Beyond that, custom software saves 30-50% in total cost of ownership. Use our <a href="/calculators" onClick={(e) => { e.preventDefault(); navigate('/calculators'); }} className="text-accent-400 hover:underline">cost calculator</a> to run your numbers.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto mb-10">
              <h3 className="font-heading text-xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {[
                  { q: 'Is custom software always more expensive?', a: 'In the short term (year 1-2), yes. But by year 3-5, the total cost of ownership for custom software often drops below SaaS — especially for teams of 50+ users. SaaS per-user pricing compounds; custom software is a one-time build with maintenance costs.' },
                  { q: 'What if the SaaS vendor goes out of business?', a: 'This is a real risk. When a SaaS vendor shuts down, you have limited time to export data and find alternatives. With custom software, you own everything — the code, the database, the infrastructure. Zero vendor lock-in risk.' },
                  { q: 'Can I start with SaaS and migrate to custom later?', a: 'Absolutely. Many of our clients started with SaaS (Salesforce, Zoho, Shopify) and migrated to custom when their processes outgrew the platform. We have handled 20+ SaaS-to-custom migrations with zero data loss.' },
                  { q: 'How long does custom software take to build?', a: 'An MVP typically takes 3-4 months. A full enterprise system takes 8-12 months. The key is phased delivery — we ship working software every 2 weeks so you see value from month one, not month twelve.' },
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
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Build or Buy — Let Us Help You Decide</h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">Free TCO analysis comparing custom vs SaaS for your specific requirements. Data-driven, no sales pitch.</p>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Get Free TCO Analysis
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';

const aiFeatures = [
  {
    id: 'chat',
    icon: 'ri-robot-2-line',
    title: 'AI Chat Assistant',
    tagline: '24/7 Intelligent Customer Engagement',
    desc: 'Deploy an enterprise-grade conversational AI that understands context, remembers conversation history, and resolves 85% of customer queries without human intervention. Trained on your business data for accurate, brand-aligned responses.',
    highlights: ['NLP-powered understanding', 'Multi-language support', 'Seamless human handoff', 'Sentiment analysis', 'CRM integration'],
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20chatbot%20interface%20on%20modern%20screen%20with%20conversation%20bubbles%2C%20neural%20network%20visualization%20in%20background%2C%20sleek%20dark%20theme%20with%20warm%20orange%20and%20teal%20accents%2C%20conversational%20UI%20design%2C%20high%20detail%20tech%20photography%2C%20clean%20minimal%20workspace&width=700&height=450&seq=ai-chat-assistant&orientation=landscape',
  },
  {
    id: 'estimator',
    icon: 'ri-calculator-line',
    title: 'AI Project Estimator',
    tagline: 'Predict Costs Before You Build',
    desc: 'Upload your project requirements and our ML model — trained on 5000+ completed projects — generates accurate timeline, cost, and resource estimates in under 60 seconds. Eliminate budget surprises before they happen.',
    highlights: ['5,000+ project dataset', 'Timeline prediction', 'Resource allocation', 'Risk assessment', '60-second estimates'],
    image: 'https://readdy.ai/api/search-image?query=AI%20project%20estimation%20dashboard%20on%20computer%20screen%20showing%20cost%20breakdown%20charts%20and%20timeline%20predictions%2C%20modern%20office%20workspace%2C%20data%20visualization%20with%20warm%20orange%20accents%2C%20professional%20project%20management%20software%20interface%2C%20clean%20aesthetic&width=700&height=450&seq=ai-estimator&orientation=landscape',
  },
  {
    id: 'recommendation',
    icon: 'ri-lightbulb-flash-line',
    title: 'AI Recommendation Engine',
    tagline: 'Personalized Intelligence at Scale',
    desc: 'Our collaborative filtering and deep learning recommendation system processes millions of user interactions in real-time to surface the most relevant products, content, or services — driving 35% higher engagement and 28% conversion lift.',
    highlights: ['Real-time personalization', 'Collaborative filtering', 'A/B testing built-in', '35% engagement boost', 'Cross-platform sync'],
    image: 'https://readdy.ai/api/search-image?query=AI%20recommendation%20engine%20dashboard%20displaying%20personalized%20product%20suggestions%20and%20user%20behavior%20analytics%2C%20modern%20ecommerce%20interface%2C%20data%20flow%20visualization%2C%20warm%20gradient%20UI%2C%20contemporary%20tech%20workspace%2C%20clean%20professional%20design&width=700&height=450&seq=ai-recommendation&orientation=landscape',
  },
  {
    id: 'lead',
    icon: 'ri-user-star-line',
    title: 'AI Lead Qualification',
    tagline: 'Never Chase Dead Leads Again',
    desc: 'Our ML model scores every lead based on 50+ behavioral and demographic signals. Sales teams focus only on high-intent prospects, resulting in 45% higher conversion rates and 30% shorter sales cycles.',
    highlights: ['50+ scoring signals', 'Behavioral analysis', 'Automated nurturing', 'Salesforce integration', '45% conversion lift'],
    image: 'https://readdy.ai/api/search-image?query=AI%20lead%20scoring%20dashboard%20with%20predictive%20analytics%20charts%20showing%20lead%20quality%20scores%2C%20sales%20pipeline%20visualization%2C%20modern%20CRM%20interface%2C%20dark%20theme%20with%20teal%20accents%2C%20professional%20business%20analytics%20environment&width=700&height=450&seq=ai-lead-qual&orientation=landscape',
  },
  {
    id: 'support',
    icon: 'ri-headphone-line',
    title: 'AI Support Bot',
    tagline: 'Resolve Issues Before They Escalate',
    desc: 'Intelligent support automation that triages tickets, suggests solutions from your knowledge base, and auto-resolves common issues. Reduces ticket volume by 60% and improves CSAT scores by 25%.',
    highlights: ['Auto-ticket triage', 'Knowledge base integration', 'Solution suggestions', '60% ticket reduction', 'Multi-channel support'],
    image: 'https://readdy.ai/api/search-image?query=AI%20customer%20support%20dashboard%20on%20screen%20showing%20ticket%20management%20and%20chatbot%20analytics%2C%20modern%20helpdesk%20interface%2C%20dark%20theme%20with%20warm%20highlights%2C%20customer%20service%20technology%2C%20clean%20professional%20workspace&width=700&height=450&seq=ai-support&orientation=landscape',
  },
  {
    id: 'analyzer',
    icon: 'ri-file-search-line',
    title: 'AI Requirement Analyzer',
    tagline: 'Turn Ideas Into Actionable Specs',
    desc: 'Drop your rough project idea, business document, or voice recording — our AI extracts features, identifies gaps, generates user stories, and produces a structured PRD with effort estimates in minutes, not weeks.',
    highlights: ['Document ingestion', 'Gap analysis', 'User story generation', 'Effort estimation', 'PDF/PRD export'],
    image: 'https://readdy.ai/api/search-image?query=AI%20document%20analysis%20interface%20on%20screen%20showing%20requirement%20extraction%20and%20structured%20PRD%20generation%2C%20modern%20software%20development%20workspace%2C%20clean%20UI%20with%20warm%20accent%20colors%2C%20tech%20documentation%20visualization%2C%20professional%20environment&width=700&height=450&seq=ai-analyzer&orientation=landscape',
  },
];

const aiStats = [
  { value: '85%', label: 'Query Auto-Resolution' },
  { value: '45%', label: 'Conversion Rate Increase' },
  { value: '60%', label: 'Ticket Volume Reduction' },
  { value: '5,000+', label: 'Trained Projects Dataset' },
];

export default function AIFeatures() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[560px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-500/95 to-accent-500/10"></div>
            <div className="absolute inset-0 grid-bg opacity-15"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div className="section-tag mb-5 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}>
                <i className="ri-brain-line"></i>
                Powered by Intelligence
              </motion.div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                AI That <span className="text-gradient">Thinks</span> Before You Ask
              </h1>
              <p className="text-white/40 text-base md:text-lg max-w-xl mb-8">
                Seven AI engines working together to automate, predict, recommend, and transform — built on models trained across 5000+ enterprise projects and millions of interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' })} className="glass-btn-primary cursor-pointer">
                  Explore AI Engines
                  <i className="ri-arrow-down-line ml-2"></i>
                </button>
                <a href="https://wa.me/918130543714" target="_blank" rel="noopener noreferrer"
                  className="glass-btn cursor-pointer">
                  <i className="ri-whatsapp-line mr-2"></i>
                  Talk to an AI Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 md:py-10 bg-dark-600 border-y border-white/[0.03]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aiStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-white/30 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Grid */}
        <section id="features-grid" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="section-tag mx-auto">AI Engines</div>
              <h2 className="section-title text-white">
                Seven <span className="text-gradient">Intelligent</span> Systems
              </h2>
              <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">Each engine is purpose-built, trained on domain-specific data, and designed to integrate seamlessly with your existing stack.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiFeatures.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  className="glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-500/15 backdrop-blur-sm border border-accent-500/20 flex items-center justify-center mb-2">
                        <i className={`${feature.icon} text-accent-400 text-lg`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-white/25 text-[10px] uppercase tracking-[0.15em] mb-1">{feature.tagline}</p>
                    <h3 className="font-heading font-bold text-white text-sm mb-2">{feature.title}</h3>
                    <p className="text-white/35 text-xs leading-relaxed mb-3 line-clamp-2">{feature.desc}</p>
                    <AnimatePresence>
                      {activeFeature === feature.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-white/[0.05]">
                            <div className="flex flex-wrap gap-1.5">
                              {feature.highlights.map((h) => (
                                <span key={h} className="px-2.5 py-1 rounded-full bg-accent-500/8 border border-accent-500/10 text-accent-400 text-[10px] font-medium">{h}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="section-tag mx-auto">Integration</div>
              <h2 className="section-title text-white">
                AI That <span className="text-gradient">Plugs In</span>, Not Replaces
              </h2>
              <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">Our AI engines integrate with your existing CRM, ERP, and communication tools — no rip-and-replace required.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: '01', icon: 'ri-plug-line', title: 'Connect', desc: 'API integration with your CRM, ERP, and data sources in under 48 hours' },
                { step: '02', icon: 'ri-database-2-line', title: 'Train', desc: 'Models fine-tuned on your historical data, documents, and business rules' },
                { step: '03', icon: 'ri-test-tube-line', title: 'Validate', desc: 'A/B testing against baseline with 2-week parallel run to prove ROI' },
                { step: '04', icon: 'ri-rocket-2-line', title: 'Scale', desc: 'Gradual rollout with real-time monitoring and continuous model improvement' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="glass-card rounded-2xl p-5 text-center relative"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
                    <i className={`${item.icon} text-accent-400 text-lg`}></i>
                  </div>
                  <span className="text-accent-400 text-[10px] font-bold tracking-[0.15em]">{item.step}</span>
                  <h4 className="font-heading font-semibold text-white text-sm mt-1 mb-1.5">{item.title}</h4>
                  <p className="text-white/30 text-[11px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="section-tag mx-auto">Use Cases</div>
              <h2 className="section-title text-white">
                AI in <span className="text-gradient">Action</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { industry: 'E-Commerce', icon: 'ri-shopping-cart-line', cases: ['Product recommendations boosting AOV by 35%', 'AI chatbot handling 80% of support queries', 'Demand forecasting reducing stockouts by 60%'] },
                { industry: 'Healthcare', icon: 'ri-heart-pulse-line', cases: ['AI diagnosis assistance with 95% accuracy', 'Automated appointment scheduling', 'Patient risk stratification for preventive care'] },
                { industry: 'Finance', icon: 'ri-bank-line', cases: ['Real-time fraud detection saving ₹50Cr+', 'AI credit scoring for instant loan approval', 'Automated regulatory compliance monitoring'] },
                { industry: 'Manufacturing', icon: 'ri-settings-3-line', cases: ['Predictive maintenance reducing downtime by 60%', 'Computer vision quality inspection', 'AI-optimized supply chain routing'] },
                { industry: 'Real Estate', icon: 'ri-building-2-line', cases: ['Automated property valuation at 95% accuracy', 'AI lead scoring for 40% higher conversion', 'Virtual tour enhancement with object recognition'] },
                { industry: 'Education', icon: 'ri-graduation-cap-line', cases: ['Adaptive learning paths per student', 'AI grading reducing teacher workload by 50%', 'Early dropout prediction and intervention'] },
              ].map((uc, i) => (
                <motion.div
                  key={uc.industry}
                  className="glass-card rounded-2xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center">
                      <i className={`${uc.icon} text-accent-400`}></i>
                    </div>
                    <h4 className="font-heading font-semibold text-white text-sm">{uc.industry}</h4>
                  </div>
                  <div className="space-y-2">
                    {uc.cases.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <i className="ri-check-line text-accent-400/60 text-xs mt-0.5"></i>
                        <span className="text-white/35 text-[11px] leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-500/8 blur-[120px]"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-500/6 blur-[120px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">Ready to Put AI to Work?</h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">Let us show you how our AI engines can transform your specific business — free consultation, no strings attached.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                    Schedule AI Demo
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                  <a href="/calculators" onClick={(e) => { e.preventDefault(); navigate('/calculators'); }} className="glass-btn cursor-pointer">
                    <i className="ri-calculator-line mr-2"></i>
                    Try Cost Calculator
                  </a>
                </div>
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';

const baseCalcOptions = {
  website: {
    title: 'Website Development',
    icon: 'ri-global-line',
    basePrice: 80000,
    categories: [
      { name: 'Pages', options: [
        { label: 'Landing Page (1-3 pages)', price: 0, feature: 'pages', value: 1 },
        { label: 'Small Site (5-10 pages)', price: 50000, feature: 'pages', value: 2 },
        { label: 'Mid Site (10-25 pages)', price: 120000, feature: 'pages', value: 3 },
        { label: 'Large Site (25-50 pages)', price: 250000, feature: 'pages', value: 4 },
      ]},
      { name: 'Design', options: [
        { label: 'Template Customization', price: 0, feature: 'design', value: 1 },
        { label: 'Custom UI Design', price: 60000, feature: 'design', value: 2 },
        { label: 'Premium Branding + Design System', price: 150000, feature: 'design', value: 3 },
      ]},
      { name: 'Functionality', options: [
        { label: 'Static Website', price: 0, feature: 'func', value: 1 },
        { label: 'CMS / Blog Integration', price: 40000, feature: 'func', value: 2 },
        { label: 'E-Commerce (Shop)', price: 120000, feature: 'func', value: 3 },
        { label: 'Custom Web Application', price: 250000, feature: 'func', value: 4 },
      ]},
      { name: 'Extras', options: [
        { label: 'None', price: 0, feature: 'extra', value: 0 },
        { label: 'SEO + Analytics', price: 30000, feature: 'extra', value: 1 },
        { label: 'Multilingual Support', price: 50000, feature: 'extra', value: 2 },
        { label: 'Membership System', price: 80000, feature: 'extra', value: 3 },
        { label: 'AI Chatbot Integration', price: 100000, feature: 'extra', value: 4 },
      ]},
    ],
  },
  mobile: {
    title: 'Mobile App Development',
    icon: 'ri-smartphone-line',
    basePrice: 200000,
    categories: [
      { name: 'Platform', options: [
        { label: 'iOS Only', price: 0, feature: 'platform', value: 1 },
        { label: 'Android Only', price: 0, feature: 'platform', value: 2 },
        { label: 'Both (iOS + Android)', price: 100000, feature: 'platform', value: 3 },
      ]},
      { name: 'Complexity', options: [
        { label: 'Simple App (CRUD)', price: 0, feature: 'complexity', value: 1 },
        { label: 'Medium (API + Database)', price: 100000, feature: 'complexity', value: 2 },
        { label: 'Complex (Real-time + AI)', price: 300000, feature: 'complexity', value: 3 },
      ]},
      { name: 'Features', options: [
        { label: 'Basic', price: 0, feature: 'features', value: 1 },
        { label: 'Social + Payments', price: 80000, feature: 'features', value: 2 },
        { label: 'Chat + Live Streaming', price: 180000, feature: 'features', value: 3 },
      ]},
    ],
  },
  software: {
    title: 'Custom Software',
    icon: 'ri-settings-line',
    basePrice: 300000,
    categories: [
      { name: 'Type', options: [
        { label: 'ERP Solution', price: 500000, feature: 'type', value: 1 },
        { label: 'CRM System', price: 300000, feature: 'type', value: 2 },
        { label: 'HRMS Platform', price: 250000, feature: 'type', value: 3 },
        { label: 'Inventory Management', price: 200000, feature: 'type', value: 4 },
      ]},
      { name: 'Scale', options: [
        { label: 'Small (1-50 users)', price: 0, feature: 'scale', value: 1 },
        { label: 'Medium (50-500 users)', price: 100000, feature: 'scale', value: 2 },
        { label: 'Enterprise (500+ users)', price: 300000, feature: 'scale', value: 3 },
      ]},
      { name: 'Integration', options: [
        { label: 'Standalone', price: 0, feature: 'integration', value: 1 },
        { label: '2-3 API Integrations', price: 50000, feature: 'integration', value: 2 },
        { label: '5+ System Integration', price: 150000, feature: 'integration', value: 3 },
      ]},
    ],
  },
  marketing: {
    title: 'Digital Marketing',
    icon: 'ri-megaphone-line',
    basePrice: 30000,
    categories: [
      { name: 'Service', options: [
        { label: 'SEO Only', price: 30000, feature: 'service', value: 1 },
        { label: 'SEO + Content', price: 50000, feature: 'service', value: 2 },
        { label: 'SEO + PPC + Social', price: 100000, feature: 'service', value: 3 },
        { label: 'Full Marketing Suite', price: 180000, feature: 'service', value: 4 },
      ]},
      { name: 'Duration', options: [
        { label: '3 Months', price: 0, feature: 'duration', value: 1 },
        { label: '6 Months', price: 1.5, feature: 'duration', value: 2 },
        { label: '12 Months', price: 2.2, feature: 'duration', value: 3 },
      ]},
    ],
  },
};

type CalcType = 'website' | 'mobile' | 'software' | 'marketing';

export default function Calculators() {
  const navigate = useNavigate();
  const [calcType, setCalcType] = useState<CalcType>('website');
  const calc = baseCalcOptions[calcType];

  const [selections, setSelections] = useState<Record<string, number>>({});

  const getPrice = () => {
    let total = calc.basePrice;
    (calc as any).categories?.forEach((cat: any) => {
      cat.options.forEach((opt: any) => {
        const key = `${calcType}-${cat.feature}`;
        const selectedValue = selections[key];
        if (selectedValue === opt.value || (!selectedValue && opt.price === 0)) {
          if (key === `${calcType}-duration`) {
            total = total * opt.price;
          } else {
            total += opt.price;
          }
        }
      });
    });
    // For marketing, multiply by duration if selected
    if (calcType === 'marketing') {
      const dur = selections['marketing-duration'];
      if (dur === 2) total = Math.round(calc.basePrice * 4);
      else if (dur === 3) total = Math.round(calc.basePrice * 7);
    }
    return total;
  };

  const total = getPrice();
  const minBudget = getPrice() * 0.85;
  const maxBudget = getPrice() * 1.15;

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <div className="section-tag mb-5">Instant Pricing</div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3">
                Project <span className="text-gradient">Cost Calculator</span>
              </h1>
              <p className="text-white/40 text-base max-w-xl">Get an instant, no-commitment estimate for your project. Adjust options to see real-time pricing.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Calculator Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {(Object.keys(baseCalcOptions) as CalcType[]).map((key) => (
              <button
                key={key}
                onClick={() => { setCalcType(key); setSelections({}); }}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  calcType === key
                    ? 'glass-card bg-accent-500/10 border-accent-500/20 text-white'
                    : 'text-white/40 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <i className={baseCalcOptions[key].icon}></i>
                {baseCalcOptions[key].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
            {/* Options */}
            <div className="space-y-6">
              {(calc as any).categories.map((cat: any, catIdx: number) => (
                <div key={cat.name} className="glass-card rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-white text-sm mb-4">{cat.name}</h3>
                  <div className="space-y-2">
                    {cat.options.map((opt: any) => {
                      const key = `${calcType}-${cat.feature}`;
                      const selected = selections[key] === opt.value || (!selections[key] && opt.price === 0);
                      return (
                        <button
                          key={opt.label}
                          onClick={() => setSelections((s) => ({ ...s, [key]: opt.value }))}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                            selected
                              ? 'bg-accent-500/10 border border-accent-500/20 text-white'
                              : 'bg-white/[0.02] border border-white/[0.04] text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span className="text-xs">{opt.label}</span>
                          <span className={`text-xs font-semibold whitespace-nowrap ${selected ? 'text-accent-400' : 'text-white/30'}`}>
                            {opt.price === 0 ? 'Included' : cat.name === 'Duration' ? `${opt.price}x` : `+ ₹${(opt.price / 1000).toFixed(0)}K`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="glass-card rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-500/8 blur-[60px]"></div>
                <div className="relative z-10">
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-4">Estimated Investment</p>
                  <motion.p
                    key={total}
                    className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ₹{(total / 100000).toFixed(1)}L
                  </motion.p>
                  <p className="text-white/25 text-xs mb-6">Range: ₹{((minBudget / 100000).toFixed(1))}L - ₹{((maxBudget / 100000).toFixed(1))}L</p>

                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary w-full justify-center mb-3 cursor-pointer"
                  >
                    Get Detailed Quote
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                  <a href="https://wa.me/918130543714" target="_blank" rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-green-500/10 border border-green-500/15 text-green-400 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-green-500/15 transition-all cursor-pointer">
                    <i className="ri-whatsapp-line"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* What's Included */}
              <div className="glass-card rounded-2xl p-5">
                <h4 className="font-heading font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <i className="ri-check-double-line text-accent-400"></i>
                  Always Included
                </h4>
                <div className="space-y-2">
                  {['Dedicated Project Manager', 'Source Code Ownership', '3 Months Support', 'Documentation', 'Free Consultation'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/40 text-xs">
                      <i className="ri-check-line text-accent-400/60 text-[10px]"></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Info */}
        <section className="py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: 'ri-timer-line', title: '2-6 Weeks', desc: 'Average delivery timeline for standard projects' },
                { icon: 'ri-money-dollar-circle-line', title: '300% Avg ROI', desc: 'Clients report average ROI within 18 months' },
                { icon: 'ri-team-line', title: 'Dedicated Team', desc: 'Full project team from day one to completion' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
                    <i className={`${item.icon} text-accent-400`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
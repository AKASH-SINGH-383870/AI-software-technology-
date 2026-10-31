import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { getServiceBySlug, getRelatedServices } from '@/mocks/services';
import { servicePricing, type PricingPlan } from '@/mocks/pricing';
import type { ServiceData } from '@/mocks/services';
import { testimonials } from '@/mocks/testimonials';

const heroImages: Record<string, string> = {
  'website-development': 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20multiple%20screens%20showing%20responsive%20website%20designs%20in%20a%20dark%20studio%2C%20code%20editor%20on%20main%20screen%2C%20subtle%20cyan%20and%20warm%20amber%20accent%20lighting%2C%20minimal%20clean%20desk%2C%20professional%20tech%20environment%2C%20atmospheric%20photography%20with%20shallow%20depth%20of%20field&width=1600&height=900&seq=svc-hero-web&orientation=landscape',
  'mobile-app-development': 'https://readdy.ai/api/search-image?query=Smartphone%20and%20tablet%20displaying%20modern%20mobile%20app%20interfaces%20on%20a%20clean%20white%20desk%2C%20designer%20workspace%20with%20sketches%20and%20color%20swatches%2C%20natural%20daylight%2C%20minimal%20aesthetic%20with%20plants%2C%20contemporary%20UI%20design%20showcase%2C%20warm%20and%20bright%20atmosphere%2C%20high%20detail%20product%20photography&width=1600&height=900&seq=svc-hero-mob&orientation=landscape',
  'custom-software': 'https://readdy.ai/api/search-image?query=Software%20architecture%20blueprint%20visualization%20displayed%20on%20large%20curved%20monitor%2C%20dark%20minimal%20office%20with%20neon%20accent%20lights%2C%20connected%20system%20diagrams%20and%20data%20flow%20charts%2C%20futuristic%20workspace%2C%20professional%20developer%20environment%2C%20atmospheric%20tech%20photography&width=1600&height=900&seq=svc-hero-cus&orientation=landscape',
  'ai-automation': 'https://readdy.ai/api/search-image?query=AI%20neural%20network%20visualization%20and%20data%20flow%20on%20holographic%20display%2C%20futuristic%20dark%20lab%20with%20blue%20and%20purple%20ambient%20lighting%2C%20abstract%20circuit%20patterns%2C%20artificial%20intelligence%20concept%2C%20clean%20modern%20research%20environment%2C%20atmospheric%20cinematic%20photography&width=1600&height=900&seq=svc-hero-ai&orientation=landscape',
  'erp-solutions': 'https://readdy.ai/api/search-image?query=Enterprise%20dashboard%20displayed%20on%20large%20screens%20in%20corporate%20office%2C%20multiple%20monitors%20showing%20business%20analytics%20charts%20and%20KPIs%2C%20modern%20glass%20office%20with%20city%20view%2C%20professional%20atmosphere%2C%20warm%20golden%20hour%20lighting%2C%20high%20detail%20corporate%20photography&width=1600&height=900&seq=svc-hero-erp&orientation=landscape',
  'crm-solutions': 'https://readdy.ai/api/search-image?query=Sales%20dashboard%20and%20customer%20relationship%20metrics%20on%20modern%20laptop%20screen%2C%20collaborative%20workspace%20with%20sticky%20notes%20and%20whiteboard%2C%20warm%20office%20ambiance%2C%20professional%20team%20environment%2C%20natural%20light%20streaming%20through%20windows%2C%20high%20detail%20business%20photography&width=1600&height=900&seq=svc-hero-crm&orientation=landscape',
  'digital-marketing': 'https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20on%20large%20monitor%20with%20colorful%20charts%20and%20graphs%2C%20creative%20workspace%20with%20mood%20boards%2C%20warm%20vibrant%20lighting%2C%20social%20media%20icons%20floating%20display%2C%20modern%20agency%20studio%2C%20bright%20energetic%20atmosphere%2C%20high%20detail%20photography&width=1600&height=900&seq=svc-hero-dm&orientation=landscape',
  'cloud-solutions': 'https://readdy.ai/api/search-image?query=Cloud%20server%20racks%20with%20glowing%20blue%20LED%20lights%20in%20modern%20data%20center%2C%20network%20infrastructure%20visualization%20on%20transparent%20screen%2C%20dark%20atmospheric%20lighting%20with%20cyan%20accents%2C%20futuristic%20IT%20environment%2C%20professional%20tech%20photography%2C%20high%20detail%20industrial%20aesthetic&width=1600&height=900&seq=svc-hero-cloud&orientation=landscape',
  'ui-ux-design': 'https://readdy.ai/api/search-image?query=Design%20studio%20workspace%20with%20large%20monitor%20showing%20Figma%20UI%20design%20components%20and%20color%20palettes%2C%20sketch%20notebooks%20and%20pens%20on%20wooden%20desk%2C%20natural%20daylight%20from%20large%20window%2C%20minimal%20creative%20environment%20with%20plants%2C%20warm%20aesthetic%2C%20high%20detail%20design%20photography&width=1600&height=900&seq=svc-hero-ui&orientation=landscape',
};

const processSteps = [
  { icon: 'ri-chat-1-line', title: 'Discovery Call', desc: 'We discuss your goals, requirements, and timeline to align on expectations.' },
  { icon: 'ri-lightbulb-line', title: 'Strategy & Planning', desc: 'Detailed project roadmap, architecture design, and technology selection.' },
  { icon: 'ri-code-line', title: 'Development', desc: 'Agile development with weekly sprints, regular demos, and continuous feedback.' },
  { icon: 'ri-test-tube-line', title: 'Testing & QA', desc: 'Rigorous automated and manual testing to ensure bug-free delivery.' },
  { icon: 'ri-rocket-line', title: 'Deployment', desc: 'Smooth deployment with zero-downtime migration and performance monitoring.' },
  { icon: 'ri-customer-service-2-line', title: 'Ongoing Support', desc: 'Continuous maintenance, updates, and dedicated support post-launch.' },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      className={`glass-card-hover rounded-2xl p-6 md:p-7 relative overflow-hidden flex flex-col ${
        plan.popular ? 'border-accent-400/30 bg-accent-500/[0.04]' : ''
      }`}
      whileHover={{ y: -6 }}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-accent-500/15 text-accent-400 text-[10px] font-bold uppercase tracking-wider">
            Popular
          </span>
        </div>
      )}
      <h4 className="font-heading font-semibold text-white text-lg mb-1">{plan.name}</h4>
      <p className="text-white/30 text-xs mb-4">{plan.desc}</p>
      <div className="mb-4">
        <span className="text-white font-heading font-bold text-2xl md:text-3xl">{plan.price}</span>
        <span className="text-white/30 text-xs ml-1">{plan.period}</span>
      </div>
      <ul className="space-y-2.5 mb-6 flex-grow">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
            <i className="ri-check-line text-accent-400 text-sm mt-0.5 flex-shrink-0"></i>
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full cursor-pointer py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
        plan.popular
          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]'
          : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white'
      }`}>
        {plan.cta}
      </button>
    </motion.div>
  );
}

function ServiceNotFound({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
          <i className="ri-question-line text-3xl text-white/30"></i>
        </div>
        <h2 className="font-heading text-2xl font-bold text-white mb-2">Service Not Found</h2>
        <p className="text-white/30 text-sm mb-6">The service you are looking for does not exist.</p>
        <button onClick={onBack} className="glass-btn cursor-pointer">
          View All Services
          <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}

function ServiceFAQ({ faqs }: { faqs: ServiceData['faqs'] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          className={`glass-card rounded-2xl overflow-hidden ${openIdx === i ? 'border-white/[0.1] bg-white/[0.04]' : ''}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
          >
            <span className="font-heading font-semibold text-white text-sm md:text-base pr-4">{faq.q}</span>
            <motion.div
              className="w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center flex-shrink-0"
              animate={{ rotate: openIdx === i ? 45 : 0 }}
            >
              <i className="ri-add-line text-white/50 text-sm"></i>
            </motion.div>
          </button>
          {openIdx === i && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden">
              <p className="text-white/40 text-sm leading-relaxed pb-5 md:pb-6 px-5 md:px-6">{faq.a}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => { if (slug) window.scrollTo(0, 0); }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-dark-500 text-white">
        <Navbar />
        <main className="pt-24">
          <ServiceNotFound onBack={() => navigate('/services')} />
        </main>
        <Footer />
      </div>
    );
  }

  const pricing = servicePricing[service.slug] || [];
  const heroImage = heroImages[service.slug] || heroImages['website-development'];
  const related = getRelatedServices(service.relatedSlugs);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: { '@type': 'Organization', name: 'Digi India Solutions', url: 'https://www.digiindiasolutions.com' },
    description: service.overview,
    areaServed: { '@type': 'Country', 'name': 'India' },
    url: `https://www.digiindiasolutions.com/services/${service.slug}`,
  };

  const faqSchema = service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

        <Breadcrumb />

        {/* Hero with Background Image */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt={`${service.title} by Digi India Solutions - ${service.tagline}`} title={`${service.title} Services | Digi India Solutions`} loading="eager" width="1600" height="900" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/50 to-dark-500"></div>
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full pt-20">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="section-tag mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {service.title}
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {service.tagline}
              </motion.h1>
              <motion.p
                className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {service.overview}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer">
                  Get Free Quote
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <button onClick={() => navigate('/services')} className="glass-btn cursor-pointer">
                  All Services
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Benefits</div>
              <h2 className="section-title text-white">
                Why Choose Our <span className="text-gradient">{service.title}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="glass-card-hover rounded-2xl p-6 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                    <i className={`${b.icon} text-2xl text-accent-400`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{b.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        {pricing.length > 0 && (
          <section className="py-16 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="section-tag mx-auto">Pricing</div>
                <h2 className="section-title text-white">
                  <span className="text-gradient">Plans</span> That Fit Your Budget
                </h2>
                <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
                  All plans include free consultation. Contact us for custom enterprise pricing.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {pricing.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <PricingCard plan={plan} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Our Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Process</div>
              <h2 className="section-title text-white">
                How We <span className="text-gradient">Deliver</span>
              </h2>
              <p className="text-white/40 text-sm mt-3 max-w-lg mx-auto">
                A proven 6-step process that ensures quality delivery every time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="glass-card-hover rounded-2xl p-5 text-center group relative"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-500/15 border border-accent-400/20 flex items-center justify-center text-accent-400 text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-white/[0.06] flex items-center justify-center mb-3">
                    <i className={`${step.icon} text-xl text-accent-400`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-1.5">{step.title}</h4>
                  <p className="text-white/35 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features + Tech Stack */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-semibold text-white text-xl mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <i className="ri-check-double-line text-accent-400"></i>
                  </div>
                  What You Get
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <motion.div
                      key={f}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-accent-400 text-[10px]"></i>
                      </div>
                      <span className="text-white/55 text-sm">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <i className="ri-stack-line text-accent-400"></i>
                    </div>
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-white/50 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <i className="ri-building-4-line text-accent-400"></i>
                    </div>
                    Industries Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((ind) => (
                      <span key={ind} className="px-3 py-1.5 rounded-lg bg-accent-500/5 border border-accent-500/10 text-sm text-accent-400/80 font-medium">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-10">
                  <div className="section-tag mx-auto">FAQ</div>
                  <h2 className="section-title text-white mb-2">Common Questions</h2>
                </div>
                <ServiceFAQ faqs={service.faqs} />
              </motion.div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Testimonials</div>
              <h2 className="section-title text-white">
                What Clients Say About Our <span className="text-gradient">{service.title}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials
                .filter((t) => t.service === service.slug)
                .map((t, i) => (
                  <motion.div
                    key={t.id}
                    className="glass-card rounded-2xl p-6 relative"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="absolute top-4 right-4 text-white/[0.03]">
                      <i className="ri-double-quotes-r text-4xl"></i>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/15 flex items-center justify-center text-white font-bold text-xs border border-white/[0.06]">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-white font-heading font-semibold text-sm">{t.name}</p>
                        <p className="text-white/25 text-[11px]">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 relative z-10">"{t.quote}"</p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: t.rating }).map((_, r) => (
                        <i key={r} className="ri-star-fill text-accent-400 text-[10px]"></i>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {related.length > 0 && (
          <section className="py-16 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="section-tag mx-auto">Related</div>
                <h2 className="section-title text-white">Services You May Also Need</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.slug}
                    className="glass-card-hover rounded-2xl p-6 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    onClick={() => { navigate(`/services/${rel.slug}`); window.scrollTo(0, 0); }}
                  >
                    <h4 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-accent-300">{rel.title}</h4>
                    <p className="text-white/30 text-sm mb-3">{rel.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-accent-400 text-xs font-semibold">
                      Explore
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-primary-500/8"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/40 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Let&apos;s build something amazing together. Get in touch for a free consultation and project estimate.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Schedule Free Consultation
                    <i className="ri-calendar-line ml-2"></i>
                  </motion.a>
                  <a href="tel:+918130543714" className="glass-btn cursor-pointer">
                    <i className="ri-phone-line mr-2"></i>
                    +91 81305 43714
                  </a>
                  <a href="tel:+919990390519" className="glass-btn cursor-pointer">
                    <i className="ri-phone-line mr-2"></i>
                    +91 99903 90519
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
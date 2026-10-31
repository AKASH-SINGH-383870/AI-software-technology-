import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';

export interface IndustryMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
}

export interface IndustryData {
  title: string;
  slug: string;
  icon: string;
  heroImage: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  modules: string[];
  benefits: { value: string; label: string }[];
  caseStudies: { title: string; desc: string; image: string }[];
  meta: IndustryMeta;
}

interface Props {
  data: IndustryData;
}

const companyInfo = {
  name: 'Digi India Solutions',
  phone: '+91 81305 43714',
  email: 'info@digiindiasolutions.com',
  address: 'House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, Delhi – 110085, India',
  url: 'https://www.digiindiasolutions.com',
  latitude: '28.7352',
  longitude: '77.1290',
};

export default function IndustryDetail({ data }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = data.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) metaKw.setAttribute('content', data.meta.keywords);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', data.meta.canonicalUrl);
  }, [data]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.title} Solutions - ${companyInfo.name}`,
    description: data.meta.description,
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      telephone: companyInfo.phone,
      email: companyInfo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'House No. 158-159, Pocket-10, Sector-24, Rohini',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110085',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: companyInfo.latitude, longitude: companyInfo.longitude },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
      ],
    },
    areaServed: { '@type': 'City', name: 'Delhi' },
    serviceType: data.title,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `What ${data.title} software solutions does ${companyInfo.name} provide?`, acceptedAnswer: { '@type': 'Answer', text: `${companyInfo.name} provides comprehensive ${data.title.toLowerCase()} technology solutions including ${data.modules.slice(0, 4).join(', ')}, and more — all customized for businesses in Delhi NCR and across India.` } },
      { '@type': 'Question', name: `How can ${data.title.toLowerCase()} technology benefit my business?`, acceptedAnswer: { '@type': 'Answer', text: `${data.title} technology solutions deliver measurable results: ${data.benefits.map(b => `${b.value} ${b.label.toLowerCase()}`).join(', ')}. Our solutions are built specifically for Indian businesses.` } },
      { '@type': 'Question', name: `Do you provide ${data.title.toLowerCase()} solutions for small businesses in Delhi?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${companyInfo.name} offers scalable ${data.title.toLowerCase()} solutions for businesses of all sizes — from startups to large enterprises across Delhi, Rohini, NCR, and pan-India.` } },
      { '@type': 'Question', name: `What is the cost of ${data.title.toLowerCase()} software?`, acceptedAnswer: { '@type': 'Answer', text: `The cost depends on your specific requirements, modules needed, and scale. Contact ${companyInfo.name} at ${companyInfo.phone} for a free consultation and customized quote for your ${data.title.toLowerCase()} needs.` } },
      { '@type': 'Question', name: `How long does it take to implement ${data.title.toLowerCase()} solutions?`, acceptedAnswer: { '@type': 'Answer', text: `Implementation timelines vary based on complexity and modules. Typically, ${data.title.toLowerCase()} solutions take 6-16 weeks for full deployment. We also offer phased rollouts to minimize disruption to your operations.` } },
    ],
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}></script>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}></script>

      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="pt-20 pb-0 bg-dark-500">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Breadcrumb customLabel={data.title} customPath={`/industries/${data.slug}`} skipWrapper />
          </div>
        </div>

        {/* Hero */}
        <section className="relative min-h-[380px] md:min-h-[500px] flex items-center overflow-hidden">
          <img
            src={data.heroImage}
            alt={`${data.title} technology solutions by ${companyInfo.name} in Delhi India`}
            title={`${data.title} Software Solutions - ${companyInfo.name}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            width={1600}
            height={700}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-500/90 via-dark-500/60 to-dark-500/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/30 to-transparent"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <motion.div className="section-tag mb-5 flex items-center gap-2">
                <i className={data.icon}></i>
                {data.title} Solutions in Delhi NCR
              </motion.div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">{data.title}</span> Technology Solutions
              </h1>
              <p className="text-white/60 text-base md:text-lg max-w-xl">
                End-to-end {data.title.toLowerCase()} software solutions designed for businesses in Delhi, Rohini, NCR, and across India. Transforming operations with digital innovation by {companyInfo.name}.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Challenges + Solutions */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-tag mb-6">Industry Challenges</div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">Problems We Solve in <span className="text-gradient">{data.title}</span></h2>
                <div className="space-y-4">
                  {data.challenges.map((c, i) => (
                    <motion.div
                      key={c.title}
                      className="glass-card rounded-xl p-5 border-l border-l-accent-500/40"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <h4 className="font-heading font-semibold text-white text-sm mb-1">{c.title}</h4>
                      <p className="text-white/30 text-xs leading-relaxed">{c.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="section-tag mb-6">Our Solutions</div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">How We <span className="text-gradient">Transform</span> {data.title}</h2>
                <div className="space-y-4">
                  {data.solutions.map((s, i) => (
                    <motion.div
                      key={s.title}
                      className="glass-card rounded-xl p-5 border-r border-r-accent-500/40"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <h4 className="font-heading font-semibold text-white text-sm mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-accent-500/15 flex items-center justify-center text-[10px] text-accent-400">{i + 1}</span>
                        {s.title}
                      </h4>
                      <p className="text-white/30 text-xs leading-relaxed ml-7">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="section-tag mx-auto">Modules</div>
              <h2 className="section-title text-white">
                Complete <span className="text-gradient">{data.title}</span> Suite
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.modules.map((mod, i) => (
                <motion.div
                  key={mod}
                  className="glass-card-hover rounded-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-accent-400 text-sm"></i>
                  </div>
                  <span className="text-white/60 text-xs">{mod}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="section-tag mx-auto">Results</div>
              <h2 className="section-title text-white">
                <span className="text-gradient">{data.title}</span> Impact
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.p
                    className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                  >
                    {b.value}
                  </motion.p>
                  <p className="text-white/30 text-xs">{b.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        {data.caseStudies.length > 0 && (
          <section className="py-16 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>
                <div className="section-tag mx-auto">Success Story</div>
                <h2 className="section-title text-white">
                  <span className="text-gradient">{data.title}</span> Case Study
                </h2>
              </motion.div>

              {data.caseStudies.map((cs, i) => (
                <motion.div
                  key={cs.title}
                  className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <img
                    src={cs.image}
                    alt={`${cs.title} - ${data.title} case study by ${companyInfo.name}`}
                    title={`${cs.title} - ${data.title} Success Story`}
                    className="w-full h-56 md:h-full object-cover object-top"
                    width={800}
                    height={450}
                    loading="lazy"
                  />
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h4 className="font-heading font-bold text-white text-lg mb-3">{cs.title}</h4>
                    <p className="text-white/35 text-sm leading-relaxed">{cs.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Ready to Transform Your {data.title} Operations?
                </h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">
                  Book a free consultation to discuss your {data.title.toLowerCase()} technology needs. Serving businesses in Delhi, Rohini, NCR, and across India.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="glass-btn-primary cursor-pointer whitespace-nowrap">
                    Get Free Consultation
                    <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                  <a href="https://wa.me/918130543714" target="_blank" rel="noopener noreferrer"
                    className="glass-btn cursor-pointer whitespace-nowrap">
                    <i className="ri-whatsapp-line mr-2"></i>
                    Chat on WhatsApp
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
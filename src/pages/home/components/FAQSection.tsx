import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'We specialize in React, Next.js, Node.js, Laravel, Python, Flutter, and cloud platforms including AWS, Azure, and Google Cloud. Our team also has deep expertise in AI/ML technologies including OpenAI, Claude, and custom model development.',
  },
  {
    q: 'How long does it take to build a custom software solution?',
    a: 'Timelines vary based on complexity. A typical website takes 4-8 weeks, mobile apps 8-16 weeks, and enterprise ERP solutions 3-6 months. We follow agile methodology with regular milestones so you see progress continuously.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Absolutely. We offer comprehensive post-launch support including 24/7 monitoring, regular updates, security patches, and feature enhancements. Our support packages are flexible and tailored to your needs.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer flexible engagement models including fixed-price projects, time &amp; material, and dedicated team hiring. Every project starts with a free consultation where we understand your needs and provide a transparent estimate.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes, our solutions are designed to integrate seamlessly with your existing infrastructure. We have extensive experience with API integrations, legacy system modernization, and hybrid cloud deployments.',
  },
];

export default function FAQSection() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-dark-600">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-14 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag mx-auto">FAQ</div>
            <h2 className="section-title text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                  openIndex === i ? 'border-white/[0.1] bg-white/[0.05]' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="font-heading font-semibold text-white text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    className="w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="ri-add-line text-white/50 text-sm"></i>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/40 text-sm leading-relaxed pb-5 md:pb-6 px-5 md:px-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="glass-btn cursor-pointer inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Still Have Questions? Contact Us
              <i className="ri-arrow-right-line ml-2"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
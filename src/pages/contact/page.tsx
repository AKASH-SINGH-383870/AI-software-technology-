import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { usePageSEO } from '@/hooks/usePageSEO';

const contactInfo = [
  {
    icon: 'ri-phone-line',
    title: 'Primary Phone',
    value: '+91 81305 43714',
    link: 'tel:+918130543714',
    color: 'from-primary-500/20 to-primary-400/10',
  },
  {
    icon: 'ri-phone-line',
    title: 'Secondary Phone',
    value: '+91 99903 90519',
    link: 'tel:+919990390519',
    color: 'from-primary-400/20 to-accent-500/10',
  },
  {
    icon: 'ri-mail-line',
    title: 'Email',
    value: 'info@digiindiasolutions.com',
    link: 'mailto:info@digiindiasolutions.com',
    color: 'from-accent-500/20 to-accent-400/10',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Office Address',
    value: 'House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085',
    link: 'https://maps.google.com/?q=Digi+India+Solutions+Rohini+New+Delhi',
    color: 'from-primary-500/20 to-accent-500/10',
  },
  {
    icon: 'ri-time-line',
    title: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    link: '#',
    color: 'from-accent-400/20 to-primary-500/10',
  },
];

const socialLinks = [
  { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/digiindiasolutions/', label: 'LinkedIn' },
  { icon: 'ri-twitter-x-fill', href: 'https://twitter.com/digiindiasolutions', label: 'Twitter' },
  { icon: 'ri-instagram-line', href: 'https://www.instagram.com/digiindiasolutions/', label: 'Instagram' },
  { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/digiindiasolution/', label: 'Facebook' },
  { icon: 'ri-youtube-fill', href: 'https://www.youtube.com/@digiindiasolutions', label: 'YouTube' },
];

const serviceOptions = [
  'Website Development',
  'Mobile App Development',
  'Custom Software',
  'AI & Automation',
  'ERP Solutions',
  'CRM Solutions',
  'Digital Marketing',
  'Cloud Solutions',
  'UI/UX Design',
  'Other',
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  usePageSEO({
    title: 'Contact Us | Digi India Solutions - Get Free IT Consultation | +91 81305 43714',
    description: 'Contact Digi India Solutions at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085. Call +91 81305 43714 or +91 99903 90519. Email info@digiindiasolutions.com for website development, mobile apps, AI automation, ERP, CRM, and digital marketing services.',
    keywords: 'contact Digi India Solutions, get quote, free consultation, IT company contact Delhi, software development inquiry, +91 81305 43714, +91 99903 90519',
    canonical: 'https://www.digiindiasolutions.com/contact',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('company_alt') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => {
      if (key !== 'company_alt') data[key] = String(val);
    });

    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim() || !data.message?.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d9hs9fghpes2mi34rs40', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data),
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = serverMsg?.toLowerCase().includes('spam') || serverMsg?.toLowerCase().includes('form data is spam');

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(serverMsg || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="absolute inset-0 aurora-bg"></div>
          <div className="absolute inset-0 grid-bg"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Get In Touch</div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Let&apos;s <span className="text-gradient">Start a Project</span>
              </h1>
              <p className="text-white/40 text-base md:text-lg">
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="relative z-10 -mt-8 max-w-[1400px] mx-auto px-6 md:px-10 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="glass-card-hover rounded-2xl p-5 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${info.color} border border-white/[0.06] flex items-center justify-center mb-3`}>
                  <i className={`${info.icon} text-xl text-accent-400`}></i>
                </div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{info.title}</div>
                <div className="text-white text-sm font-medium">{info.value}</div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Form */}
              <motion.div
                className="glass-card rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-semibold text-white text-xl mb-6">Send Us a Message</h3>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent-500/10 flex items-center justify-center mb-4">
                      <i className="ri-check-line text-2xl text-accent-400"></i>
                    </div>
                    <h4 className="font-heading font-semibold text-white text-lg mb-2">Message Sent!</h4>
                    <p className="text-white/40 text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 glass-btn cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    data-readdy-form="d9ie9a4oq4dpg2lrnbcg"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="company_alt"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                      className="hp-field"
                    ></input>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="John Doe"
                        ></input>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="john@company.com"
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Mobile Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="+91 81305 43714"
                        ></input>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">WhatsApp Number</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="+91 81305 43714"
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="Your Company"
                        ></input>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="India"
                        ></input>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">City</label>
                        <input
                          type="text"
                          name="city"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                          placeholder="New Delhi"
                        ></input>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Service Required</label>
                        <select
                          name="service"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                          style={{ backgroundImage: 'none' }}
                        >
                          <option value="" className="bg-dark-500 text-white">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-dark-500 text-white">{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Project Budget</label>
                        <select
                          name="budget"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                          style={{ backgroundImage: 'none' }}
                        >
                          <option value="" className="bg-dark-500 text-white">Select budget...</option>
                          <option value="₹25K-₹50K" className="bg-dark-500 text-white">₹25,000 – ₹50,000</option>
                          <option value="₹50K-₹1L" className="bg-dark-500 text-white">₹50,000 – ₹1,00,000</option>
                          <option value="₹1L-₹3L" className="bg-dark-500 text-white">₹1,00,000 – ₹3,00,000</option>
                          <option value="₹3L-₹10L" className="bg-dark-500 text-white">₹3,00,000 – ₹10,00,000</option>
                          <option value="₹10L+" className="bg-dark-500 text-white">₹10,00,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/40 text-xs mb-1.5">Project Timeline</label>
                        <select
                          name="timeline"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                          style={{ backgroundImage: 'none' }}
                        >
                          <option value="" className="bg-dark-500 text-white">Select timeline...</option>
                          <option value="Urgent (1-2 weeks)" className="bg-dark-500 text-white">Urgent (1–2 weeks)</option>
                          <option value="Short (1 month)" className="bg-dark-500 text-white">Short (1 month)</option>
                          <option value="Medium (1-3 months)" className="bg-dark-500 text-white">Medium (1–3 months)</option>
                          <option value="Long (3-6 months)" className="bg-dark-500 text-white">Long (3–6 months)</option>
                          <option value="Ongoing" className="bg-dark-500 text-white">Ongoing / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">File Upload (Optional)</label>
                      <div className="relative">
                        <input
                          type="file"
                          name="attachment"
                          className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white/50 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-accent-500/15 file:text-accent-400 hover:file:bg-accent-500/25 focus:outline-none focus:border-accent-400/40 transition-all cursor-pointer"
                        />
                      </div>
                      <div className="text-right text-white/20 text-[10px] mt-1">Max 10MB · PDF, DOC, JPG, PNG</div>
                    </div>

                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Project Description *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        maxLength={500}
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                      ></textarea>
                      <div className="text-right text-white/20 text-xs mt-1">Max 500 characters</div>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <i className="ri-error-warning-line"></i>
                        {errorMsg}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full glass-btn-primary cursor-pointer disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center gap-2">
                          <i className="ri-loader-4-line animate-spin"></i>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <i className="ri-send-plane-line"></i>
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Map + Social */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6244666711914!2d77.0841007755044!3d28.730766875611323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1784969452127!5m2!1sen!2sin"
                    width="100%"
                    height="360"
                    style={{ border: 0, borderRadius: '20px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Digi India Solutions - Rohini, New Delhi Office"
                  />
                </div>

                {/* Map Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://maps.google.com/?q=Digi+India+Solutions+Rohini+New+Delhi+110085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold hover:bg-accent-500/15 transition-all cursor-pointer"
                  >
                    <i className="ri-direction-line"></i>
                    Get Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Digi+India+Solutions/@28.7307669,77.0841008,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm font-semibold hover:bg-white/[0.06] hover:text-white transition-all cursor-pointer"
                  >
                    <i className="ri-external-link-line"></i>
                    Open in Google Maps
                  </a>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-heading font-semibold text-white text-sm mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-accent-400 hover:bg-white/[0.06] hover:border-accent-400/20 transition-all cursor-pointer"
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918130543714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover rounded-2xl p-5 flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-xl text-green-400"></i>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">Chat on WhatsApp</div>
                    <div className="text-white/30 text-xs">Get instant replies during business hours</div>
                  </div>
                  <i className="ri-arrow-right-line text-white/20 group-hover:text-accent-400 ml-auto transition-colors"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
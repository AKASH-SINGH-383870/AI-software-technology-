import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceLinks = [
  { label: 'Website Development', path: '/services/website-development' },
  { label: 'Mobile App Development', path: '/services/mobile-app-development' },
  { label: 'Custom Software', path: '/services/custom-software' },
  { label: 'CRM Solutions', path: '/services/crm-solutions' },
  { label: 'ERP Solutions', path: '/services/erp-solutions' },
  { label: 'AI & Automation', path: '/services/ai-automation' },
  { label: 'Digital Marketing', path: '/services/digital-marketing' },
  { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
  { label: 'UI/UX Design', path: '/services/ui-ux-design' },
  { label: 'Cyber Security', path: '/services/custom-software' },
];

const industryLinks = [
  { label: 'Healthcare', path: '/industries/healthcare' },
  { label: 'Education', path: '/industries/education' },
  { label: 'Manufacturing', path: '/industries/manufacturing' },
  { label: 'Retail', path: '/industries/retail' },
  { label: 'Finance', path: '/industries/finance' },
  { label: 'Hospitality', path: '/industries/hospitality' },
  { label: 'Construction', path: '/industries/construction' },
  { label: 'Real Estate', path: '/industries/real-estate' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blogs' },
  { label: 'Sitemap', path: '/sitemap' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '#' },
  { label: 'Terms of Service', path: '#' },
  { label: 'Refund Policy', path: '#' },
  { label: 'Cancellation Policy', path: '#' },
  { label: 'Sitemap', path: '#' },
];

export default function Footer() {
  const navigate = useNavigate();
  const [newsStatus, setNewsStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsError, setNewsError] = useState('');

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path !== '#') navigate(path);
  };

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website_alt') as HTMLInputElement)?.value;
    if (honeypot?.trim()) { setNewsStatus('success'); return; }

    const fd = new FormData(form);
    try {
      const res = await fetch('https://readdy.ai/api/form/d9hski8h9dsfbuoi5jqg', { method: 'POST', body: fd });
      const text = await res.text();
      const data = JSON.parse(text);
      if (res.ok && data.code === 'OK') { setNewsStatus('success'); form.reset(); }
      else { setNewsStatus('error'); setNewsError(data?.meta?.message || 'Error occurred.'); }
    } catch { setNewsStatus('error'); setNewsError('Network error.'); }
  };

  return (
    <footer className="relative bg-dark-600 border-t border-white/[0.03]">
      <div className="h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" onClick={(e) => handleNav(e, '/')} className="flex items-center gap-3 mb-4 cursor-pointer">
              <img
                src="https://storage.readdy-site.link/project_files/53df1ac6-05af-419a-94b5-8b6b681d7726/2db05f5c-c751-42a3-a7ae-9d1824379672_compressed_1701325633456-removebg-preview.webp"
                alt="Digi India Solutions"
                className="h-12 md:h-14 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </a>
            <p className="text-white/30 text-xs leading-relaxed mb-4 max-w-xs">
              Empowering Businesses Through Technology &amp; AI. Full-service software development company delivering world-class digital products across 15+ industries.
            </p>

            {/* Office */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <i className="ri-map-pin-line text-accent-400"></i>
                <span>House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, Delhi – 110085, India</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <i className="ri-phone-line text-accent-400"></i>
                <a href="tel:+918130543714" className="hover:text-white transition-colors">+91 81305 43714</a>
                <span className="text-white/15">|</span>
                <a href="tel:+919990390519" className="hover:text-white transition-colors">+91 99903 90519</a>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <i className="ri-mail-line text-accent-400"></i>
                <span>info@digiindiasolutions.com</span>
              </div>
              <a
                href="https://wa.me/918130543714"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 text-xs hover:text-green-300 transition-colors"
              >
                <i className="ri-whatsapp-line"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/digiindiasolution/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-facebook-fill text-xs"></i>
              </a>
              <a href="https://www.linkedin.com/company/digiindiasolutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-linkedin-fill text-xs"></i>
              </a>
              <a href="https://www.instagram.com/digiindiasolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-instagram-line text-xs"></i>
              </a>
              <a href="https://www.youtube.com/@digiindiasolutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-youtube-fill text-xs"></i>
              </a>
              <a href="https://twitter.com/digiindiasolutions" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/30 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer">
                <i className="ri-twitter-x-fill text-xs"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path} onClick={(e) => handleNav(e, link.path)} className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path} onClick={(e) => handleNav(e, link.path)} className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path} onClick={(e) => handleNav(e, link.path)} className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path} onClick={(e) => handleNav(e, link.path)} className="text-white/30 text-xs hover:text-white transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Newsletter</h4>
            <p className="text-white/25 text-[11px] leading-relaxed mb-3">Weekly insights on tech, AI, and strategy. No spam.</p>
            {newsStatus === 'success' ? (
              <p className="text-green-400 text-[11px]">Subscribed! ✓</p>
            ) : (
              <form onSubmit={handleNewsletter} data-readdy-form="newsletter">
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 text-xs text-white placeholder-white/15 mb-2 focus:outline-none focus:border-accent-500/20"
                />
                <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="honeypot-field" />
                <button type="submit" className="w-full py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white text-[11px] font-semibold hover:shadow-[0_0_20px_rgba(0,194,255,0.2)] transition-all cursor-pointer">
                  Subscribe
                </button>
              </form>
            )}
            {newsStatus === 'error' && <p className="text-red-400 text-[10px] mt-1">{newsError}</p>}
          </div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12 rounded-xl overflow-hidden border border-white/[0.04] h-[200px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Digi India Solutions - Rohini, New Delhi Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6244666711914!2d77.0841007755044!3d28.730766875611323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1784969452127!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px]">
            &copy; {new Date().getFullYear()} Digi India Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/15 text-[10px]">ISO 27001 Certified</span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <span className="text-white/15 text-[10px]">GDPR Ready</span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <span className="text-white/15 text-[10px]">CMMI Level 3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AISearch from '@/components/feature/AISearch';
import LanguageSwitcher from '@/components/feature/LanguageSwitcher';

const megaMenuData = {
  services: [
    {
      title: 'Development',
      icon: 'ri-code-box-line',
      items: [
        { label: 'Website Development', href: '/services/website-development', desc: 'React, Next.js, Laravel' },
        { label: 'Mobile App Dev', href: '/services/mobile-app-development', desc: 'Flutter, React Native' },
        { label: 'Custom Software', href: '/services/custom-software', desc: 'Tailored for your needs' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Figma, Design Systems' },
      ],
    },
    {
      title: 'Enterprise',
      icon: 'ri-building-4-line',
      items: [
        { label: 'ERP Solutions', href: '/services/erp-solutions', desc: 'Finance, HR, Inventory' },
        { label: 'CRM Solutions', href: '/services/crm-solutions', desc: 'Sales, Support, Marketing' },
        { label: 'HRMS Software', href: '/services/custom-software', desc: 'Payroll, Attendance' },
        { label: 'Inventory Software', href: '/services/custom-software', desc: 'Stock, Warehouse' },
      ],
    },
    {
      title: 'Specialized',
      icon: 'ri-sparkling-line',
      items: [
        { label: 'AI & Automation', href: '/services/ai-automation', desc: 'Chatbots, Predictive AI' },
        { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'SEO, PPC, Social' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions', desc: 'AWS, Azure, GCP' },
        { label: 'Cyber Security', href: '/services/custom-software', desc: 'Audit, Compliance' },
      ],
    },
    {
      title: 'Industry Apps',
      icon: 'ri-hospital-line',
      items: [
        { label: 'Hospital Management', href: '/services/custom-software', desc: 'Patient, Billing, Lab' },
        { label: 'School ERP', href: '/services/custom-software', desc: 'Admissions, Exams' },
        { label: 'Restaurant Software', href: '/services/custom-software', desc: 'POS, Kitchen, Inventory' },
        { label: 'Hotel Management', href: '/services/custom-software', desc: 'Booking, Billing, CRM' },
      ],
    },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries', icon: 'ri-heart-pulse-line' },
    { label: 'Education', href: '/industries', icon: 'ri-graduation-cap-line' },
    { label: 'Manufacturing', href: '/industries', icon: 'ri-settings-3-line' },
    { label: 'Retail', href: '/industries', icon: 'ri-shopping-bag-3-line' },
    { label: 'Hospitality', href: '/industries', icon: 'ri-hotel-line' },
    { label: 'Finance', href: '/industries', icon: 'ri-bank-line' },
    { label: 'Construction', href: '/industries', icon: 'ri-building-2-line' },
    { label: 'Real Estate', href: '/industries', icon: 'ri-home-4-line' },
    { label: 'Automobile', href: '/industries', icon: 'ri-car-line' },
    { label: 'Logistics', href: '/industries', icon: 'ri-truck-line' },
  ],
  resources: [
    { label: 'Blogs', href: '/blogs', icon: 'ri-article-line' },
    { label: 'Case Studies', href: '/case-studies', icon: 'ri-file-list-3-line' },
    { label: 'Portfolio', href: '/portfolio', icon: 'ri-briefcase-line' },
    { label: 'Documentation', href: '/services', icon: 'ri-book-open-line' },
    { label: 'FAQ', href: '/services', icon: 'ri-questionnaire-line' },
  ],
  company: [
    { label: 'About Us', href: '/about', icon: 'ri-information-line' },
    { label: 'Careers', href: '/about', icon: 'ri-briefcase-4-line' },
    { label: 'Contact', href: '/contact', icon: 'ri-customer-service-2-line' },
  ],
};

const topNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', type: 'mega' as const },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'industries' | 'resources' | 'company' | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (type: 'services' | 'industries' | 'resources' | 'company') => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveMega(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveMega(null), 250);
  };

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActiveMega(null);
    navigate(href);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-500/85 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_40px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            {location.pathname === '/' ? (
              <h1 className="flex items-center m-0 p-0">
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); handleNav('/'); }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src="https://storage.readdy-site.link/project_files/53df1ac6-05af-419a-94b5-8b6b681d7726/2db05f5c-c751-42a3-a7ae-9d1824379672_compressed_1701325633456-removebg-preview.webp"
                    alt="Digi India Solutions - Website Development, Software Development, AI & Digital Marketing Company in Delhi"
                    title="Digi India Solutions"
                    className="h-20 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width={192}
                    height={64}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </a>
              </h1>
            ) : (
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); handleNav('/'); }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <img
                  src="https://storage.readdy-site.link/project_files/53df1ac6-05af-419a-94b5-8b6b681d7726/2db05f5c-c751-42a3-a7ae-9d1824379672_compressed_1701325633456-removebg-preview.webp"
                  alt="Digi India Solutions - Website Development, Software Development, AI & Digital Marketing Company in Delhi"
                  title="Digi India Solutions"
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  width={192}
                  height={64}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </a>
            )}

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {topNavItems.map((link) => {
                if (link.type === 'mega') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('services')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                          activeMega === 'services' || location.pathname.startsWith('/services')
                            ? 'text-white bg-white/[0.06]'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        {link.label}
                        <i className={`ri-arrow-down-s-line text-xs transition-transform duration-300 ${activeMega === 'services' ? 'rotate-180' : ''}`}></i>
                      </button>

                      <AnimatePresence>
                        {activeMega === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          >
                            <div className="glass-card rounded-2xl p-5 w-[800px]"
                              onMouseEnter={() => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); }}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div className="grid grid-cols-4 gap-5">
                                {megaMenuData.services.map((col) => (
                                  <div key={col.title}>
                                    <div className="flex items-center gap-2 mb-3">
                                      <div className="w-6 h-6 rounded-md bg-accent-500/10 flex items-center justify-center">
                                        <i className={`${col.icon} text-accent-400 text-xs`}></i>
                                      </div>
                                      <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-semibold">{col.title}</span>
                                    </div>
                                    <div className="space-y-1">
                                      {col.items.map((item) => (
                                        <a
                                          key={item.label}
                                          href={item.href}
                                          onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                                          className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200 cursor-pointer"
                                        >
                                          <div className="font-medium">{item.label}</div>
                                          <div className="text-[10px] text-white/25 mt-0.5">{item.desc}</div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                                <span className="text-white/25 text-xs">Explore all 15+ services</span>
                                <a
                                  href="/services"
                                  onClick={(e) => { e.preventDefault(); handleNav('/services'); }}
                                  className="text-accent-400 text-xs font-semibold hover:text-accent-300 transition-colors cursor-pointer"
                                >
                                  View All Services
                                  <i className="ri-arrow-right-line ml-1"></i>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href!); }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive(link.href!)
                        ? 'text-white bg-white/[0.06]'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA + Search + Language + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <AISearch />
              <LanguageSwitcher />
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNav('/contact'); }}
                className="hidden sm:inline-flex glass-btn-primary !px-5 !py-2.5 !text-xs cursor-pointer whitespace-nowrap"
              >
                Free Consultation
                <i className="ri-arrow-right-line ml-1.5"></i>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
              >
                <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-dark-500/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative z-10 flex flex-col h-full pt-20 px-6 overflow-y-auto"
            >
              {/* Services Section */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-accent-400 uppercase tracking-wider py-3">Services</div>
                <div className="grid grid-cols-2 gap-1">
                  {megaMenuData.services.flatMap((c) => c.items).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                      className="py-2 px-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all cursor-pointer"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-accent-400 uppercase tracking-wider py-3">Industries</div>
                <div className="grid grid-cols-2 gap-1">
                  {megaMenuData.industries.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                      className="py-2 px-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all cursor-pointer flex items-center gap-2"
                    >
                      <i className={`${item.icon} text-xs`}></i>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-1 mb-6">
                {[
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Blogs', href: '/blogs' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="block py-3 text-base font-medium text-white/70 hover:text-white transition-all cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNav('/contact'); }}
                className="glass-btn-primary w-full text-center mb-8 cursor-pointer"
              >
                Free Consultation
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState, useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedCursor from '@/components/feature/AnimatedCursor';
import ScrollToTop from '@/components/feature/ScrollToTop';
import LoadingScreen from '@/components/feature/LoadingScreen';
import HeroSection from './components/HeroSection';
import TechLogos from './components/TechLogos';
import ServicesSection from './components/ServicesSection';
import LiveStats from './components/LiveStats';
import ProcessSection from './components/ProcessSection';
import PortfolioPreview from './components/PortfolioPreview';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import GlobalMap from './components/GlobalMap';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function Home() {
  const [loading, setLoading] = useState(true);

  usePageSEO({
    title: 'Digi India Solutions - Empowering Businesses Through Technology & AI | Web, Mobile, ERP, CRM',
    description: 'Digi India Solutions is a premium IT company in Rohini, New Delhi. Empowering Businesses Through Technology & AI. Website Development, Mobile Apps, AI Automation, ERP & CRM. Call +91 81305 43714 or +91 99903 90519. 1000+ projects across 15+ countries.',
    keywords: 'Digi India Solutions, empowering businesses through technology, website development company Delhi, software development India, mobile app development Rohini, AI automation, ERP development, CRM solutions, digital marketing Delhi, +91 81305 43714',
    canonical: 'https://www.digiindiasolutions.com/',
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative bg-dark-500 text-white min-h-screen overflow-x-hidden">
      <AnimatedCursor />
      <Navbar />

      <main>
        <HeroSection />
        <TechLogos />
        <ServicesSection />
        <LiveStats />
        <ProcessSection />
        <PortfolioPreview />
        <TestimonialsCarousel />
        <WhyChooseUs />
        <IndustriesSection />
        <GlobalMap />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
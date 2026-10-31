import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-dark-500 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-primary-500/10 via-accent-500/8 to-primary-500/10 blur-[100px]"></div>
      </div>

      <div className="absolute inset-0 grid-bg opacity-50"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-accent-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-accent-400 text-xs font-medium tracking-wider">Let&apos;s Build Something Amazing</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>

          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book a free consultation with our experts. Let&apos;s discuss your project and create a roadmap to success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="glass-btn-primary group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Consultation
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform inline-block"></i>
            </motion.a>
            <motion.a
              href="tel:+918130543714"
              className="glass-btn cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="ri-phone-line mr-2"></i>
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
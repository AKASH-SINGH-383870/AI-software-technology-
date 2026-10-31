import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const helpfulLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog & Insights', href: '/blogs' },
  ];

  return (
    <div className="min-h-screen bg-dark-500 text-white flex items-center justify-center overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 aurora-bg opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-500/5 blur-[100px]"></div>

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-[120px] md:text-[160px] font-heading font-black leading-none bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-white/40 text-sm md:text-base mb-8 leading-relaxed">
            The page you are looking for might have been moved, renamed, or does not exist. Let us help you find what you need.
          </p>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,194,255,0.3)] transition-all duration-300"
          >
            <i className="ri-home-4-line"></i>
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
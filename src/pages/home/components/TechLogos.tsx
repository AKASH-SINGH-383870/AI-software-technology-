const technologies = [
  { name: 'React', icon: 'ri-reactjs-line' },
  { name: 'Next.js', icon: 'ri-nextjs-fill' },
  { name: 'Flutter', icon: 'ri-flutter-fill' },
  { name: 'Node.js', icon: 'ri-nodejs-line' },
  { name: 'Laravel', icon: 'ri-code-s-slash-line' },
  { name: 'Python', icon: 'ri-code-box-line' },
  { name: 'PHP', icon: 'ri-terminal-box-line' },
  { name: 'AI/ML', icon: 'ri-brain-line' },
  { name: 'AWS', icon: 'ri-cloud-line' },
  { name: 'Azure', icon: 'ri-microsoft-fill' },
  { name: 'Google Cloud', icon: 'ri-google-fill' },
  { name: 'Docker', icon: 'ri-server-line' },
];

export default function TechLogos() {
  return (
    <section className="relative py-12 md:py-16 bg-dark-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-center text-white/20 text-xs tracking-widest uppercase mb-8">Powered by Industry-Leading Technologies</p>

        {/* Scrolling Row */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 md:gap-12 animate-scroll">
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300 whitespace-nowrap group cursor-default"
              >
                <i className={`${tech.icon} text-lg text-white/30 group-hover:text-accent-400 transition-colors duration-300`}></i>
                <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors duration-300 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
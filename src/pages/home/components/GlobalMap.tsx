import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const countries = [
  { name: 'India', x: 68, y: 38, projects: 450, clients: 320, cities: ['Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad'] },
  { name: 'USA', x: 22, y: 28, projects: 120, clients: 85, cities: ['New York', 'San Francisco', 'Austin', 'Chicago'] },
  { name: 'UK', x: 47, y: 20, projects: 65, clients: 42, cities: ['London', 'Manchester', 'Birmingham'] },
  { name: 'UAE', x: 60, y: 34, projects: 55, clients: 38, cities: ['Dubai', 'Abu Dhabi'] },
  { name: 'Singapore', x: 75, y: 42, projects: 40, clients: 28, cities: ['Singapore'] },
  { name: 'Australia', x: 82, y: 58, projects: 35, clients: 22, cities: ['Sydney', 'Melbourne'] },
  { name: 'Canada', x: 18, y: 22, projects: 30, clients: 20, cities: ['Toronto', 'Vancouver'] },
  { name: 'Germany', x: 50, y: 18, projects: 25, clients: 18, cities: ['Berlin', 'Munich'] },
  { name: 'Japan', x: 82, y: 28, projects: 20, clients: 12, cities: ['Tokyo', 'Osaka'] },
  { name: 'Brazil', x: 34, y: 55, projects: 18, clients: 10, cities: ['São Paulo'] },
  { name: 'South Africa', x: 52, y: 62, projects: 15, clients: 9, cities: ['Johannesburg', 'Cape Town'] },
  { name: 'Saudi Arabia', x: 58, y: 36, projects: 12, clients: 8, cities: ['Riyadh', 'Jeddah'] },
];

export default function GlobalMap() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedCountry = countries.find((c) => c.name === selected);

  return (
    <section className="py-16 md:py-24 bg-dark-600 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <div className="section-tag mx-auto">Our Reach</div>
          <h2 className="section-title text-white">
            {/* {t('map.title', 'Global')}{' '} */}
            <span className="text-gradient">{t('map.title.highlight', 'Footprint')}</span>
          </h2>
          <p className="text-white/30 text-sm mt-3">{t('map.subtitle', 'Serving clients across 12+ countries worldwide')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Map */}
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: '52%' }}>
              <svg
                viewBox="0 0 940 480"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified world map paths */}
                <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8">
                  {/* North America */}
                  <path d="M130,50 L180,35 L240,40 L280,55 L310,70 L300,100 L270,120 L240,140 L200,145 L160,130 L120,100 L110,70 Z" fill="rgba(255,255,255,0.015)"/>
                  {/* South America */}
                  <path d="M180,170 L210,165 L235,180 L245,210 L230,240 L210,270 L190,290 L175,270 L165,240 L170,200 Z" fill="rgba(255,255,255,0.015)"/>
                  {/* Europe */}
                  <path d="M400,50 L430,40 L470,35 L510,38 L540,45 L555,60 L545,80 L530,90 L510,100 L460,95 L420,85 L405,70 Z" fill="rgba(255,255,255,0.015)"/>
                  {/* Africa */}
                  <path d="M415,110 L450,100 L490,100 L530,105 L555,120 L560,150 L545,180 L520,210 L495,240 L470,255 L440,240 L415,210 L405,170 L410,140 Z" fill="rgba(255,255,255,0.015)"/>
                  {/* Asia */}
                  <path d="M555,55 L600,40 L660,30 L730,25 L780,35 L810,55 L800,80 L780,100 L750,110 L720,120 L690,130 L650,135 L600,120 L570,100 L555,80 Z" fill="rgba(255,255,255,0.015)"/>
                  {/* India subcontinent */}
                  <path d="M620,100 L640,90 L655,95 L660,115 L650,140 L630,150 L615,140 L610,120 Z" fill="rgba(0,194,255,0.08)" stroke="rgba(0,194,255,0.2)"/>
                  {/* Australia */}
                  <path d="M740,250 L770,240 L810,240 L830,255 L835,280 L820,300 L790,305 L760,300 L745,280 Z" fill="rgba(255,255,255,0.015)"/>
                </g>

                {/* Country Dots */}
                {countries.map((country) => {
                  const actualX = (country.x / 100) * 940;
                  const actualY = (country.y / 100) * 480;
                  const isActive = hovered === country.name || selected === country.name;

                  return (
                    <g key={country.name}>
                      {/* Pulse ring */}
                      {isActive && (
                        <circle cx={actualX} cy={actualY} r="14" fill="none" stroke="rgba(0,194,255,0.3)" strokeWidth="1.5">
                          <animate attributeName="r" from="10" to="22" dur="1.5s" repeatCount="indefinite"/>
                          <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                      )}
                      <circle
                        cx={actualX}
                        cy={actualY}
                        r={isActive ? 6 : 4}
                        fill={isActive ? 'rgb(0,194,255)' : 'rgba(255,255,255,0.3)'}
                        className="cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHovered(country.name)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(selected === country.name ? null : country.name)}
                      />
                      <circle cx={actualX} cy={actualY} r="18" fill="transparent" className="cursor-pointer" onMouseEnter={() => setHovered(country.name)} onMouseLeave={() => setHovered(null)} onClick={() => setSelected(selected === country.name ? null : country.name)}/>
                    </g>
                  );
                })}

                {/* Connection lines from India */}
                {countries.filter((c) => c.name !== 'India').map((country) => {
                  const indiaX = (68 / 100) * 940;
                  const indiaY = (38 / 100) * 480;
                  const targetX = (country.x / 100) * 940;
                  const targetY = (country.y / 100) * 480;

                  return (
                    <line
                      key={`line-${country.name}`}
                      x1={indiaX}
                      y1={indiaY}
                      x2={targetX}
                      y2={targetY}
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="glass-card rounded-2xl p-5 flex flex-col">
            {selectedCountry ? (
              <motion.div
                key={selectedCountry.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-bold text-white text-lg">{selectedCountry.name}</h4>
                  <button onClick={() => setSelected(null)} className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-white/30 hover:text-white/70 cursor-pointer">
                    <i className="ri-close-line text-xs"></i>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="glass-card rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-accent-400">{selectedCountry.projects}</p>
                    <p className="text-white/30 text-[10px]">Projects</p>
                  </div>
                  <div className="glass-card rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-accent-400">{selectedCountry.clients}</p>
                    <p className="text-white/30 text-[10px]">Clients</p>
                  </div>
                </div>

                <div>
                  <p className="text-white/25 text-[10px] uppercase tracking-wider mb-2">Cities Served</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCountry.cities.map((city) => (
                      <span key={city} className="px-2 py-0.5 rounded-md bg-white/[0.03] text-white/50 text-[10px]">{city}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <i className="ri-map-pin-line text-3xl text-white/10 mb-3"></i>
                <p className="text-white/25 text-xs">Click a country to view stats</p>
              </div>
            )}

            {/* Summary Stats */}
            <div className="mt-auto pt-4 border-t border-white/[0.04]">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <p className="text-sm font-bold text-gradient">{countries.length}</p>
                  <p className="text-white/25 text-[10px]">Countries</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gradient">500+</p>
                  <p className="text-white/25 text-[10px]">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
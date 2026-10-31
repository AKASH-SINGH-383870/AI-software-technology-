import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { blogPosts } from '@/mocks/blog';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  usePageSEO({
    title: post ? `${post.title} | Digi India Solutions Blog` : 'Blog | Digi India Solutions',
    description: post?.excerpt || 'Expert insights on software development, AI, ERP, CRM, digital marketing, and IT services from Digi India Solutions.',
    keywords: post ? `${post.tags.join(', ')}, ${post.category}, Digi India Solutions, blog` : 'IT blog, software development, AI, ERP, CRM, digital marketing',
    ogTitle: post?.title || 'Digi India Solutions Blog',
    ogDescription: post?.excerpt || 'Expert IT insights and technology guides.',
    ogImage: post?.image || 'https://www.digiindiasolutions.com/og-image.jpg',
    canonical: post ? `https://www.digiindiasolutions.com/blogs/${post.slug}` : 'https://www.digiindiasolutions.com/blogs',
  });

  useEffect(() => {
    if (!post) {
      navigate('/blogs');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const tocItems = post.content
    .split('\n')
    .filter((line) => line.trim().startsWith('## '))
    .map((line) => line.replace('## ', '').trim());

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    window.open(links[platform], '_blank', 'width=600,height=400');
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('phone_alt') as HTMLInputElement)?.value;
    if (honeypot?.trim()) { setStatus('success'); return; }
    const fd = new FormData(form);
    try {
      const res = await fetch('https://readdy.ai/api/form/d9hski8h9dsfbuoi5jqg', { method: 'POST', body: fd });
      const text = await res.text();
      const data = JSON.parse(text);
      if (res.ok && data.code === 'OK') {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data?.meta?.message || data?.message || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-16">
        <Breadcrumb />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              author: { '@type': 'Person', name: post.author.name },
              datePublished: post.date,
              image: post.image,
              publisher: {
                '@type': 'Organization',
                name: 'Digi India Solutions',
                url: 'https://www.digiindiasolutions.com',
              },
              url: `https://www.digiindiasolutions.com/blogs/${post.slug}`,
              keywords: post.tags.join(', '),
            }),
          }}
        />

        {/* Hero Image */}
        <motion.div
          className="relative h-64 md:h-80 lg:h-96 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={post.image}
            alt={post.title}
            title={post.title}
            loading="eager"
            width="1200"
            height="600"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/60 to-dark-500/30"></div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-500/15 border border-accent-500/20 text-accent-400 text-[10px] font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-white/30 text-xs">{post.readingTime}</span>
                </div>
                <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-snug">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Author Bar */}
              <div className="flex items-center gap-4 pb-8 mb-8 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{post.author.name}</p>
                  <p className="text-white/30 text-xs">{post.author.role} · {post.date}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  {[
                    { icon: 'ri-twitter-x-fill', key: 'twitter' },
                    { icon: 'ri-linkedin-fill', key: 'linkedin' },
                    { icon: 'ri-facebook-fill', key: 'facebook' },
                  ].map((s) => (
                    <button
                      key={s.key}
                      onClick={() => handleShare(s.key)}
                      className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-accent-400 hover:bg-white/[0.06] transition-all cursor-pointer"
                    >
                      <i className={`${s.icon} text-xs`}></i>
                    </button>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <article className="prose-content">
                <p className="text-white/40 text-sm md:text-base leading-[1.8] mb-6 font-medium">
                  {post.excerpt}
                </p>
                {post.content.split('\n').filter(Boolean).map((line, idx) => {
                  if (line.trim().startsWith('## ')) {
                    return (
                      <h2 key={idx} className="font-heading text-lg md:text-xl font-bold text-white mt-10 mb-4">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.trim().startsWith('### ')) {
                    return (
                      <h3 key={idx} className="font-heading text-base font-semibold text-white mt-6 mb-3">
                        {line.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (line.trim().startsWith('- ') && line.includes(':')) {
                    const [label, desc] = line.replace('- ', '').split(': ');
                    return (
                      <div key={idx} className="flex gap-2 mb-2">
                        <span className="w-5 h-5 rounded bg-accent-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-accent-400 text-xs"></i>
                        </span>
                        <p className="text-white/40 text-sm">
                          <span className="text-white/60 font-medium">{label}:</span> {desc}
                        </p>
                      </div>
                    );
                  }
                  if (line.trim().startsWith('- ')) {
                    return (
                      <div key={idx} className="flex gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500/60 mt-2 flex-shrink-0"></span>
                        <p className="text-white/40 text-sm">{line.replace('- ', '')}</p>
                      </div>
                    );
                  }
                  if (line.trim().match(/^\d+\./)) {
                    return (
                      <div key={idx} className="flex gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-primary-500/15 flex items-center justify-center flex-shrink-0 text-[10px] text-primary-400 font-bold mt-0.5">
                          {line.trim().charAt(0)}
                        </span>
                        <p className="text-white/40 text-sm">{line.replace(/^\d+\.\s*/, '')}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-white/35 text-sm leading-[1.8] mb-3">
                      {line.trim()}
                    </p>
                  );
                })}
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/[0.06]">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 text-[11px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* TOC */}
              <div className="glass-card rounded-xl p-5">
                <h4 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                  <i className="ri-list-check"></i>
                  Contents
                </h4>
                <div className="space-y-2">
                  {tocItems.map((item, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block text-white/40 text-xs hover:text-accent-400 transition-colors pl-2 border-l border-white/[0.06] hover:border-accent-400/30"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Mini */}
              <div className="glass-card rounded-xl p-5">
                <h4 className="font-heading font-semibold text-white text-sm mb-3">Newsletter</h4>
                <p className="text-white/30 text-xs mb-4">Weekly insights on tech, AI, and strategy.</p>
                {status === 'success' ? (
                  <div className="text-green-400 text-xs">Subscribed! ✓</div>
                ) : (
                  <form onSubmit={handleSubscribe} data-readdy-form="newsletter">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 mb-2 focus:outline-none focus:border-accent-500/30"
                    />
                    <input
                      type="text"
                      name="phone_alt"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                      className="honeypot-field"
                    />
                    <button type="submit" className="w-full glass-btn-primary !py-2 !text-[10px] cursor-pointer">Subscribe</button>
                  </form>
                )}
                {status === 'error' && <p className="text-red-400 text-[10px] mt-1">{errorMsg}</p>}
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="glass-card rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-white text-sm mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <button
                        key={r.slug}
                        onClick={() => navigate(`/blogs/${r.slug}`)}
                        className="flex gap-3 text-left group cursor-pointer w-full"
                      >
                        <img
                          src={r.image}
                          alt={r.title}
                          title={r.title}
                          loading="lazy"
                          width="64"
                          height="64"
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-white text-xs font-medium group-hover:text-accent-400 transition-colors line-clamp-2">
                            {r.title}
                          </p>
                          <p className="text-white/20 text-[10px] mt-1">{r.date}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          </div>
        </div>

        {/* CTA */}
        <section className="py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary-500/8 blur-[80px]"></div>
              <div className="relative z-10 max-w-lg mx-auto">
                <h3 className="font-heading text-2xl font-bold text-white mb-3">Need Help with a Similar Project?</h3>
                <p className="text-white/40 text-sm mb-6">
                  Our team has solved these exact challenges for 500+ clients. Let us discuss yours.
                </p>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                  className="glass-btn-primary cursor-pointer inline-flex"
                >
                  Get Free Consultation
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
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
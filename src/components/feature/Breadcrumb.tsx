import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  customLabel?: string;
  customPath?: string;
  skipWrapper?: boolean;
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'about': 'About Us',
  'contact': 'Contact Us',
  'services': 'Services',
  'website-development': 'Website Development',
  'mobile-app-development': 'Mobile App Development',
  'custom-software': 'Custom Software Development',
  'ai-automation': 'AI & Automation',
  'erp-solutions': 'ERP Solutions',
  'crm-solutions': 'CRM Solutions',
  'digital-marketing': 'Digital Marketing',
  'cloud-solutions': 'Cloud Solutions',
  'ui-ux-design': 'UI/UX Design',
  'portfolio': 'Portfolio',
  'industries': 'Industries',
  'healthcare': 'Healthcare',
  'finance': 'Finance & Banking',
  'manufacturing': 'Manufacturing',
  'education': 'Education',
  'retail': 'Retail',
  'hospitality': 'Hospitality',
  'construction': 'Construction',
  'real-estate': 'Real Estate',
  'case-studies': 'Case Studies',
  'blogs': 'Blog & Insights',
  'careers': 'Careers',
  'calculators': 'Calculators',
  'ai-features': 'AI Features',
  'knowledge-center': 'Knowledge Center',
  'comparisons': 'Comparisons',
  'sitemap': 'Sitemap',
  'react-vs-angular': 'React vs Angular',
  'flutter-vs-react-native': 'Flutter vs React Native',
  'custom-software-vs-saas': 'Custom Software vs SaaS',
};

function generateBreadcrumbs(pathname: string, customLabel?: string, customPath?: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  if (customLabel && customPath) {
    const parentSegments = segments.slice(0, -1);
    let parentPath = '';
    parentSegments.forEach((segment) => {
      parentPath += `/${segment}`;
      const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      breadcrumbs.push({ label, href: parentPath });
    });
    breadcrumbs.push({ label: customLabel });
    return breadcrumbs;
  }

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = index === segments.length - 1;
    breadcrumbs.push({
      label,
      href: isLast ? undefined : currentPath,
    });
  });

  return breadcrumbs;
}

export default function Breadcrumb({ customLabel, customPath, skipWrapper }: BreadcrumbProps) {
  const location = useLocation();
  const pathname = location.pathname;

  if (!skipWrapper && (pathname === '/' || pathname === '')) return null;

  const items = generateBreadcrumbs(pathname, customLabel, customPath);

  const breadcrumbLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.digiindiasolutions.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
      />
      <nav aria-label="Breadcrumb" className={skipWrapper ? 'pb-2' : 'pt-24 pb-2 max-w-[1400px] mx-auto px-6 md:px-10'}>
        <motion.ol
          className="flex flex-wrap items-center gap-1.5 text-xs"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <i className="ri-arrow-right-s-line text-white/15 text-xs"></i>
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-white/30 hover:text-accent-400 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/60 font-medium whitespace-nowrap">{item.label}</span>
              )}
            </li>
          ))}
        </motion.ol>
      </nav>
    </>
  );
}
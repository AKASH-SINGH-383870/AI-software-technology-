export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  benefits: { icon: string; title: string; desc: string }[];
  features: string[];
  techStack: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'High-Performance Websites That Convert Visitors Into Customers',
    overview: 'We build blazing-fast, SEO-optimized websites using modern frameworks like React, Next.js, and Laravel. From corporate websites to complex web portals, every pixel is crafted for performance, accessibility, and conversion. Our development process ensures your site ranks higher, loads faster, and delivers an exceptional user experience across all devices.',
    benefits: [
      { icon: 'ri-flashlight-line', title: 'Lightning Fast', desc: 'Sub-second load times with optimized code and CDN delivery.' },
      { icon: 'ri-search-line', title: 'SEO Optimized', desc: 'Built-in technical SEO for higher search engine rankings.' },
      { icon: 'ri-smartphone-line', title: 'Fully Responsive', desc: 'Flawless experience on desktop, tablet, and mobile devices.' },
      { icon: 'ri-shield-check-line', title: 'Enterprise Secure', desc: 'SSL, firewalls, and security hardening as standard.' },
    ],
    features: ['Custom Frontend Development', 'CMS Integration (WordPress, Strapi, Sanity)', 'E-Commerce Solutions', 'Progressive Web Apps', 'API Development', 'Performance Optimization', 'Accessibility Compliance (WCAG)', 'Analytics & Tracking Setup'],
    techStack: ['React', 'Next.js', 'Vue.js', 'Laravel', 'PHP', 'Node.js', 'Tailwind CSS', 'TypeScript'],
    industries: ['E-Commerce', 'Corporate', 'SaaS', 'Education', 'Healthcare', 'Real Estate'],
    faqs: [
      { q: 'How long does a typical website take?', a: 'A standard corporate website takes 4-8 weeks. Complex web applications may take 12-16 weeks depending on scope.' },
      { q: 'Do you provide hosting?', a: 'Yes, we offer managed cloud hosting on AWS, Azure, or Google Cloud with 99.9% uptime SLA.' },
      { q: 'Will my website be mobile-friendly?', a: 'Absolutely. Every website we build is fully responsive and tested across 50+ device combinations.' },
    ],
    relatedSlugs: ['mobile-app-development', 'ui-ux-design', 'digital-marketing'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native & Cross-Platform Apps That Users Love',
    overview: 'We design and develop high-performance mobile applications for iOS and Android using Flutter, React Native, and native technologies. From consumer apps to enterprise mobility solutions, we deliver apps with stunning UI, smooth performance, and robust backend integration.',
    benefits: [
      { icon: 'ri-apple-line', title: 'iOS & Android', desc: 'Native-quality apps on both platforms from a single codebase.' },
      { icon: 'ri-speed-line', title: '60 FPS Performance', desc: 'Smooth animations and instant responses for premium feel.' },
      { icon: 'ri-bluetooth-line', title: 'Native Features', desc: 'Camera, GPS, push notifications, biometrics, and more.' },
      { icon: 'ri-cloud-line', title: 'Cloud Sync', desc: 'Real-time data synchronization across all user devices.' },
    ],
    features: ['Native iOS (Swift)', 'Native Android (Kotlin)', 'Flutter Cross-Platform', 'React Native', 'App Store Publishing', 'Push Notifications', 'Offline Mode', 'In-App Purchases'],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'GraphQL', 'AWS'],
    industries: ['E-Commerce', 'Healthcare', 'Fintech', 'Education', 'Logistics', 'Social'],
    faqs: [
      { q: 'Should I choose Flutter or React Native?', a: 'Flutter offers better performance and UI consistency. React Native has a larger ecosystem. We recommend based on your specific needs.' },
      { q: 'Do you handle app store submissions?', a: 'Yes, we handle the entire publishing process including screenshots, descriptions, and compliance.' },
      { q: 'How do you ensure app security?', a: 'We implement code obfuscation, secure API communication, certificate pinning, and regular security audits.' },
    ],
    relatedSlugs: ['website-development', 'cloud-solutions', 'ui-ux-design'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Bespoke Software Built for Your Unique Business Needs',
    overview: 'We build tailor-made software solutions that address your specific operational challenges. From workflow automation to complex enterprise systems, our custom software is designed to integrate seamlessly with your existing infrastructure while scaling with your growth.',
    benefits: [
      { icon: 'ri-tools-line', title: '100% Custom', desc: 'No templates. Every feature is built specifically for your workflow.' },
      { icon: 'ri-plug-line', title: 'Easy Integration', desc: 'Connects with your existing tools via APIs and webhooks.' },
      { icon: 'ri-stack-line', title: 'Scalable Architecture', desc: 'Microservices architecture that grows with your business.' },
      { icon: 'ri-customer-service-2-line', title: 'Ongoing Support', desc: 'Continuous updates, maintenance, and feature additions.' },
    ],
    features: ['Business Process Automation', 'Workflow Management', 'Document Management', 'Custom CRM Modules', 'Report Generation', 'Multi-Tenant Architecture', 'Role-Based Access Control', 'Audit Logging'],
    techStack: ['Python', 'Node.js', 'Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    industries: ['Manufacturing', 'Logistics', 'Finance', 'Legal', 'Government', 'Retail'],
    faqs: [
      { q: 'How is custom software different from off-the-shelf?', a: 'Custom software is built for your exact workflow, eliminating unnecessary features and adding what you actually need.' },
      { q: 'Can you modernize our legacy system?', a: 'Yes, we specialize in legacy system modernization, refactoring, and gradual migration strategies.' },
      { q: 'What about data migration?', a: 'We handle complete data migration with zero downtime and full integrity verification.' },
    ],
    relatedSlugs: ['erp-solutions', 'crm-solutions', 'cloud-solutions'],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Intelligent Automation That Transforms Business Operations',
    overview: 'Harness the power of artificial intelligence to automate repetitive tasks, gain predictive insights, and deliver personalized experiences. Our AI solutions integrate OpenAI, Claude, Gemini, and custom ML models to create intelligent workflows that learn and improve over time.',
    benefits: [
      { icon: 'ri-robot-line', title: '24/7 Automation', desc: 'AI agents that work round the clock without breaks or errors.' },
      { icon: 'ri-brain-line', title: 'Smart Insights', desc: 'Predictive analytics that help you make data-driven decisions.' },
      { icon: 'ri-time-line', title: 'Time Savings', desc: 'Reduce manual work by up to 80% with intelligent automation.' },
      { icon: 'ri-customer-service-2-line', title: 'Better CX', desc: 'AI chatbots and assistants that delight customers instantly.' },
    ],
    features: ['AI Chatbots', 'Workflow Automation', 'Document Processing (OCR)', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines', 'Voice Assistants'],
    techStack: ['Python', 'OpenAI API', 'Claude API', 'TensorFlow', 'PyTorch', 'LangChain', 'Vector DBs', 'FastAPI'],
    industries: ['Healthcare', 'E-Commerce', 'Finance', 'Education', 'Manufacturing', 'Customer Service'],
    faqs: [
      { q: 'How accurate are your AI chatbots?', a: 'Our chatbots achieve 95%+ accuracy with proper training data and can escalate complex queries to human agents.' },
      { q: 'Is my data safe with AI solutions?', a: 'Absolutely. We use on-premise or private cloud deployments and never train on your proprietary data.' },
      { q: 'How long does AI integration take?', a: 'Simple automation: 2-4 weeks. Complex ML models: 8-16 weeks depending on data availability and complexity.' },
    ],
    relatedSlugs: ['custom-software', 'cloud-solutions', 'digital-marketing'],
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    tagline: 'Unified Enterprise Resource Planning for Operational Excellence',
    overview: 'Our ERP solutions integrate all core business processes into a single unified platform. From finance and HR to inventory and manufacturing, we build comprehensive systems that eliminate data silos, automate workflows, and provide real-time visibility across your entire organization.',
    benefits: [
      { icon: 'ri-database-2-line', title: 'Unified Data', desc: 'One source of truth across all departments and processes.' },
      { icon: 'ri-bar-chart-box-line', title: 'Real-Time Reports', desc: 'Live dashboards and analytics for instant decision making.' },
      { icon: 'ri-money-dollar-circle-line', title: 'Cost Reduction', desc: 'Streamlined operations that reduce overhead by 20-40%.' },
      { icon: 'ri-shield-check-line', title: 'Compliance Ready', desc: 'Built-in compliance for GDPR, HIPAA, SOC 2, and more.' },
    ],
    features: ['Financial Management', 'Inventory Control', 'HR & Payroll', 'Procurement', 'Production Planning', 'Supply Chain Management', 'Quality Control', 'Business Intelligence'],
    techStack: ['Laravel', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS', 'Power BI'],
    industries: ['Manufacturing', 'Healthcare', 'Education', 'Retail', 'Construction', 'Logistics'],
    faqs: [
      { q: 'Can you customize ERP for our industry?', a: 'Yes, we build industry-specific ERP modules tailored to your exact operational requirements.' },
      { q: 'How does data migration work?', a: 'We use phased migration with parallel running to ensure zero business disruption during transition.' },
      { q: 'Do you provide training?', a: 'Comprehensive training programs for all user levels, plus detailed documentation and video tutorials.' },
    ],
    relatedSlugs: ['crm-solutions', 'custom-software', 'cloud-solutions'],
  },
  {
    slug: 'crm-solutions',
    title: 'CRM Solutions',
    tagline: 'Customer Relationship Management That Drives Revenue Growth',
    overview: 'Our CRM solutions help you track, manage, and nurture every customer interaction. From lead generation to post-sale support, we build systems that give your sales and support teams the tools they need to convert more leads and retain more customers.',
    benefits: [
      { icon: 'ri-user-follow-line', title: 'Lead Tracking', desc: 'Complete visibility into every lead journey from first touch to close.' },
      { icon: 'ri-line-chart-line', title: 'Sales Pipeline', desc: 'Visual pipelines that help you forecast revenue accurately.' },
      { icon: 'ri-customer-service-2-line', title: 'Support Hub', desc: 'Ticketing, knowledge base, and customer history in one place.' },
      { icon: 'ri-mail-send-line', title: 'Marketing Automation', desc: 'Automated email sequences, campaigns, and follow-ups.' },
    ],
    features: ['Lead Management', 'Sales Pipeline', 'Contact Management', 'Email Integration', 'Task Automation', 'Reporting & Analytics', 'Mobile CRM App', 'Third-Party Integrations'],
    techStack: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Socket.io', 'AWS', 'Zapier'],
    industries: ['Real Estate', 'Healthcare', 'E-Commerce', 'B2B Services', 'Education', 'Finance'],
    faqs: [
      { q: 'Can you integrate with existing tools?', a: 'Yes, we integrate with Salesforce, HubSpot, Zoho, Slack, and 200+ other platforms via APIs and Zapier.' },
      { q: 'Is there a mobile app?', a: 'Yes, our CRM includes a fully-featured mobile app for iOS and Android with offline support.' },
      { q: 'How much does customization cost?', a: 'We offer modular pricing so you only pay for the features you need, starting from basic packages.' },
    ],
    relatedSlugs: ['erp-solutions', 'digital-marketing', 'ai-automation'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-Driven Strategies That Generate Leads and Maximize ROI',
    overview: 'We create comprehensive digital marketing strategies that combine SEO, PPC, social media, and content marketing to drive qualified traffic and convert visitors into paying customers. Every campaign is tracked, analyzed, and optimized for maximum return on investment.',
    benefits: [
      { icon: 'ri-search-line', title: 'Higher Rankings', desc: 'White-hat SEO that gets you to page one and keeps you there.' },
      { icon: 'ri-flashlight-line', title: 'Instant Leads', desc: 'PPC campaigns that generate qualified leads within days.' },
      { icon: 'ri-bar-chart-grouped-line', title: 'Measurable ROI', desc: 'Clear analytics showing exactly what your marketing spend returns.' },
      { icon: 'ri-global-line', title: 'Brand Growth', desc: 'Build a powerful online presence that attracts and retains customers.' },
    ],
    features: ['Search Engine Optimization', 'Google Ads Management', 'Meta & Social Ads', 'Content Marketing', 'Email Campaigns', 'Conversion Rate Optimization', 'Analytics & Reporting', 'Reputation Management'],
    techStack: ['Google Analytics 4', 'Google Ads', 'Meta Business', 'SEMrush', 'Ahrefs', 'Mailchimp', 'HubSpot', 'Hotjar'],
    industries: ['E-Commerce', 'Healthcare', 'Real Estate', 'Education', 'SaaS', 'Professional Services'],
    faqs: [
      { q: 'How long until I see SEO results?', a: 'Typically 3-6 months for significant ranking improvements. PPC delivers leads within the first week.' },
      { q: 'Do you guarantee results?', a: 'While we cannot guarantee specific rankings, we guarantee transparent reporting and continuous optimization.' },
      { q: 'What industries do you specialize in?', a: 'We have deep experience in healthcare, real estate, e-commerce, SaaS, and B2B services.' },
    ],
    relatedSlugs: ['website-development', 'crm-solutions', 'cloud-solutions'],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    tagline: 'Scalable, Secure, and Cost-Effective Cloud Infrastructure',
    overview: 'We architect, migrate, and manage cloud infrastructure on AWS, Azure, and Google Cloud Platform. Our cloud solutions reduce infrastructure costs, improve reliability, and enable your applications to scale automatically with demand.',
    benefits: [
      { icon: 'ri-cloud-line', title: '99.99% Uptime', desc: 'Multi-region redundancy and auto-failover for maximum availability.' },
      { icon: 'ri-money-dollar-circle-line', title: 'Cost Optimized', desc: 'Right-sized infrastructure that eliminates waste and reduces bills.' },
      { icon: 'ri-shield-check-line', title: 'Enterprise Security', desc: 'SOC 2, ISO 27001 compliant with encryption and access controls.' },
      { icon: 'ri-stack-line', title: 'Auto Scaling', desc: 'Infrastructure that scales up and down automatically with traffic.' },
    ],
    features: ['Cloud Migration', 'DevOps Automation', 'Kubernetes Orchestration', 'Serverless Architecture', 'Database Management', 'Disaster Recovery', 'Cost Optimization', 'Security Hardening'],
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
    industries: ['SaaS', 'E-Commerce', 'Fintech', 'Healthcare', 'Gaming', 'Media'],
    faqs: [
      { q: 'Which cloud provider should I choose?', a: 'We recommend based on your requirements. AWS has the widest services, Azure integrates best with Microsoft, GCP excels at AI/ML.' },
      { q: 'How long does cloud migration take?', a: 'Simple lift-and-shift: 2-4 weeks. Complex re-architecture: 8-16 weeks with phased rollout.' },
      { q: 'Will there be downtime during migration?', a: 'Zero-downtime migrations using blue-green deployment strategies and data replication.' },
    ],
    relatedSlugs: ['custom-software', 'erp-solutions', 'website-development'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Beautiful, Intuitive Experiences That Users Love',
    overview: 'We create user-centered designs that balance aesthetics with usability. Our design process involves deep user research, wireframing, prototyping, and usability testing to ensure every interface is intuitive, accessible, and visually stunning.',
    benefits: [
      { icon: 'ri-palette-line', title: 'Stunning Visuals', desc: 'Pixel-perfect designs that elevate your brand perception.' },
      { icon: 'ri-user-smile-line', title: 'Higher Conversions', desc: 'Optimized user flows that turn visitors into customers.' },
      { icon: 'ri-eye-line', title: 'Accessible Design', desc: 'WCAG 2.1 AA compliant designs for all users.' },
      { icon: 'ri-device-line', title: 'Multi-Platform', desc: 'Consistent design language across web, mobile, and tablet.' },
    ],
    features: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems', 'Usability Testing', 'Responsive Design', 'Micro-Interactions', 'Brand Identity'],
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'InVision', 'Maze', 'Lookback'],
    industries: ['SaaS', 'Fintech', 'Healthcare', 'E-Commerce', 'Education', 'Consumer Apps'],
    faqs: [
      { q: 'What is your design process?', a: 'Discovery → Research → Wireframing → Visual Design → Prototyping → Testing → Handoff → Iteration.' },
      { q: 'Do you create design systems?', a: 'Yes, we build comprehensive design systems with components, tokens, and documentation for scale.' },
      { q: 'How many revision rounds are included?', a: 'We include unlimited revisions during the design phase to ensure you are 100% satisfied.' },
    ],
    relatedSlugs: ['website-development', 'mobile-app-development', 'digital-marketing'],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return servicesData.filter((s) => slugs.includes(s.slug));
}
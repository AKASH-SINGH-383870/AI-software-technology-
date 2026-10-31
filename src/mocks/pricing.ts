export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const servicePricing: Record<string, PricingPlan[]> = {
  'website-development': [
    { name: 'Starter', price: '₹29,999', period: 'starting', desc: 'Perfect for small businesses and startups looking to establish an online presence.', features: ['5 Responsive Pages', 'CMS Integration', 'SSL Certificate', 'Mobile Optimized', 'Contact Form', 'Basic SEO Setup', '1 Month Support'], cta: 'Get Started' },
    { name: 'Professional', price: '₹79,999', period: 'starting', desc: 'Ideal for growing companies needing custom design and advanced functionality.', features: ['15 Custom Pages', 'Advanced CMS', 'E-Commerce Ready', 'Custom Animations', 'Blog Integration', 'Advanced SEO', 'Analytics Setup', '3 Months Support', 'Performance Optimization'], popular: true, cta: 'Most Popular' },
    { name: 'Enterprise', price: '₹1,99,999', period: 'starting', desc: 'For large-scale web applications with complex integrations and high traffic.', features: ['Unlimited Pages', 'Custom Web App', 'API Development', 'Third-Party Integrations', 'Multi-Language Support', 'Load Testing', 'CI/CD Pipeline', '12 Months Support', 'Dedicated PM'], cta: 'Contact Us' },
  ],
  'mobile-app-development': [
    { name: 'Starter', price: '₹49,999', period: 'starting', desc: 'Simple app with essential features for a single platform.', features: ['Single Platform (iOS or Android)', '5 Core Screens', 'Basic UI Design', 'Push Notifications', 'App Store Submission', '1 Month Support'], cta: 'Get Started' },
    { name: 'Professional', price: '₹1,49,999', period: 'starting', desc: 'Feature-rich cross-platform app with backend integration.', features: ['Cross-Platform (Flutter)', 'Up to 15 Screens', 'Premium UI/UX Design', 'Backend API Integration', 'User Authentication', 'In-App Purchases', 'Offline Mode', '3 Months Support', 'App Store Optimization'], popular: true, cta: 'Most Popular' },
    { name: 'Enterprise', price: '₹4,99,999', period: 'starting', desc: 'Full-scale mobile solution with custom backend and advanced features.', features: ['Both Platforms (Native)', 'Unlimited Screens', 'Custom Backend Dev', 'Real-Time Features', 'AI/ML Integration', 'Advanced Security', 'CI/CD Pipeline', '12 Months Support', 'Dedicated PM', 'Scalable Architecture'], cta: 'Contact Us' },
  ],
  'custom-software': [
    { name: 'MVP', price: '₹99,999', period: 'starting', desc: 'Quick MVP to validate your idea and get early user feedback.', features: ['Core Features Only', 'Basic UI', 'Cloud Deployment', 'Admin Panel', 'API Documentation', '2 Months Support'], cta: 'Get Started' },
    { name: 'Professional', price: '₹3,49,999', period: 'starting', desc: 'Full-featured application built to scale with your business growth.', features: ['Complete Feature Set', 'Custom UI/UX Design', 'Microservices Architecture', 'Role-Based Access', 'Third-Party Integrations', 'Data Migration', 'Automated Testing', '6 Months Support', 'Performance Optimization'], popular: true, cta: 'Most Popular' },
    { name: 'Enterprise', price: '₹7,99,999', period: 'starting', desc: 'End-to-end solution with dedicated team and ongoing development.', features: ['Full Custom Development', 'Multi-Tenant Architecture', 'Advanced Security Audits', 'High Availability Setup', 'Disaster Recovery', 'Compliance Certifications', 'Custom Integrations', '12 Months Support', 'Dedicated Team'], cta: 'Contact Us' },
  ],
  'ai-automation': [
    { name: 'AI Starter', price: '₹79,999', period: 'starting', desc: 'Simple AI chatbot or workflow automation for a single use case.', features: ['Single AI Model Integration', 'Basic Chatbot', 'Simple Workflow Automation', 'API Access', 'Basic Dashboard', '2 Months Support'], cta: 'Get Started' },
    { name: 'AI Professional', price: '₹2,99,999', period: 'starting', desc: 'Multi-model AI solution with custom training and advanced features.', features: ['Multi-Model AI Integration', 'Custom Model Training', 'Advanced NLP/OCR', 'Predictive Analytics', 'Real-Time Processing', 'Vector Database', 'Comprehensive Dashboard', '6 Months Support', 'A/B Testing Framework'], popular: true, cta: 'Most Popular' },
    { name: 'AI Enterprise', price: '₹6,99,999', period: 'starting', desc: 'Full-scale AI deployment with dedicated ML team and continuous improvement.', features: ['Enterprise AI Suite', 'Custom ML Pipelines', 'Computer Vision', 'Recommendation Engine', 'On-Premise Deployment', 'Auto-Scaling Infrastructure', 'Continuous Model Training', '12 Months Support', 'Dedicated ML Team'], cta: 'Contact Us' },
  ],
  'erp-solutions': [
    { name: 'ERP Essentials', price: '₹1,99,999', period: 'starting', desc: 'Core ERP modules for small businesses to digitize operations.', features: ['Finance Module', 'Inventory Control', 'Basic HR Module', 'Standard Reports', 'User Training', 'Cloud Hosting', '3 Months Support'], cta: 'Get Started' },
    { name: 'ERP Professional', price: '₹4,99,999', period: 'starting', desc: 'Comprehensive ERP with industry-specific customizations.', features: ['All Core Modules', 'Custom Workflows', 'Advanced Analytics', 'Supply Chain Management', 'CRM Integration', 'Quality Control', 'Mobile Access', '6 Months Support', 'API Integrations'], popular: true, cta: 'Most Popular' },
    { name: 'ERP Enterprise', price: '₹9,99,999', period: 'starting', desc: 'Full-scale ERP transformation with dedicated implementation team.', features: ['Full ERP Suite', 'Custom Module Development', 'BI Dashboard (Power BI)', 'Multi-Company Support', 'Compliance Management', 'Data Migration', 'On-Premise Option', '12 Months Support', 'Dedicated Team'], cta: 'Contact Us' },
  ],
  'crm-solutions': [
    { name: 'CRM Starter', price: '₹49,999', period: 'starting', desc: 'Essential CRM for small sales teams to manage leads and deals.', features: ['Lead Management', 'Contact Database', 'Basic Pipeline', 'Email Integration', 'Task Reminders', '2 Months Support'], cta: 'Get Started' },
    { name: 'CRM Professional', price: '₹1,49,999', period: 'starting', desc: 'Advanced CRM with automation and analytics for growing teams.', features: ['Advanced Pipeline', 'Marketing Automation', 'Custom Dashboards', 'Email Sequences', 'Mobile CRM App', 'Third-Party Integrations', 'Role-Based Access', '6 Months Support', 'API Access'], popular: true, cta: 'Most Popular' },
    { name: 'CRM Enterprise', price: '₹3,99,999', period: 'starting', desc: 'Full-scale CRM with AI insights and unlimited customizations.', features: ['AI Lead Scoring', 'Custom Module Development', 'Advanced Analytics', 'Unlimited Integrations', 'White-Label Option', 'Dedicated Server', 'SLA Guarantee', '12 Months Support', 'Dedicated PM'], cta: 'Contact Us' },
  ],
  'digital-marketing': [
    { name: 'Growth Starter', price: '₹19,999', period: '/month', desc: 'Essential digital marketing for businesses starting their online journey.', features: ['SEO Audit & On-Page', 'Google My Business', 'Social Media (2 Platforms)', 'Monthly Report', '5 Blog Posts/Month', 'Basic Analytics'], cta: 'Get Started' },
    { name: 'Growth Accelerator', price: '₹49,999', period: '/month', desc: 'Comprehensive marketing strategy with multi-channel campaigns.', features: ['Full SEO Suite', 'Google Ads Management', 'Social Media (4 Platforms)', 'Content Marketing', 'Email Campaigns', 'PPC Optimization', 'CRO Audit', 'Bi-Weekly Reports', 'Dedicated Account Manager'], popular: true, cta: 'Most Popular' },
    { name: 'Growth Enterprise', price: '₹1,49,999', period: '/month', desc: 'Full-scale digital marketing with dedicated team and advanced strategies.', features: ['Full Digital Strategy', 'Multi-Channel Ads', 'Influencer Marketing', 'Video Production', 'Advanced CRO', 'Competitor Analysis', 'Custom Dashboards', 'Weekly Reports', 'Dedicated Team (5+)', 'PR Outreach'], cta: 'Contact Us' },
  ],
  'cloud-solutions': [
    { name: 'Cloud Starter', price: '₹49,999', period: 'starting', desc: 'Basic cloud setup and migration for small applications.', features: ['Single Cloud Provider', 'Basic Migration', 'Monitoring Setup', 'Security Baseline', 'Backup Configuration', 'Documentation', '1 Month Support'], cta: 'Get Started' },
    { name: 'Cloud Professional', price: '₹1,99,999', period: 'starting', desc: 'Comprehensive cloud infrastructure with DevOps and automation.', features: ['Multi-Cloud Setup', 'Kubernetes Orchestration', 'CI/CD Pipeline', 'Auto-Scaling', 'Disaster Recovery', 'Advanced Monitoring', 'Security Hardening', 'Cost Optimization', '6 Months Support'], popular: true, cta: 'Most Popular' },
    { name: 'Cloud Enterprise', price: '₹4,99,999', period: 'starting', desc: 'Enterprise cloud transformation with dedicated SRE team.', features: ['Full Cloud Architecture', 'Multi-Region Deployment', 'Zero-Trust Security', 'Compliance (SOC2/ISO)', '24/7 Monitoring', 'SRE Support', 'Training & Handoff', '12 Months Support', 'Dedicated SRE Team'], cta: 'Contact Us' },
  ],
  'ui-ux-design': [
    { name: 'Design Starter', price: '₹19,999', period: 'starting', desc: 'Essential UI design for a single product or landing page.', features: ['Single Page/Screen', 'UI Design Only', 'Basic Wireframes', '1 Revision Round', 'Figma File', 'Style Guide'], cta: 'Get Started' },
    { name: 'Design Professional', price: '₹59,999', period: 'starting', desc: 'Complete UX research and UI design for web or mobile app.', features: ['User Research', 'UX Audit', 'Wireframing', 'UI Design (15+ Screens)', 'Interactive Prototype', 'Design System', 'Usability Testing', 'Unlimited Revisions', 'Developer Handoff'], popular: true, cta: 'Most Popular' },
    { name: 'Design Enterprise', price: '₹1,49,999', period: 'starting', desc: 'End-to-end design transformation with brand strategy included.', features: ['Full UX Research', 'Brand Strategy', 'Complete Design System', 'Unlimited Screens', 'Motion Design', 'Micro-Interactions', 'Accessibility Audit', 'A/B Testing', 'Ongoing Iterations', 'Dedicated Designer'], cta: 'Contact Us' },
  ],
};
import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export function usePageSEO(config: SEOConfig) {
  useEffect(() => {
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    // Update title
    document.title = config.title;

    // Update description
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && config.description) {
      descEl.setAttribute('content', config.description);
    }

    // Update keywords
    if (config.keywords) {
      let kwEl = document.querySelector('meta[name="keywords"]');
      if (!kwEl) {
        kwEl = document.createElement('meta');
        kwEl.setAttribute('name', 'keywords');
        document.head.appendChild(kwEl);
      }
      kwEl.setAttribute('content', config.keywords);
    }

    // Update canonical
    if (config.canonical) {
      let canEl = document.querySelector('link[rel="canonical"]');
      if (!canEl) {
        canEl = document.createElement('link');
        canEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canEl);
      }
      canEl.setAttribute('href', config.canonical);
    }

    // Update OG title
    if (config.ogTitle) {
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', config.ogTitle);
    }

    // Update OG description
    if (config.ogDescription) {
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', config.ogDescription);
    }

    // Update OG image
    if (config.ogImage) {
      const ogImgEl = document.querySelector('meta[property="og:image"]');
      if (ogImgEl) ogImgEl.setAttribute('content', config.ogImage);
    }

    // Noindex handling
    if (config.noindex) {
      let robotsEl = document.querySelector('meta[name="robots"]');
      if (!robotsEl) {
        robotsEl = document.createElement('meta');
        robotsEl.setAttribute('name', 'robots');
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute('content', 'noindex, nofollow');
    }

    return () => {
      document.title = originalTitle;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', originalDescription);
    };
  }, [config.title, config.description, config.keywords, config.ogTitle, config.ogDescription, config.ogImage, config.canonical, config.noindex]);
}
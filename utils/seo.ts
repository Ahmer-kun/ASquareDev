// utils/seo.ts
// Centralised helper to keep document head metadata (title, description,
// canonical URL, Open Graph / Twitter tags) in sync with whatever route or
// blog post the user is currently viewing. The static tags in index.html
// are just sane defaults for the very first paint / for crawlers that don't
// execute JS — this is what keeps every real route accurate after that.

export const SITE_URL = 'https://asquardev.vercel.app';

export interface SEOOptions {
  title: string;
  description: string;
  path: string; // e.g. '/', '/portfolio', '/portfolio/some-post-slug'
  image?: string;
}

const setMetaContent = (selector: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', value);
};

const setLinkHref = (selector: string, value: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('href', value);
};

export const setSEO = ({ title, description, path, image }: SEOOptions): void => {
  const normalizedPath = path === '/' ? '' : path;
  const url = `${SITE_URL}${normalizedPath}`;

  document.title = title;

  setMetaContent('meta[name="description"]', description);
  setLinkHref('link[rel="canonical"]', url);

  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[property="og:url"]', url);

  setMetaContent('meta[property="twitter:title"]', title);
  setMetaContent('meta[property="twitter:description"]', description);
  setMetaContent('meta[property="twitter:url"]', url);

  if (image) {
    setMetaContent('meta[property="og:image"]', image);
    setMetaContent('meta[property="twitter:image"]', image);
  }
};

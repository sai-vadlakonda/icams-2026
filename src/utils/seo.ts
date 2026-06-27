export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = 'ICAMS 2026';
const BASE_URL = 'https://www.icams2026.org';

/**
 * Builds consistent SEO meta values for a page.
 */
export function buildSeo({ title, description, path }: SeoMeta) {
  return {
    fullTitle: `${title} | ${SITE_NAME}`,
    description,
    url: `${BASE_URL}${path}`,
  };
}

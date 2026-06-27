import { Helmet } from 'react-helmet-async';
import { buildSeo } from '@/utils/seo';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

/**
 * Drops consistent <title>, meta description, canonical and OG tags
 * onto every page. Use once near the top of each page component.
 */
export function SEO({ title, description, path }: SEOProps) {
  const { fullTitle, url } = buildSeo({ title, description, path });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}

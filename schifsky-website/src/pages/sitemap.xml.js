import { site, projects } from '../data/site.js';
import { liveRoutes } from '../data/routes.js';
import { servicePages } from '../data/servicePages.js';
import { getCollection } from 'astro:content';

// Generates /sitemap.xml from live routes + service pages + projects + posts.
export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const paths = [
    ...liveRoutes,
    ...servicePages.map((s) => `/${s.slug}/`),
    ...projects.map((p) => `/projects/${p.slug}/`),
    ...posts.map((p) => `/${p.slug}/`),
  ];

  const urls = paths
    .map((path) => {
      const loc = new URL(path, site.domain).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}

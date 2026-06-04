const BASE_URL = 'https://propertydronerealty.com';
const API_BASE = 'https://api.propertydronerealty.com/api';

// ─── Static Routes ────────────────────────────────────────────────────────────

const staticRoutes = [
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/about-us-real-estate-agency', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/our-services-real-estate-services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact-us-propertydrone-realty', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/career', changeFrequency: 'weekly', priority: 0.6 },

  // Property listings
  { path: '/our-properties-in-pune', changeFrequency: 'daily', priority: 0.9 },
  { path: '/luxe-properties', changeFrequency: 'daily', priority: 0.9 },
  { path: '/commercial-properties', changeFrequency: 'daily', priority: 0.8 },
  { path: '/plots', changeFrequency: 'daily', priority: 0.8 },

  // BHK / type category pages
  { path: '/our-properties-in-pune/1rk', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/our-properties-in-pune/1bhk', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/our-properties-in-pune/2bhk', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/our-properties-in-pune/3bhk', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/our-properties-in-pune/4bhk', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/our-properties-in-pune/commercial-office', changeFrequency: 'weekly', priority: 0.8 },

  // Developers
  { path: '/estate_developer', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/estate_developer/anp-corp', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/estate_developer/kasturi', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/estate_developer/krunal-group', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/estate_developer/majestique-developer', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/estate_developer/skyi-developers', changeFrequency: 'weekly', priority: 0.65 },
  { path: '/estate_developer/solitaire', changeFrequency: 'weekly', priority: 0.65 },

  // Blog & News
  { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
  { path: '/news', changeFrequency: 'daily', priority: 0.7 },

  // NRI & Calculators
  { path: '/nri-corner', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/emi-calculator', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/roi-calculator', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/irr-calculator', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/lrd-calculator', changeFrequency: 'yearly', priority: 0.5 },

  // Misc
  { path: '/post-property', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/compareproperties', changeFrequency: 'monthly', priority: 0.4 },

  // Legal
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-condition', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/thank-you', changeFrequency: 'yearly', priority: 0.2 },
];

// ─── Dynamic Slug Fetchers ────────────────────────────────────────────────────

async function fetchSlugs(endpoint) {
  try {
    const res = await fetch(`${API_BASE}/${endpoint}?limit=1000`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const list = Array.isArray(data)
      ? data
      : data.properties ?? data.blogs ?? data.news ?? data.data ?? [];
    return list
      .map((item) => item.slug || item._id)
      .filter(Boolean);
  } catch {
    return [];
  }
}

// ─── Sitemap Export ───────────────────────────────────────────────────────────

export default async function sitemap() {
  const now = new Date();

  // Build static entries
  const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Fetch dynamic slugs in parallel
  const [propertySlugs, blogSlugs, newsSlugs] = await Promise.all([
    fetchSlugs('properties'),
    fetchSlugs('blogs'),
    fetchSlugs('news'),
  ]);

  const propertyEntries = propertySlugs.map((slug) => ({
    url: `${BASE_URL}/our-properties-in-pune/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const luxeEntries = propertySlugs.map((slug) => ({
    url: `${BASE_URL}/luxe-properties/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const commercialEntries = propertySlugs.map((slug) => ({
    url: `${BASE_URL}/commercial-properties/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  const plotEntries = propertySlugs.map((slug) => ({
    url: `${BASE_URL}/plots/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const newsEntries = newsSlugs.map((slug) => ({
    url: `${BASE_URL}/news/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [
    ...staticEntries,
    ...propertyEntries,
    ...luxeEntries,
    ...commercialEntries,
    ...plotEntries,
    ...blogEntries,
    ...newsEntries,
  ];
}

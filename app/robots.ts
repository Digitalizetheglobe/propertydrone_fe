import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all well-behaved crawlers on public content
        userAgent: '*',
        allow: [
          '/',
          '/about-us-real-estate-agency',
          '/our-services-real-estate-services',
          '/contact-us-propertydrone-realty',
          '/career',
          '/our-properties-in-pune',
          '/our-properties-in-pune/',
          '/luxe-properties',
          '/luxe-properties/',
          '/commercial-properties',
          '/commercial-properties/',
          '/plots',
          '/plots/',
          '/estate_developer',
          '/estate_developer/',
          '/blog',
          '/blog/',
          '/news',
          '/news/',
          '/nri-corner',
          '/emi-calculator',
          '/roi-calculator',
          '/irr-calculator',
          '/lrd-calculator',
          '/privacy-policy',
          '/terms-and-condition',
          '/compareproperties',
          '/post-property',
          '/thank-you',
        ],
        disallow: [
          // Private / admin areas
          '/dashboard',
          '/dashboard/',
          '/profile',
          '/saved-properties',

          // Auth routes
          '/login',
          '/register',
          '/signin',
          '/signup',
          '/weblogin',
          '/webregister',

          // Internal API routes
          '/api/',

          // Next.js internals
          '/_next/',
          '/static/',
        ],
      },
      {
        // Block GPTBot (OpenAI training crawler)
        userAgent: 'GPTBot',
        allow: ['/'],
      },
      {
        // Allow Google Extended (Bard/Gemini crawler)
        userAgent: 'Google-Extended',
        allow: ['/'],
      },
      {
        // Allow CCBot (Common Crawl)
        userAgent: 'CCBot',
        allow: ['/'],
      },
      {
        // Allow Anthropic's Claude crawler
        userAgent: 'anthropic-ai',
        allow: ['/'],
      },
    ],
    sitemap: 'https://propertydronerealty.com/sitemap.xml',
    host: 'https://propertydronerealty.com',
  };
}

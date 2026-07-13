import type { Metadata } from 'next'

// Uses NEXT_PUBLIC_API_URL in production, falls back to localhost for dev
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000'
const BASE_URL = 'https://propertydronerealty.com'

// ─── Location slug metadata map ───────────────────────────────────────────────

const LOCATION_META: Record<string, { title: string; description: string; keywords?: string[] }> = {
  hinjewadi: {
    title: 'Properties in Hinjewadi Pune | PropertyDrone Realty',
    description:
      'Explore verified properties for sale in Hinjewadi, Pune. Flats, villas & commercial spaces near the IT corridor. Expert guidance from PropertyDrone Realty.',
    keywords: [
      'properties in Hinjewadi',
      'flats for sale Hinjewadi Pune',
      'Hinjewadi IT corridor real estate',
      'buy property Hinjewadi',
      'PropertyDrone Hinjewadi',
    ],
  },
  baner: {
    title: 'Properties in Baner Pune | PropertyDrone Realty',
    description:
      'Find verified flats, villas & luxury properties for sale in Baner, Pune. Explore top projects by leading developers. Book a free site visit today.',
    keywords: [
      'properties in Baner Pune',
      'flats for sale Baner',
      'luxury homes Baner Pune',
      'buy flat Baner',
      'PropertyDrone Baner',
    ],
  },
  balewadi: {
    title: 'Properties in Balewadi Pune | PropertyDrone Realty',
    description:
      'Browse verified flats & properties for sale in Balewadi, Pune. Great connectivity to Baner & Hinjawadi. Expert guidance from PropertyDrone Realty.',
    keywords: [
      'properties in Balewadi Pune',
      'flats for sale Balewadi',
      'Balewadi real estate Pune',
      'buy property Balewadi',
      'PropertyDrone Balewadi',
    ],
  },
  ravet: {
    title: 'Properties in Ravet Pune | PropertyDrone Realty',
    description:
      'Discover affordable & premium properties for sale in Ravet, Pune. Well-connected to PCMC & Hinjawadi IT Park. Expert real estate assistance available.',
    keywords: [
      'properties in Ravet Pune',
      'flats for sale Ravet',
      'Ravet real estate Pune',
      'buy property Ravet',
      'PCMC Ravet flats',
    ],
  },

  wakad: {
    title: 'Properties in Wakad Pune | PropertyDrone Realty',
    description:
      'Browse verified flats & apartments for sale in Wakad, Pune. Prime location near Hinjawadi & Baner with excellent connectivity.',
    keywords: [
      'properties in Wakad',
      'flats for sale Wakad',
      'Wakad real estate Pune',
      'buy property Wakad',
    ],
  },
}

// ─── BHK / type slug metadata map ────────────────────────────────────────────

const BHK_META: Record<string, { title: string; description: string; keywords?: string[] }> = {
  '1rk': {
    title: '1 RK & Studio Flats for Sale in Pune',
    description:
      'Find affordable 1 RK & studio flats for sale in Pune. Explore verified listings in Baner, Hinjawadi & Wakad with expert guidance.',
    keywords: [
      '1 RK flats Pune',
      'studio flats Pune',
      '1 RK for sale Pune',
      'affordable flats Pune',
    ],
  },
  '1bhk': {
    title: '1 BHK Flats for Sale in Pune',
    description:
      'Browse verified 1 BHK flats for sale in Pune. Find best deals in Baner, Wakad, Kharadi & Hinjawadi with zero brokerage assistance.',
    keywords: [
      '1 BHK flats Pune',
      '1 BHK for sale Pune',
      'affordable 1 BHK Pune',
      '1 BHK Baner Wakad',
    ],
  },
  '2bhk': {
    title: '2 BHK Flats for Sale in Pune',
    description:
      "Explore 2 BHK flats for sale in Pune's top locations. Verified listings, best prices & expert guidance from PropertyDrone Realty.",
    keywords: [
      '2 BHK flats Pune',
      '2 BHK for sale Pune',
      '2 BHK Baner Wakad Hinjawadi',
      'PropertyDrone 2 BHK',
    ],
  },
  '3bhk': {
    title: '3 BHK Flats for Sale in Pune',
    description:
      'Find premium 3 BHK flats for sale in Pune. Explore luxury & affordable options in Baner, Wakad & Hinjawadi. Book a site visit today.',
    keywords: [
      '3 BHK flats Pune',
      '3 BHK for sale Pune',
      'premium 3 BHK Pune',
      '3 BHK Baner Hinjawadi',
    ],
  },
  '4bhk': {
    title: '4 BHK Luxury Flats for Sale in Pune',
    description:
      'Discover spacious 4 BHK luxury flats for sale in Pune. Premium properties by top developers in Baner, Kharadi & Viman Nagar.',
    keywords: [
      '4 BHK flats Pune',
      '4 BHK luxury Pune',
      '4 BHK for sale Pune',
      'premium 4 BHK Baner Kharadi',
    ],
  },
  'commercial-office': {
    title: 'Commercial Office Space for Sale in Pune',
    description:
      'Find verified commercial office spaces for sale & rent in Pune. Ideal for businesses in Baner, Hinjawadi & Kharadi IT corridors.',
    keywords: [
      'commercial office Pune',
      'office space for sale Pune',
      'office space Hinjawadi',
      'commercial space Baner Kharadi',
    ],
  },
}

// ─── Helper: resolve image URL ────────────────────────────────────────────────

function resolveImageUrl(property: Record<string, any>): string | null {
  const imgs = property.multipleImages
  if (Array.isArray(imgs) && imgs.length > 0) {
    const first = imgs[0]
    const path: string = typeof first === 'string' ? first : first?.path ?? ''
    if (path) {
      if (path.startsWith('http')) return path
      const clean = path.replace(/\\/g, '/').replace(/^(?!\/)/, '/')
      return `http://localhost:9000${clean}`
    }
  }
  return null
}

// ─── Helper: build rich unique metadata for a single property ─────────────────

function buildPropertyMeta(property: Record<string, any>, slug: string): Metadata {
  const name: string = property.propertyName || ''
  const location: string = property.location || ''
  const city: string = property.city || 'Pune'
  const topology: string = property.topology || ''
  const budget: string = property.tentativeBudget || ''
  const area: string = property.carpetArea || ''
  const possession: string = property.possession || ''
  const reraNumber: string = property.reraNumber || ''
  const propertyType: string = property.propertyType || ''
  const event: string = property.event || ''

  // ── Title ──────────────────────────────────────────────────────────────────
  const title: string =
    property.seoTitle?.trim() ||
    (() => {
      const parts: string[] = []
      if (name) parts.push(name)
      if (topology) parts.push(`${topology}`)
      if (location) parts.push(`in ${location}`)
      else if (city) parts.push(`in ${city}`)
      if (budget) parts.push(`at ${budget}`)
      return parts.join(' ') || `Property for Sale in ${city}`
    })()

  // ── Description ────────────────────────────────────────────────────────────
  const description: string =
    property.seoDescription?.trim() ||
    (() => {
      const parts: string[] = []

      if (name && location) {
        parts.push(`Explore ${name}, a premium ${topology ? topology + ' ' : ''}property located in ${location}, ${city}.`)
      } else if (name) {
        parts.push(`Explore ${name}, a verified property in ${city}.`)
      }

      if (area) parts.push(`Carpet area: ${area} sq.ft.`)
      if (budget) parts.push(`Price: ${budget}.`)
      if (possession) parts.push(`Possession: ${possession}.`)
      if (reraNumber) parts.push(`RERA No: ${reraNumber}.`)
      if (event) parts.push(`${event}.`)

      parts.push('Book a free site visit with PropertyDrone Realty today.')

      return parts.join(' ')
    })()

  // ── Keywords ───────────────────────────────────────────────────────────────
  const keywords: string[] = property.seoKeywords
    ? property.seoKeywords.split(',').map((k: string) => k.trim()).filter(Boolean)
    : [
      name,
      topology ? `${topology} flat in ${city}` : '',
      location ? `property in ${location}` : '',
      `buy property in ${city}`,
      propertyType ? `${propertyType} in ${city}` : '',
      budget ? `property at ${budget}` : '',
      'verified property listing Pune',
      'PropertyDrone Realty',
      reraNumber ? `RERA ${reraNumber}` : '',
    ].filter(Boolean)

  // ── Image ──────────────────────────────────────────────────────────────────
  const imageUrl = resolveImageUrl(property)
  const canonicalUrl = property.canonical || `${BASE_URL}/our-properties-in-pune/${slug}`

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PropertyDrone Realty',
      type: 'website',
      locale: 'en_IN',
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${name} — ${location}, ${city}`,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  }
}

// ─── generateMetadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const slugLower = slug?.toLowerCase() ?? ''

  // 1. BHK/type slug
  if (BHK_META[slugLower]) {
    const meta = BHK_META[slugLower]
    return {
      title: { absolute: meta.title },
      description: meta.description,
      ...(meta.keywords && { keywords: meta.keywords }),
      alternates: { canonical: `${BASE_URL}/our-properties-in-pune/${slugLower}` },
      robots: { index: true, follow: true },
    }
  }

  // 2. Known location slug
  if (LOCATION_META[slugLower]) {
    const meta = LOCATION_META[slugLower]
    return {
      title: { absolute: meta.title },
      description: meta.description,
      ...(meta.keywords && { keywords: meta.keywords }),
      alternates: { canonical: `${BASE_URL}/our-properties-in-pune/${slugLower}` },
      robots: { index: true, follow: true },
    }
  }

  // 3. Individual property — fetch from API and build rich unique metadata
  try {
    const res = await fetch(`${API_BASE}/properties/${slug}`, {
      next: { revalidate: 0 }, // re-generate at most every hour
    })

    if (res.ok) {
      const property = await res.json()
      return buildPropertyMeta(property, slug)
    }
  } catch {
    // fall through to default
  }

  // 4. Fallback
  return {
    title: { absolute: 'Property for Sale in Pune | PropertyDrone Realty' },
    description:
      'View verified property listings in Pune with expert guidance from PropertyDrone Realty. Browse by location, budget & BHK type.',
    alternates: { canonical: `${BASE_URL}/our-properties-in-pune/${slug}` },
    robots: { index: true, follow: true },
  }
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

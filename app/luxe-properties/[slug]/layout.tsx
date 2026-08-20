import type { Metadata } from 'next'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.propertydronerealty.com'
const BASE_URL = 'https://api.propertydronerealty.com'

function resolveImageUrl(property: Record<string, any>): string | null {
  const imgs = property.multipleImages
  if (Array.isArray(imgs) && imgs.length > 0) {
    const first = imgs[0]
    const path: string = typeof first === 'string' ? first : first?.path ?? ''
    if (path) {
      if (path.startsWith('http')) return path
      const clean = path.replace(/\\/g, '/').replace(/^(?!\/)/, '/')
      return `https://api.propertydronerealty.com${clean}`
    }
  }
  return null
}

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

  const title: string =
    property.seoTitle?.trim() ||
    (() => {
      const parts: string[] = []
      if (name) parts.push(name)
      if (topology) parts.push(`${topology}`)
      if (location) parts.push(`in ${location}`)
      else if (city) parts.push(`in ${city}`)
      if (budget) parts.push(`at ${budget}`)
      return parts.join(' ') || `Luxury Property for Sale in ${city}`
    })()

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

  const keywords: string[] = property.seoKeywords
    ? property.seoKeywords.split(',').map((k: string) => k.trim()).filter(Boolean)
    : [
      name,
      topology ? `${topology} luxury flat in ${city}` : '',
      location ? `luxury property in ${location}` : '',
      `buy luxury property in ${city}`,
      propertyType ? `${propertyType} in ${city}` : '',
      budget ? `luxury property at ${budget}` : '',
      'verified luxury property listing Pune',
      'PropertyDrone Realty',
      reraNumber ? `RERA ${reraNumber}` : '',
    ].filter(Boolean)

  const imageUrl = resolveImageUrl(property)
  const canonicalUrl = property.canonical || `${BASE_URL}/luxe-properties/${slug}`

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const res = await fetch(`${API_BASE}/properties/${slug}`, {
      next: { revalidate: 0 },
    })

    if (res.ok) {
      const property = await res.json()
      return buildPropertyMeta(property, slug)
    }
  } catch {
    // fall through to default
  }

  return {
    title: { absolute: 'Luxury Property for Sale in Pune | PropertyDrone Realty' },
    description:
      'View verified luxury property listings in Pune with expert guidance from PropertyDrone Realty. Browse by location, budget & BHK type.',
    alternates: { canonical: `${BASE_URL}/luxe-properties/${slug}` },
    robots: { index: true, follow: true },
  }
}

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

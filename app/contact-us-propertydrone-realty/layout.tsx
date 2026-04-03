import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Contact PropertyDrone Realty Pune' },
  description:
    'Contact PropertyDrone Realty for property advice, site visits & consultations in Pune. Book your appointment today.',
  keywords: [
    'contact PropertyDrone Realty',
    'property consultation Pune',
    'site visit Pune',
    'real estate advice Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/contact-us-propertydrone-realty',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Property Drone Realty',
    url: 'https://propertydronerealty.com/contact-us-propertydrone-realty',
    mainEntity: {
      '@type': 'Organization',
      name: 'Property Drone Realty',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9561477575',
        contactType: 'Customer Service',
        areaServed: 'IN',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Have a property query in Pune? Contact Property Drone Realty for expert real estate advice, site visits, NRI support, and investment consultations.',
  keywords: [
    'contact real estate Pune',
    'property site visit Pune',
    'NRI real estate support',
    'real estate consultation Pune',
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

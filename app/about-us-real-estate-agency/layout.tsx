import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: 'We are a top real estate agency in Pune' },
  description:
    'Property Drone Realty is a trusted real estate agency in Pune offering expert guidance on residential and commercial property buying, selling & investments.',
  keywords: [
    'real estate agency Pune',
    'luxury homes Pune',
    'premium flats Pune',
    'buy property Pune',
    'residential commercial property Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/about-us-real-estate-agency',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Property Drone Realty',
  url: 'https://propertydronerealty.com/about-us-real-estate-agency',
  description:
    'We are a top real estate agency in Pune helping buyers & investors with residential and commercial properties.',
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="about-us-org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      {children}
    </>
  )
}

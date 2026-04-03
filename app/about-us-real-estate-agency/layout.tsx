import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: 'About Us | PropertyDrone Realty Pune' },
  description:
    'Founded in 2020, PropertyDrone Realty is a trusted Pune real estate consultancy with expert advisors helping you find the right home.',
  keywords: [
    'real estate agency Pune',
    'PropertyDrone Realty',
    'Pune real estate consultancy',
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

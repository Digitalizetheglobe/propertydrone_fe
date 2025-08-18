import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: 'Complete NRI Property Services in India | Property Drone Realty' },
  description:
    'From exclusive listings to POA, loans & virtual tours — we offer complete NRI property services in India with 24/7 support & expert legal guidance.',
  keywords: [
    'NRI property services',
    'NRI real estate India',
    'power of attorney NRI',
    'virtual tour property India',
    'invest in India NRI',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/nri-corner',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NRI Property Services India',
  url: 'https://propertydronerealty.com/nri-corner',
  description:
    'Full-service NRI property management — POA, loans, documentation, and virtual tours by Property Drone Realty.',
}

export default function NriCornerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="nri-corner-webpage-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      {children}
    </>
  )
}

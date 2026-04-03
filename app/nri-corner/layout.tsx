import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: 'NRI Property Investment in Pune' },
  description:
    'Invest in Pune from abroad with expert NRI support, legal help, home loans & virtual tours. Get dedicated assistance today.',
  keywords: [
    'NRI property investment Pune',
    'NRI real estate India',
    'NRI home loan',
    'virtual tour property India',
    'invest in Pune NRI',
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

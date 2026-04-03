import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Bandra West Mumbai | PropertyDrone Realty' },
  description:
    'Explore luxury properties & premium flats for sale in Bandra West, Mumbai. Verified listings with expert guidance from PropertyDrone Realty.',
  keywords: [
    'properties in Bandra West',
    'flats for sale Bandra West Mumbai',
    'luxury apartments Bandra West',
    'buy property Bandra West',
    'PropertyDrone Bandra',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/bandra-west',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BandraWestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

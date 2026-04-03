import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Hinjewadi Pune | PropertyDrone Realty' },
  description:
    'Explore verified properties for sale in Hinjewadi, Pune. Flats, villas & commercial spaces near the IT corridor. Expert guidance from PropertyDrone Realty.',
  keywords: [
    'properties in Hinjewadi',
    'flats for sale Hinjewadi Pune',
    'Hinjewadi IT corridor real estate',
    'buy property Hinjewadi',
    'PropertyDrone Hinjewadi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/hinjewadi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HinjewadiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

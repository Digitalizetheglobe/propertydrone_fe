import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Balewadi Pune | PropertyDrone Realty' },
  description:
    'Browse verified flats & properties for sale in Balewadi, Pune. Great connectivity to Baner & Hinjawadi. Expert guidance from PropertyDrone Realty.',
  keywords: [
    'properties in Balewadi Pune',
    'flats for sale Balewadi',
    'Balewadi real estate Pune',
    'buy property Balewadi',
    'PropertyDrone Balewadi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/balewadi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BalewadiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

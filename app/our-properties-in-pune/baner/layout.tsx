import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Baner Pune | PropertyDrone Realty' },
  description:
    'Find verified flats, villas & luxury properties for sale in Baner, Pune. Explore top projects by leading developers. Book a free site visit today.',
  keywords: [
    'properties in Baner Pune',
    'flats for sale Baner',
    'luxury homes Baner Pune',
    'buy flat Baner',
    'PropertyDrone Baner',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/baner',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BanerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties for Sale in Pune | Flats & Villas' },
  description:
    'Browse verified properties in Pune. Filter by budget, location & area. Discover flats, villas & luxury homes easily.',
  keywords: [
    'properties for sale Pune',
    'flats for sale Pune',
    'villas Pune',
    'verified properties Pune',
    'buy property Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OurPropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

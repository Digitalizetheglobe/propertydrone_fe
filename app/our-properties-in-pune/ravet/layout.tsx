import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Ravet Pune | PropertyDrone Realty' },
  description:
    'Discover affordable & premium properties for sale in Ravet, Pune. Well-connected to PCMC & Hinjawadi IT Park. Expert real estate assistance available.',
  keywords: [
    'properties in Ravet Pune',
    'flats for sale Ravet',
    'Ravet real estate Pune',
    'buy property Ravet',
    'PCMC Ravet flats',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/ravet',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RavetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

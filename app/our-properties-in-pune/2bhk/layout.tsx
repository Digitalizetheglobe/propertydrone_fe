import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '2 BHK Flats for Sale in Pune' },
  description:
    "Explore 2 BHK flats for sale in Pune's top locations. Verified listings, best prices & expert guidance from PropertyDrone Realty.",
  keywords: [
    '2 BHK flats Pune',
    '2 BHK for sale Pune',
    '2 BHK Baner Wakad Hinjawadi',
    'PropertyDrone 2 BHK',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/2bhk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TwoBhkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

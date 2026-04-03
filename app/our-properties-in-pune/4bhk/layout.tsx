import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '4 BHK Luxury Flats for Sale in Pune' },
  description:
    'Discover spacious 4 BHK luxury flats for sale in Pune. Premium properties by top developers in Baner, Kharadi & Viman Nagar.',
  keywords: [
    '4 BHK flats Pune',
    '4 BHK luxury Pune',
    '4 BHK for sale Pune',
    'premium 4 BHK Baner Kharadi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/4bhk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FourBhkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

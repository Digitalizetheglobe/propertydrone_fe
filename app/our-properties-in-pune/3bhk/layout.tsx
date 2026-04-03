import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '3 BHK Flats for Sale in Pune' },
  description:
    'Find premium 3 BHK flats for sale in Pune. Explore luxury & affordable options in Baner, Wakad & Hinjawadi. Book a site visit today.',
  keywords: [
    '3 BHK flats Pune',
    '3 BHK for sale Pune',
    'premium 3 BHK Pune',
    '3 BHK Baner Hinjawadi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/3bhk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ThreeBhkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

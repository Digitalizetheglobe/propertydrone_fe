import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '1 BHK Flats for Sale in Pune' },
  description:
    'Browse verified 1 BHK flats for sale in Pune. Find best deals in Baner, Wakad, Kharadi & Hinjawadi with zero brokerage assistance.',
  keywords: [
    '1 BHK flats Pune',
    '1 BHK for sale Pune',
    'affordable 1 BHK Pune',
    '1 BHK Baner Wakad',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/1bhk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OneBhkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

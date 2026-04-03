import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: '1 RK & Studio Flats for Sale in Pune' },
  description:
    'Find affordable 1 RK & studio flats for sale in Pune. Explore verified listings in Baner, Hinjawadi & Wakad with expert guidance.',
  keywords: [
    '1 RK flats Pune',
    'studio flats Pune',
    '1 RK for sale Pune',
    'affordable flats Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/1rk',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OneRkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

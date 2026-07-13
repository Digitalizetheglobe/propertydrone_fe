import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Properties in Wakad Pune | PropertyDrone Realty' },
  description:
    'Browse verified flats & apartments for sale in Wakad, Pune. Prime location near Hinjawadi & Baner with excellent connectivity.',
  keywords: [
    'properties in Wakad',
    'flats for sale Wakad',
    'Wakad real estate Pune',
    'buy property Wakad',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/wakad',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WakadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

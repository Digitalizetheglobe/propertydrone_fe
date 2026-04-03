import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Real Estate Basics | Learn Property Buying in Pune' },
  description:
    'Learn the basics of real estate in Pune. Understand property types, buying process, home loans, RERA rules & investment tips with PropertyDrone Realty.',
  keywords: [
    'real estate basics Pune',
    'how to buy property Pune',
    'property buying guide India',
    'RERA rules Pune',
    'home loan guide Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/real_estate_basic',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RealEstateBasicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

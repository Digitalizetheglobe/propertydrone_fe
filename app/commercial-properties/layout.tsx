import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Commercial Properties for Sale in Pune' },
  description:
    'Find verified commercial shops, offices & spaces for sale in Pune. Best locations in Baner, Hinjawadi & Kharadi IT zones.',
  keywords: [
    'commercial properties Pune',
    'office space for sale Pune',
    'commercial shops Pune',
    'Baner commercial property',
    'Hinjawadi office space',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/commercial-properties',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CommercialPropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

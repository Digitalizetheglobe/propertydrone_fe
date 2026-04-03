import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Commercial Office Space for Sale in Pune' },
  description:
    'Find verified commercial office spaces for sale & rent in Pune. Ideal for businesses in Baner, Hinjawadi & Kharadi IT corridors.',
  keywords: [
    'commercial office Pune',
    'office space for sale Pune',
    'office space Hinjawadi',
    'commercial space Baner Kharadi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-properties-in-pune/commercial-office',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CommercialOfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Real Estate News Pune | Latest Updates' },
  description:
    'Stay updated with Pune real estate news, RERA updates, policies & market trends with PropertyDrone Realty.',
  keywords: [
    'real estate news Pune',
    'RERA updates Pune',
    'property market news India',
    'Pune real estate market trends',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/news',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Real Estate Services Pune | Buy, Sell & Invest' },
  description:
    'End-to-end real estate services in Pune including buying, selling, investment & project marketing. Get expert guidance today.',
  keywords: [
    'real estate services Pune',
    'buy sell property Pune',
    'property consulting Pune',
    'real estate investment Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/our-services-real-estate-services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Real Estate Services',
  description:
    'Expert real estate services in Pune – property consulting, sales & marketing, exclusive mandates, and end-to-end property management solutions.',
  keywords: [
    'real estate services Pune',
    'property consulting Pune',
    'sales and marketing real estate',
    'property management Pune',
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
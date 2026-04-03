import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Kasturi Housing Projects in Pune' },
  description:
    'Discover Kasturi Housing\'s ultra-luxury properties in Pune. Browse verified projects with detailed insights & drone views.',
  keywords: [
    'Kasturi Housing Pune',
    'Kasturi projects Pune',
    'luxury housing Pune',
    'PropertyDrone Kasturi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/kasturi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KasturiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

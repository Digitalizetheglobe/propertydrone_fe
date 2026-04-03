import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Solitaire Projects in Pune' },
  description:
    "Explore Solitaire's integrated township projects in Pune. Verified listings, drone views & expert real estate assistance.",
  keywords: [
    'Solitaire Pune',
    'Solitaire projects Pune',
    'integrated township Pune',
    'PropertyDrone Solitaire',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/solitaire',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SolitaireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

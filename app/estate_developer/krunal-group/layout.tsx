import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Krunal Group Projects in Pune' },
  description:
    'Explore Krunal Group\'s premium real estate projects in Pune. Find verified listings with best prices & expert support.',
  keywords: [
    'Krunal Group Pune',
    'Krunal Group projects',
    'premium real estate Pune',
    'PropertyDrone Krunal Group',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/krunal-group',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KrunalGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'kunal Group Projects in Pune' },
  description:
    'Explore kunal Group\'s premium real estate projects in Pune. Find verified listings with best prices & expert support.',
  keywords: [
    'kunal Group Pune',
    'kunal Group projects',
    'premium real estate Pune',
    'PropertyDrone kunal Group',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/kunal-group',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function kunalGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

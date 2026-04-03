import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Skyi Developers Projects in Pune' },
  description:
    "Discover Skyi Developers' sustainable homes & premium projects in Pune. Verified listings with expert guidance.",
  keywords: [
    'Skyi Developers Pune',
    'Skyi projects Pune',
    'sustainable homes Pune',
    'PropertyDrone Skyi',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/skyi-developers',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SkyiDevelopersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

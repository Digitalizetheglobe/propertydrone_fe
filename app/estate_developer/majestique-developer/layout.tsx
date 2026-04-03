import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Majestique Landmarks Projects in Pune' },
  description:
    'Browse Majestique Landmarks\' luxury living projects in Pune. Verified listings with drone views & expert consultation.',
  keywords: [
    'Majestique Landmarks Pune',
    'Majestique developer projects',
    'luxury living Pune',
    'PropertyDrone Majestique',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/majestique-developer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MajestiqueDeveloperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

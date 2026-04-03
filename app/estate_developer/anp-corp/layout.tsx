import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'ANP Corp Projects in Pune' },
  description:
    'Explore ANP Corp\'s premium residential & commercial projects in Pune. Verified listings with expert guidance from PropertyDrone Realty.',
  keywords: [
    'ANP Corp Pune',
    'ANP Corp projects',
    'ANP Corp residential Pune',
    'PropertyDrone ANP Corp',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/estate_developer/anp-corp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AnpCorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | PropertyDrone Realty Pune' },
  description:
    'Read PropertyDrone Realty\'s privacy policy. Learn how we collect, use & protect your personal data on our platform.',
  keywords: [
    'PropertyDrone privacy policy',
    'real estate data protection',
    'personal data real estate',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

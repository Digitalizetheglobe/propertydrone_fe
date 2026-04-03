import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Thank You | PropertyDrone Realty Pune' },
  description:
    'Thank you for contacting PropertyDrone Realty. Our expert team will reach out to you shortly for property assistance.',
  keywords: [
    'PropertyDrone Realty thank you',
    'property enquiry Pune',
  ],
  alternates: {
    canonical: 'https://propertydronerealty.com/thank-you',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

// pages/privacy-policy.js
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Property Drone Realty</title>
        <meta name="description" content="Privacy Policy for Property Drone Realty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Privacy Policy
          </h1>

          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                This Privacy Policy outlines how Property Drone Realty ("we", "our", or "us") 
                collects, uses, and safeguards your information via https://propertydronerealty.com. 
                By using our services, you agree to this Privacy Policy and our Terms of Use, 
                which are incorporated herein by reference. Please read both carefully. If you do not agree, 
                kindly refrain from using our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect personal data such as name, contact information, property preferences, and usage behavior.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                How We Use Your Information
              </h3>
              <p className="text-gray-700 mb-2">
                This information helps us:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li className="mb-2">Customize our services to your needs</li>
                <li className="mb-2">Keep you connected across platforms and informed about residential real estate updates</li>
                <li className="mb-2">Connect you with relevant parties for buying, selling, renting, or financing property, and facilitate efficient communication</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-6">
                Your data may be shared with real estate developers, service providers, or financial partners under strict confidentiality. 
                We do not sell your data. We use cookies and analytics tools to improve our website experience.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Data Protection
              </h2>
              <p className="text-gray-700 mb-6">
                We protect your data with appropriate security measures. You may request access to or deletion of your data by contacting us.
              </p>

              <hr className="my-8 border-gray-200" />

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                For questions, contact <a href="mailto:info@propertydronerealty.com" className="text-blue-600 hover:text-blue-800 hover:underline">info@propertydronerealty.com</a> or call +91 9730156575.
              </p>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
}
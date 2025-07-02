'use client';

import { useState } from 'react';

export default function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 my-10">
            Legal Information
          </h1>

          {/* Tab Navigation */}
          

          {/* Privacy Policy Tab */}
         

          {/* Terms & Conditions Tab */}
          {activeTab === 'terms' && (
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 text-lg">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  1. Service Description
                </h3>
                <p className="text-gray-700 mb-6">
                  Property Drone Realty provides professional drone photography and videography services 
                  for real estate properties, including aerial photography, property marketing materials, 
                  and related real estate services. All services are subject to weather conditions, 
                  regulatory approvals, and technical feasibility.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  2. Booking & Payment Terms
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li><strong>Booking:</strong> Services must be booked at least 48 hours in advance</li>
                    <li><strong>Payment:</strong> 50% deposit required upon booking, balance due upon completion</li>
                    <li><strong>Cancellation:</strong> 24-hour notice required for cancellations to avoid charges</li>
                    <li><strong>Weather Policy:</strong> Sessions may be rescheduled due to adverse weather conditions</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  3. Drone Operations & Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  All drone operations are conducted in compliance with:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                  <li>Directorate General of Civil Aviation (DGCA) regulations</li>
                  <li>Local aviation authorities and no-fly zone restrictions</li>
                  <li>Property owner permissions and privacy laws</li>
                  <li>Insurance requirements and safety protocols</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  4. Intellectual Property & Usage Rights
                </h3>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">
                    <strong>Client Rights:</strong> You receive full commercial usage rights for marketing your property.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Our Rights:</strong> We retain the right to use images for portfolio and marketing purposes.
                  </p>
                  <p className="text-gray-700">
                    <strong>Restrictions:</strong> Images may not be resold or used for competing drone services.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  5. Liability & Insurance
                </h3>
                <p className="text-gray-700 mb-6">
                  Property Drone Realty carries comprehensive liability insurance. Our liability is limited 
                  to the service fee paid. Clients are responsible for ensuring property access and safety. 
                  We are not liable for property damage caused by third parties or natural conditions.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  6. Privacy & Confidentiality
                </h3>
                <p className="text-gray-700 mb-6">
                  We respect property privacy and maintain strict confidentiality of all client information. 
                  Drone operations will not intentionally capture neighboring properties or private areas 
                  unless specifically requested and legally permitted.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  7. Delivery & Quality Guarantee
                </h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                  <li>High-resolution images delivered within 48-72 hours</li>
                  <li>Professional editing and color correction included</li>
                  <li>Satisfaction guarantee - we'll reshoot if not satisfied</li>
                  <li>Secure digital delivery via cloud platform</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  8. Governing Law
                </h3>
                <p className="text-gray-700 mb-6">
                  These terms are governed by Indian law. Disputes will be resolved through arbitration 
                  in Maharashtra, India, in accordance with the Arbitration and Conciliation Act, 2015.
                </p>

                <div className="bg-red-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Notice</h3>
                  <p className="text-gray-700">
                    By booking our services, you acknowledge that you have read, understood, and agree to these 
                    terms and conditions. These terms may be updated periodically, and continued use of our 
                    services constitutes acceptance of any changes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
        
        </div>
      </div>
    </>
  );
}
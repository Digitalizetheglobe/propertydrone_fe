'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const PropertyPopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  interface FormData {
    fullName: string;
    email: string;
  }

  interface InputChangeEvent {
    target: {
      name: keyof FormData;
      value: string;
    };
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // You can add your form submission logic here
    // For example, send data to your API or email service
    
    // Close popup after submission
    setIsVisible(false);
    
    // Optional: Show success message
    alert('Thank you! We will contact you soon.');
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={closePopup}
      >
        {/* Popup Container */}
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-md w-full relative animate-scale-up transform transition-all duration-300 hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Logo Section */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="text-blue-800 font-bold text-lg">
                PROPERTY<span className="text-blue-600">DRONE</span> REALTY
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 hover:text-blue-600 transition-colors duration-300">
              Fill The Form, We Care You!
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                GET INSTANT CALL BACK
              </button>
            </form>

            {/* Additional Info */}
            <p className="text-center text-gray-600 text-sm mt-4 opacity-0 animate-fade-in-delayed">
              We respect your privacy and will never spam you.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          0%, 50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 2s ease-out;
        }

        /* Pulse effect for the button */
        button[type="submit"]:hover {
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
      `}</style>
    </>
  );
};

export default PropertyPopup;
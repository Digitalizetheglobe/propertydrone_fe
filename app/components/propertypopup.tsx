'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/images/PropertyDrone-Logo.png"; 

interface PropertyPopupProps {
  onClose?: () => void;
  onSubmitSuccess?: () => void;
}

const PropertyPopup = ({ onClose, onSubmitSuccess }: PropertyPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await fetch('https://api.propertydronerealty.com/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          mobile: formData.phone,
          message: 'Popup contact form submission'
        })
      });
      if (!response.ok) throw new Error('Failed to submit form');
      setSuccess('Thank you! We will contact you soon.');
      setFormData({ fullName: '', email: '', phone: '' });
      if (onSubmitSuccess) {
        onSubmitSuccess();
      } else {
        setTimeout(() => setIsVisible(false), 2000);
      }
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    if (onClose) {
      onClose();
    } else {
      setIsVisible(false);
    }
  };

  // Show popup on first scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 animate-fade-in"
        onClick={closePopup}
      >
        {/* Popup Container */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-scale-up transform transition-all duration-300 hover:scale-105 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Logo Section */}
            <div className="text-center mb-6">
              <Link href="/">
                <Image 
                  src={logo} 
                  alt="Logo" 
                  className="max-h-12 sm:max-h-none mx-auto" 
                />
              </Link>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 hover:text-blue-600 transition-colors duration-300">
              Fill The Form, We Care For You!
            </h2>

            {/* Success/Error Messages */}
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
                {success}
              </div>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
                {error}
              </div>
            )}

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
              </div>

              {/* Phone Input */}
              <div className="mb-2">
                <label htmlFor="phone" className="block font-lato text-sm mb-1">Phone No</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onInput={e => {
                    const input = e.target as HTMLInputElement;
                    input.value = input.value.replace(/\D/g, '');
                  }}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  minLength={10}
                  required
                  title="Please enter a valid 10-digit phone number"
                  inputMode="numeric"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#172747] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f1a33] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'GET INSTANT CALL BACK'}
              </button>
            </form>

            {/* Additional Info */}
            <p className="text-center text-gray-600 text-sm mt-4 animate-fade-in-delayed">
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
      `}</style>
    </>
  );
};

export default PropertyPopup;
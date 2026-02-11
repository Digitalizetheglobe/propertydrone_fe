"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Check, ChevronDown } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber] = useState("+91 9156123575"); // Default WhatsApp number
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = () => {
    // Just open WhatsApp with pre-filled message regardless of form for now, behaving like "Chat"
    const formattedPhoneNumber = phoneNumber.replace(/\s+/g, "");
    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent("Hi, I would like to consult nicely regarding a property.")}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please accept the Terms & Privacy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: `+91 ${formData.phone}`,
          message: "Quick Consultation Request from WhatsApp Popup"
        }),
      });

      if (response.ok) {
        alert("Consultation request submitted successfully!");
        setFormData({ name: "", phone: "", email: "" });
        setIsChecked(false);
        setShowPopup(false);
      } else {
        const errorData = await response.json();
        alert(`Failed to submit request: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="whatsapp-float-btn transition-transform hover:scale-105 active:scale-95"
        style={{
          position: "fixed",
          bottom: "40px",
          left: "40px",
          backgroundColor: "#DC2626", // Red
          border: "none",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          cursor: "pointer",
          boxShadow: "0px 4px 12px rgba(220, 38, 38, 0.4)",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <div className="relative">
          <MessageCircle size={32} className="text-white fill-white" />
          {/* Try to simulate the 3-dots look if needed, but fill-white works well */}
        </div>
      </button>

      {/* Consultation Popup */}
      {showPopup && (
        <div
          className="fixed z-[1001] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 border border-gray-100"
          style={{
            bottom: "100px",
            left: "40px",
            width: "280px",
            maxWidth: "calc(100vw - 40px)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex justify-between items-center bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-800">Quick Consultation</h2>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-xs outline-none focus:border-red-500 focus:ring-1 focus:ring-red-100 transition-all placeholder:text-gray-400"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <div className="flex gap-2">
                <div className="relative w-16">
                  <div className="w-full px-2 py-2 bg-white border border-gray-200 rounded text-xs flex items-center justify-center text-gray-600 bg-gray-50">
                    <span>+91</span>
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded text-xs outline-none focus:border-red-500 focus:ring-1 focus:ring-red-100 transition-all placeholder:text-gray-400"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-xs outline-none focus:border-red-500 focus:ring-1 focus:ring-red-100 transition-all placeholder:text-gray-400"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="flex gap-2 items-start py-1">
                <div className="relative flex items-center pt-0.5">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="peer h-3 w-3 cursor-pointer appearance-none rounded-sm border border-gray-300 checked:border-[#DC2626] checked:bg-[#DC2626] transition-all"
                  />
                  <Check
                    size={10}
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                  />
                </div>
                <label htmlFor="terms" className="text-[10px] text-gray-400 cursor-pointer select-none leading-tight">
                  I accept <a href="#" className="hover:text-red-500 underline">Terms</a> & <a href="#" className="hover:text-red-500 underline">Privacy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#DC2626] hover:bg-red-700 text-white font-medium py-2 rounded text-xs transition-colors shadow-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>

              <div className="relative flex items-center justify-center my-2">
                <div className="absolute inset-x-0 h-px bg-gray-100"></div>
                <span className="relative bg-white px-2 text-[10px] text-gray-300 uppercase">OR</span>
              </div>

              <button
                type="button"
                onClick={handleSendMessage}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 rounded text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <FaWhatsapp size={14} />
                Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;
"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit contact form");

      setSuccess(true);
      setFormData({ name: "", mobile: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
      
    </>
  );
};

export default ContactForm;

// File: app/contactus/page.jsx
"use client"

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        [name]: value
    }));
};

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
};

  return (
    <main className="relative">
      {/* Hero Section with Form */}
      <section className="min-h-screen">
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="w-full md:w-2/5 lg:w-1/3 bg-blue-900 text-white p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-4xl font-light mb-6">Let's Connect with us!</h1>
              <p className="mb-10 text-sm leading-relaxed opacity-90">
                We believe in collaboration and value your input throughout the design
                process. We encourage clients to actively participate in discussions,
                share their ideas, preferences, and feedback.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full p-3 bg-transparent border border-blue-700 text-white focus:outline-none focus:border-blue-400"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="admin@nextspace.com"
                    className="w-full p-3 bg-transparent border border-blue-700 text-white focus:outline-none focus:border-blue-400"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm">Inquire Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Want to decor my house"
                    className="w-full p-3 bg-transparent border border-blue-700 text-white focus:outline-none focus:border-blue-400"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    rows={4}
                    className="w-full p-3 bg-transparent border border-blue-700 text-white focus:outline-none focus:border-blue-400"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-blue-800 transition rounded-full"
                >
                  Send a message
                </button>
              </form>
            </div>
          </div>

          {/* Right Information Section */}
          <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-100 p-8 md:p-16 flex items-center relative">
            <div className="max-w-lg mt-16">
              <h2 className="text-3xl font-medium mb-6 text-gray-800">Interested in working with us!</h2>
              <p className="mb-12 text-gray-700">
                We encourage our team to fearlessly challenge conventions and
                pioneer new paths.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Working Mail</h3>
                  <p className="text-gray-700">project@nextspace.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Office Phone</h3>
                  <p className="text-gray-700">+1 892 910 1982</p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Office Address</h3>
                  <p className="text-gray-700">70 University Ave<br />Palo Alto, CA 94301</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-700 text-white py-20 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0">
            <h2 className="text-5xl font-light mb-4">Unlock Your Dream<br />Home Today!</h2>
          </div>
          <div>
            <p className="mb-8 text-lg">
              We encourage clients to actively participate in discussions,<br />
              share their ideas, preferences, and feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-full transition">
                Get in touch <span className="ml-2">→</span>
              </button>
              <button className="flex items-center border border-white hover:bg-white hover:text-gray-800 text-white py-3 px-6 rounded-full transition">
                Call us: +1 483 944 954 <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
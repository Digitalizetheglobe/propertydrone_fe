"use client";

import { useEffect, useState } from "react";

interface Contact {
  id: number;
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const ContactDetails = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5000/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
    
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Enquiries</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center">No contacts found.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="p-4 border border-gray-300 rounded">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Mobile:</strong> {contact.mobile}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  
    </>
  );
};

export default ContactDetails;

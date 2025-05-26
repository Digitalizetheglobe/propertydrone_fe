"use client";

import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';

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
        const response = await fetch("https://api.propertydronerealty.com/contacts");
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

  const handleDownload = () => {
    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    
    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    
    // Generate Excel file
    XLSX.writeFile(workbook, "contact_details.xlsx");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact Enquiries</h2>
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Download Excel
          </button>
        </div>
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

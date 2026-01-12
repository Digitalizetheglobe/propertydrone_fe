"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import contactimg from "@/public/images/contact.png";
import main4 from "@/public/images/buliding.png";

const CompareProperties = () => {
  const [comparisons, setComparisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchComparedProperties = async () => {
    setLoading(true);
    try {
      // Just fetch all comparisons from API (raw request)
      const res = await fetch("https://api.propertydronerealty.com/api/property-comparisons");
      if (!res.ok) throw new Error("Failed to fetch property comparisons");
      const allComparisons = await res.json();
      setComparisons(allComparisons);
    } catch (error) {
      console.error("Error fetching compared properties:", error);
      toast.error("Failed to load compared properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComparedProperties();
    // Refresh compare list if window/tab regains focus
    const onFocus = () => fetchComparedProperties();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747] mb-4"></div>
          <p className="text-[#172747] text-lg font-light">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image src={contactimg} alt="Compare Properties" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-light mb-4 tracking-wide" style={{ fontFamily: 'Ivy Mode' }}>
            Compare Properties
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="text-white text-sm md:text-base flex items-center space-x-2">
              <li>
                <button className="cursor-pointer hover:underline transition-all" onClick={() => router.push('/profile-page')}>
                  Profile
                </button>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-200">Compare Properties</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {comparisons.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <FiPlus className="mx-auto text-gray-400" size={48} />
              </div>
              <h2 className="text-2xl font-light text-[#172747] mb-4" style={{ fontFamily: 'Ivy Mode' }}>
                No Properties to Compare
              </h2>
              <p className="text-gray-600 mb-8">Add properties to your comparison list to see them side by side.</p>
              <Link href="/luxe-properties">
                <button className="bg-[#172747] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0f1a33] transition-colors cursor-pointer">
                  Browse Properties
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <div className="overflow-x-auto mb-8">
                {/* Parse propertyData */}
                {(() => {
                  // Each comparison record (API) has 'propertyData' (stringified JSON), extract and parse:
                  const propertyList = comparisons.map((cmp) => {
                    let data = cmp.propertyData;
                    if (typeof data === 'string') {
                      try { data = JSON.parse(data); } catch(e) { data = {}; }
                    }
                    return { ...cmp, propertyData: data };
                  });

                  // Collect all unique fields from propertyData
                  const fieldSet = new Set();
                  propertyList.forEach(({ propertyData }) => {
                    if (propertyData && typeof propertyData === 'object') {
                      Object.keys(propertyData).forEach(k => fieldSet.add(k));
                    }
                  });
                  const fields = Array.from(fieldSet);
                  if (!fields.length) return <div>No valid fields to compare.</div>;

                  return (
                    <table className="min-w-full border border-gray-300 bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 border-b text-left">&nbsp;</th>
                          {propertyList.map((p, idx) => (
                            <th key={p.propertyId || idx} className="px-4 py-2 border-b text-center">
                              {p.propertyData.propertyName || `#${p.propertyId}`}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {fields.map(field => (
                          <tr key={field}>
                            <td className="px-4 py-2 border-b font-semibold capitalize bg-gray-50 text-[#172747]">{field.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}</td>
                            {propertyList.map((p, idx) => (
                              <td key={idx} className="px-4 py-2 border-b text-center max-w-xs break-all">
                                {typeof p.propertyData[field] === 'object' ? JSON.stringify(p.propertyData[field]) : String(p.propertyData[field] ?? '--')}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  );
                })()}
              </div>
              <button 
                onClick={fetchComparedProperties} // repopulate after user clears elsewhere
                className="cursor-pointer border border-[#172747] bg-white px-6 py-2 rounded-md text-sm text-[#172747] hover:bg-gray-100 transition-colors font-medium"
              >
                Refresh
              </button>
              <div className="flex items-center gap-3 text-sm mt-6">
                <span className="hidden sm:block text-[#172747]">
                  Need Help Choosing a Property?
                </span>
                <button 
                  className="cursor-pointer bg-[#172747] text-white px-6 py-2 text-sm rounded-md hover:bg-[#0f1a33] transition-colors font-medium"
                  onClick={() => {
                    const message = `I need help choosing from ${comparisons.length} properties. Can you assist me?`;
                    const whatsappUrl = `https://wa.me/918384848485?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CompareProperties;

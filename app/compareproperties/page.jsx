"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  FiPlus,
  FiChevronDown,
  FiMapPin,
  FiPhone,
  FiMessageCircle,
  FiShare2,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import contactimg from "@/public/images/contact.png";
import main4 from "@/public/images/buliding.png";

const ATTRIBUTES = [
  "Carpet Area",
  "Floor",
  "Furn/Unfurnished",
  "Seat in Office",
  "No. of Cabin",
  "Building Structure",
  "Floor Plan",
  "Car Park",
  "Availability Time",
  "Chargeable Area",
  "Efficiency",
  "Quoted Renting / Towards",
  "Maintenance",
  "Taxes",
];

const CompareProperties = () => {
  const [showSpecs, setShowSpecs] = useState(true);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRemoving, setIsRemoving] = useState(null);
  const router = useRouter();

  const fetchComparedProperties = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/signin");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://api.realtraspaces.com/api/webusers/compare/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch compared properties");
      }

      const data = await response.json();
      setProperties(data.data || []);
    } catch (error) {
      console.error("Error fetching compared properties:", error);
      toast.error("Failed to load compared properties");
    } finally {
      setLoading(false);
    }
  };

  const removeFromCompare = async (propertyId) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/signin");
      return;
    }

    try {
      setIsRemoving(propertyId);
      const response = await fetch(
        `https://api.realtraspaces.com/api/webusers/compare/remove/${propertyId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove property");
      }

      await fetchComparedProperties();
      toast.success("Property removed from comparison");
    } catch (error) {
      console.error("Error removing property:", error);
      toast.error("Failed to remove property");
    } finally {
      setIsRemoving(null);
    }
  };

  const clearAll = async () => {
    if (properties.length === 0) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/signin");
      return;
    }

    try {
      const response = await fetch(
        "https://api.realtraspaces.com/api/webusers/compare/clear",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to clear comparison");
      }

      setProperties([]);
      toast.success("Comparison cleared");
    } catch (error) {
      console.error("Error clearing comparison:", error);
      toast.error("Failed to clear comparison");
    }
  };

  useEffect(() => {
    fetchComparedProperties();
  }, []);

  // Helper function to get property image
  const getPropertyImage = (property) => {
    const baseUrl = "https://api.propertydronerealty.com";
    if (property?.propertyData?.multipleImages && property.propertyData.multipleImages.length > 0) {
      const path = property.propertyData.multipleImages[0]?.path;
      if (path && path.trim() !== "") {
        return path.startsWith('http') ? path : `${baseUrl}${path}`;
      }
    }
    if (property?.propertyData?.image && property.propertyData.image.trim() !== "") {
      return property.propertyData.image.startsWith('http') 
        ? property.propertyData.image 
        : `${baseUrl}${property.propertyData.image}`;
    }
    return main4;
  };

  // Helper function to get property features
  const getPropertyFeatures = (property) => {
    return {
      "Carpet Area": property?.propertyData?.dimension?.carpetArea 
        ? `${property.propertyData.dimension.carpetArea} ${property.propertyData.dimension.unit || 'sq.ft'}`
        : "--",
      "Floor": property?.propertyData?.floor || "--",
      "Furn/Unfurnished": property?.propertyData?.furnishStatus || "--",
      "Seat in Office": property?.propertyData?.seatInOffice || "--",
      "No. of Cabin": property?.propertyData?.noOfCabin || "--",
      "Building Structure": property?.propertyData?.buildingStructure || "--",
      "Floor Plan": property?.propertyData?.floorPlan || "--",
      "Car Park": property?.propertyData?.carPark || "--",
      "Availability Time": property?.propertyData?.possessionDate 
        ? new Date(property.propertyData.possessionDate).toLocaleDateString()
        : "--",
      "Chargeable Area": property?.propertyData?.chargeableArea || "--",
      "Efficiency": property?.propertyData?.efficiency || "--",
      "Quoted Renting / Towards": property?.propertyData?.monetaryInfo?.expectedPrice
        ? `₹ ${property.propertyData.monetaryInfo.expectedPrice.toLocaleString()}`
        : "--",
      "Maintenance": property?.propertyData?.monetaryInfo?.maintenanceCost
        ? `₹ ${property.propertyData.monetaryInfo.maintenanceCost.toLocaleString()}`
        : "--",
      "Taxes": property?.propertyData?.taxes || "--",
    };
  };

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
        <Image
          src={contactimg}
          alt="Compare Properties"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-light mb-4 tracking-wide" style={{ fontFamily: 'Ivy Mode' }}>
            Compare Properties
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="text-white text-sm md:text-base flex items-center space-x-2">
              <li>
                <button 
                  className="cursor-pointer hover:underline transition-all" 
                  onClick={() => router.push('/profile-page')}
                >
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
          {properties.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <FiPlus className="mx-auto text-gray-400" size={48} />
              </div>
              <h2 className="text-2xl font-light text-[#172747] mb-4" style={{ fontFamily: 'Ivy Mode' }}>
                No Properties to Compare
              </h2>
              <p className="text-gray-600 mb-8">Add properties to your comparison list to see them side by side.</p>
              <Link href="/properties">
                <button className="bg-[#172747] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#0f1a33] transition-colors cursor-pointer">
                  Browse Properties
                </button>
              </Link>
            </div>
          ) : (
            <>
          <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg p-4 mb-8 gap-4">
            <button 
              onClick={clearAll}
              className="cursor-pointer border border-[#172747] bg-white px-6 py-2 rounded-md text-sm text-[#172747] hover:bg-gray-100 transition-colors font-medium"
            >
              Clear All
            </button>

            <div className="flex items-center gap-3 text-sm">
              <span className="hidden sm:block text-[#172747]">
                Need Help Choosing a Property?
              </span>
              <button 
                className="cursor-pointer bg-[#172747] text-white px-6 py-2 text-sm rounded-md hover:bg-[#0f1a33] transition-colors font-medium"
                onClick={() => {
                  const message = `I need help choosing from ${properties.length} properties. Can you assist me?`;
                  const whatsappUrl = `https://wa.me/918384848485?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex gap-4">
              {properties.length > 0 && (
                <button
                  className="bg-[#172747] cursor-pointer text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#0f1a33] transition-colors"
                  onClick={() => {
                    const selectedPropertyLinks = properties.map(property => {
                      if (property?.propertyData) {
                        const baseUrl = window.location.origin;
                        const propertyTitle = property.propertyData.title || property.propertyData.propertyName || 'Property';
                        return `${baseUrl}/property/${property.propertyData.id || property.propertyId} - ${propertyTitle}`;
                      }
                      return null;
                    }).filter(Boolean).join('\n');
                    
                    const message = `I want to inquire about these ${properties.length} properties:\n\n${selectedPropertyLinks}`;
                    const whatsappUrl = `https://wa.me/918384848485?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Inquire About ({properties.length}) Properties
                </button>
              )}
            </div>
            <Link href="/properties">
              <button 
                className="border border-[#172747] text-[#172747] bg-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Explore More Properties
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pb-4 overflow-x-auto">
            {/* SPEC-LIST COLUMN */}
            <div className="w-[280px] flex-none rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden">
              <div 
                className="cursor-pointer h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200 flex flex-col items-center justify-center gap-3 hover:from-gray-100 hover:to-gray-200 transition-all"
                onClick={() => router.push('/properties')}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#172747] hover:bg-[#0f1a33] transition-colors">
                  <FiPlus className="text-white" size={24} />
                </span>
                <p className="text-sm text-[#172747] font-medium">
                  Add New Property
                </p>
              </div>

              {showSpecs && (
                <ul className="space-y-4 px-6 py-6 bg-white">
                  {ATTRIBUTES.map((attr) => (
                    <li
                      key={attr}
                      className="flex items-center gap-3 text-gray-700 text-sm font-light py-1"
                    >
                      <span className="h-3 w-3 rounded-sm border border-gray-400 inline-block flex-shrink-0" />
                      <span className="text-[#172747]">{attr}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* PROPERTY COLUMNS */}
            {properties.map((property) => (
              <div
                key={property.id || property.propertyId}
                className="flex-1 min-w-[280px] basis-[300px] rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-5 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-[#172747] text-base flex-1 pr-2" style={{ fontFamily: 'Ivy Mode' }}>
                      {property?.propertyData?.title || 
                       property?.propertyData?.propertyName || 
                       "Property Title"}
                    </h3>
                    <button 
                      onClick={() => removeFromCompare(property.propertyId)}
                      className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0 p-1"
                      disabled={isRemoving === property.propertyId}
                      title="Remove from comparison"
                    >
                      {isRemoving === property.propertyId ? (
                        <div className="animate-spin h-4 w-4 border-2 border-red-500 border-t-transparent rounded-full"></div>
                      ) : (
                        <FiX size={18} />
                      )}
                    </button>
                  </div>
                  
                  <p className="flex items-center text-gray-600 text-xs gap-1 mb-4">
                    <FiMapPin size={14} className="text-[#172747]" />
                    <span>
                      {property?.propertyData?.address?.locality || 
                       property?.propertyData?.address?.subLocality || 
                       property?.propertyData?.address?.city || 
                       property?.propertyData?.location ||
                       "Location not available"}
                    </span>
                  </p>

                  <figure className="relative h-48 w-full rounded-lg overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={getPropertyImage(property)}
                      alt={property?.propertyData?.title || property?.propertyData?.propertyName || "Property"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized={getPropertyImage(property).startsWith('http')}
                    />
                  </figure>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-[#172747] text-lg">
                        {property?.propertyData?.monetaryInfo?.expectedPrice
                          ? `₹ ${property.propertyData.monetaryInfo.expectedPrice.toLocaleString()}`
                          : "Price on request"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {property?.propertyData?.enquiredFor === "Sale" 
                          ? "For Sale" 
                          : property?.propertyData?.enquiredFor === "Rent"
                          ? "Rent per month"
                          : property?.propertyData?.enquiredFor || ""}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        className="h-8 w-8 grid place-items-center rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-colors"
                        onClick={() => {
                          const propertyTitle = property?.propertyData?.title || property?.propertyData?.propertyName || 'Property';
                          const message = `I'm interested in this property: ${propertyTitle}`;
                          const whatsappUrl = `https://wa.me/918384848485?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                        title="Contact via WhatsApp"
                      >
                        <FaWhatsapp size={14} className="text-white" />
                      </button>
                      <button 
                        className="h-8 w-8 grid place-items-center text-[#172747] rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                        title="Share property"
                      >
                        <FiShare2 size={14} />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {property?.propertyData?.aboutProperty || 
                     property?.propertyData?.description || 
                     "No description available"}
                  </p>
                  <Link
                    href={`/property/${property?.propertyData?.id || property?.propertyId}`}
                    className="inline-block text-xs text-[#172747] hover:underline font-medium"
                  >
                    View Details →
                  </Link>
                </div>

                <ul className="divide-y divide-gray-200 text-xs bg-gray-50">
                  {ATTRIBUTES.map((attr) => (
                    <li
                      key={attr}
                      className="flex justify-between px-5 py-3 text-gray-700 hover:bg-white transition-colors"
                    >
                      <span className="text-gray-600 font-light">{attr}</span>
                      <span className="text-[#172747] font-medium text-right max-w-[60%]">
                        {getPropertyFeatures(property)[attr] || "--"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ADD PROPERTY COLUMN (only shown if less than max items) */}
            {properties.length < 5 && (
              <div className="w-[280px] flex-none rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 overflow-hidden">
                <div 
                  className="cursor-pointer h-full w-full flex flex-col items-center justify-center gap-3 p-8 hover:bg-gray-100 transition-colors"
                  onClick={() => router.push('/properties')}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white border-2 border-dashed border-gray-400">
                    <FiPlus className="text-gray-400" size={20} />
                  </span>
                  <p className="text-sm font-medium text-[#172747] max-w-[160px] text-center leading-snug">
                    Add More Properties
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    Compare up to 5 properties
                  </p>
                </div>
              </div>
            )}
          </div>
          </>
          )}
        </div>
      </section>
    </>
  );
};

export default CompareProperties;
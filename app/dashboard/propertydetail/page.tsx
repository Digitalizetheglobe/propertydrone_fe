"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { MicIcon, SearchIcon, XIcon, FilterIcon, UploadIcon, TrashIcon } from "lucide-react";

export default function PropertyDetail() {
  const [properties, setProperties] = useState<any[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editProperty, setEditProperty] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [propertyImages, setPropertyImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [imagesPreviews, setImagesPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("all");
  const [isListening, setIsListening] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  
  const baseUrl = "https://api.propertydronerealty.com"; // For dev — ideally from env
  const imagePath = propertyImages?.[0]
    ? `${baseUrl}${propertyImages[0]}`
    : null;

  useEffect(() => {
    fetch("https://api.propertydronerealty.com/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  // Set up speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && 
        ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      // @ts-ignore - TypeScript doesn't know about webkitSpeechRecognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript: string = event.results[0][0].transcript;
        setSearchTerm(transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Filter properties when search term or filter changes
  useEffect(() => {
    filterProperties();
  }, [searchTerm, searchFilter, properties]);

  // Filter properties based on search term and filter
  const filterProperties = () => {
    if (!searchTerm.trim()) {
      setFilteredProperties(properties);
      return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    let filtered = [];

    if (searchFilter === "all") {
      filtered = properties.filter((property) => (
        property.buildingName?.toLowerCase().includes(lowerTerm) ||
        property.location?.toLowerCase().includes(lowerTerm) ||
        property.city?.toLowerCase().includes(lowerTerm) ||
        property.unitNo?.toString().toLowerCase().includes(lowerTerm) ||
        property.propertyType?.toLowerCase().includes(lowerTerm) ||
        property.carpetArea?.toString().includes(lowerTerm) ||
        property.buArea?.toString().includes(lowerTerm)
      ));
    } else {
      filtered = properties.filter((property) => {
        const value = property[searchFilter];
        return value && value.toString().toLowerCase().includes(lowerTerm);
      });
    }
    
    setFilteredProperties(filtered);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // Toggle voice search
  const toggleVoiceSearch = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      }
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setFilteredProperties(properties);
  };

  const deleteProperty = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this property?")) {
      return;
    }

    try {
      const response = await fetch(`https://api.propertydronerealty.com/properties/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedProperties = properties.filter((property) => property.id !== id);
        setProperties(updatedProperties);
        setFilteredProperties(updatedProperties);
      } else {
        alert("Failed to delete the property");
      }
    } catch (error) {
      alert("Error deleting the property");
      console.error("Delete error:", error);
    }
  };

  const handleEditClick = (property: any) => {
    setEditProperty(property);
    // If property has images, fetch and set them
    if (property.images && Array.isArray(property.images)) {
      setPropertyImages(property.images);
    } else {
      setPropertyImages([]);
    }
    setNewImages([]);
    setImagesPreviews([]);
    setShowModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditProperty({ ...editProperty, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setNewImages(prev => [...prev, ...selectedFiles]);
      
      // Create preview URLs for the new images
      const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
      setImagesPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const handleRemoveExistingImage = (index: number) => {
    setPropertyImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleRemoveNewImage = (index: number) => {
    setNewImages(prevImages => prevImages.filter((_, i) => i !== index));
    
    // Also remove the preview URL and revoke it to prevent memory leaks
    const previewToRemove = imagesPreviews[index];
    setImagesPreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    URL.revokeObjectURL(previewToRemove);
  };

  const handleUpdateProperty = async () => {
    if (!editProperty || !editProperty.id) return;
    
    try {
      // First update the property details
      const propertyData = {
        ...editProperty,
        images: propertyImages // Include existing images that weren't deleted
      };
      
      const response = await fetch(`https://api.propertydronerealty.com/properties/${editProperty.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyData),
      });
      
      if (response.ok) {
        // If there are new images, upload them
        if (newImages.length > 0) {
          const formData = new FormData();
          newImages.forEach(image => {
            formData.append('images', image);
          });
          
          const uploadResponse = await fetch(`https://api.propertydronerealty.com/properties/${editProperty.id}/images`, {
            method: "POST",
            body: formData,
          });
          
          if (!uploadResponse.ok) {
            alert("Property updated but failed to upload some images");
          }
        }
        
        // Refresh the properties list
        const updatedPropertiesResponse = await fetch("https://api.propertydronerealty.com/properties");
        const updatedProperties = await updatedPropertiesResponse.json();
        setProperties(updatedProperties);
        setFilteredProperties(updatedProperties);
        
        // Clean up preview URLs
        imagesPreviews.forEach(preview => URL.revokeObjectURL(preview));
        
        setShowModal(false);
      } else {
        alert("Failed to update property");
      }
    } catch (error) {
      console.error("Update failed", error);
      alert("Error updating property");
    }
  };

  if (loading) {
    return (
      <>
        <div className="max-w-6xl mx-auto p-6 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading property details...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Property Listings</h2>
        
        {/* Search Console */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold mb-4">Search Properties</h3>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search input with voice button */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-12 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              )}
              <button 
                className={`absolute inset-y-0 right-0 flex items-center pr-3 ${isListening ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={toggleVoiceSearch}
                aria-label={isListening ? "Stop listening" : "Start voice search"}
              >
                <MicIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Filter toggle button */}
            <button
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FilterIcon className="w-5 h-5 mr-2" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Filter dropdown */}
          {showFilters && (
            <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="mb-2 font-medium">Search in:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="all"
                    checked={searchFilter === "all"}
                    onChange={() => setSearchFilter("all")}
                    className="form-radio text-blue-500"
                  />
                  <span>All Fields</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="buildingName"
                    checked={searchFilter === "buildingName"}
                    onChange={() => setSearchFilter("buildingName")}
                    className="form-radio text-blue-500"
                  />
                  <span>Building Name</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="location"
                    checked={searchFilter === "location"}
                    onChange={() => setSearchFilter("location")}
                    className="form-radio text-blue-500"
                  />
                  <span>Location</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="city"
                    checked={searchFilter === "city"}
                    onChange={() => setSearchFilter("city")}
                    className="form-radio text-blue-500"
                  />
                  <span>City</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="carpetArea"
                    checked={searchFilter === "carpetArea"}
                    onChange={() => setSearchFilter("carpetArea")}
                    className="form-radio text-blue-500"
                  />
                  <span>Carpet Area</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="searchFilter"
                    value="propertyType"
                    checked={searchFilter === "propertyType"}
                    onChange={() => setSearchFilter("propertyType")}
                    className="form-radio text-blue-500"
                  />
                  <span>Property Type</span>
                </label>
              </div>
            </div>
          )}
          
          {isListening && (
            <div className="text-center text-sm text-blue-600 animate-pulse">
              Listening... Speak now
            </div>
          )}
          
          <div className="text-sm text-gray-600">
            {filteredProperties.length} propert{filteredProperties.length === 1 ? 'y' : 'ies'} found
          </div>
        </div>
        
        {filteredProperties.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4">
            No properties match your search criteria. Try adjusting your search terms.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredProperties.map((property, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-all hover:shadow-xl">
                <h3 className="text-2xl font-bold">{property.buildingName}</h3>
                <p className="text-gray-600">{property.location}, {property.city}</p>

                {/* Display property images if available */}
                {property.images && property.images.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Property Images</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {property.images.map((image: string, imgIndex: number) => (
                        <div key={imgIndex} className="relative">
                          <img 
                            src={image}
                            alt={`${property.buildingName} - Image ${imgIndex + 1}`}
                            className="w-full h-32 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <p><strong>Unit No:</strong> {property.unitNo || 'N/A'}</p>
                  <p><strong>Floor:</strong> {property.floor || 'N/A'}</p>
                  <p><strong>Property Type:</strong> {property.propertyType || 'N/A'}</p>
                  <p><strong>Built-up Area:</strong> {property.buArea ? `${property.buArea} sq. ft.` : 'N/A'}</p>
                  <p><strong>Carpet Area:</strong> {property.carpetArea ? `${property.carpetArea} sq. ft.` : 'N/A'}</p>
                </div>

                <p className="mt-4"><strong>About Property:</strong> {property.aboutProperty || 'No description available.'}</p>

                {property.slug && <p className="mt-4 text-sm text-gray-500"><strong>Slug:</strong> {property.slug}</p>}

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    onClick={() => deleteProperty(property.id)}
                  >
                    Delete
                  </button>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => handleEditClick(property)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Edit Modal with Increased Width */}
      
   {showModal && editProperty && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 overflow-y-auto">
    <div className="bg-white p-6 rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto my-8">
      <h3 className="text-xl font-bold mb-4">Edit Property</h3>

      {/* Property Images Section */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-3">Property Images</label>

        {/* Existing Images */}
        {editProperty.multipleImages && editProperty.multipleImages.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Current Images</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {editProperty.multipleImages.map((image: { path: string; originalName?: string }, index: number) => {
                const fullUrl = `${baseUrl}${image.path}`;
                return (
                  <div key={index} className="relative group">
                  <img 
                    src={fullUrl} 
                    alt={image.originalName || `Property image ${index + 1}`}
                    className="w-full h-32 object-cover rounded border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => {
                    const updatedImages = [...editProperty.multipleImages];
                    updatedImages.splice(index, 1);
                    setEditProperty({
                      ...editProperty,
                      multipleImages: updatedImages
                    });
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete image"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                  </div>
                );
                })}
            </div>
          </div>
        )}

        {/* New Images Previews */}
        {imagesPreviews.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">New Images</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {imagesPreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={preview} 
                    alt={`New image ${index + 1}`}
                    className="w-full h-32 object-cover rounded border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveNewImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Delete image"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload New Images */}
        <div className="mt-3">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center px-4 py-2 bg-blue-50 border border-blue-300 text-blue-700 rounded hover:bg-blue-100 transition-colors"
          >
            <UploadIcon className="w-5 h-5 mr-2" />
            Upload Images
          </button>
          <p className="text-xs text-gray-500 mt-1">
            You can select multiple images. Supported formats: JPG, PNG, WEBP
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-6">
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          onClick={() => {
            imagesPreviews.forEach(preview => URL.revokeObjectURL(preview));
            setShowModal(false);
          }}
        >
          Cancel
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          onClick={async () => {
            try {
              // First update the property details with existing images
              const propertyData = {
                ...editProperty,
                // Keep the multipleImages array unchanged for existing images
              };
              
              const response = await fetch(`https://api.propertydronerealty.com/properties/${editProperty.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(propertyData),
              });
              
              if (response.ok) {
                // If there are new images, upload them
                if (newImages.length > 0) {
                  const formData = new FormData();
                  newImages.forEach(image => {
                    formData.append('images', image);
                  });
                  
                  const uploadResponse = await fetch(`https://api.propertydronerealty.com/properties/${editProperty.id}`, {
                    method: "POST",
                    body: formData,
                  });
                  
                  if (!uploadResponse.ok) {
                    alert("Property updated but failed to upload some images");
                  }
                }
                
                // Refresh the properties list
                const updatedPropertiesResponse = await fetch("https://api.propertydronerealty.com/properties");
                const updatedProperties = await updatedPropertiesResponse.json();
                setProperties(updatedProperties);
                setFilteredProperties(updatedProperties);
                
                // Clean up preview URLs
                imagesPreviews.forEach(preview => URL.revokeObjectURL(preview));
                
                setShowModal(false);
              } else {
                alert("Failed to update property");
              }
            } catch (error) {
              console.error("Update failed", error);
              alert("Error updating property");
            }
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
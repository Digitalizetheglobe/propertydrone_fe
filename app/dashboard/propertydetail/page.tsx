"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { MicIcon, SearchIcon, XIcon, FilterIcon, UploadIcon, TrashIcon } from "lucide-react";

export default function PropertyDetail() {
  // --- Comparison logic ---
  const staticUserId = 1; // Demo user, replace with logged-in user id if available
  const [comparedPropertyIds, setComparedPropertyIds] = useState<number[]>([]);

  // Fetch compared property ids on mount
  useEffect(() => {
    fetch(`https://api.propertydronerealty.com/api/property-comparisons`)
      .then(res => res.json())
      .then(data => {
        // For current user only
        const compIds = data.filter((cmp: any) => `${cmp.webUserId}` === `${staticUserId}`).map((cmp: any) => parseInt(cmp.propertyId));
        setComparedPropertyIds(compIds);
      });
  }, []);

  // Add to comparison
  const addToComparison = async (property: any) => {
    await fetch('https://api.propertydronerealty.com/api/property-comparisons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        webUserId: staticUserId,
        propertyId: property.id,
        propertyData: property
      })
    });
    setComparedPropertyIds(prev => [...prev, property.id]);
  };

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

  const baseUrl = "https://api.propertydronerealty.com"; // For dev â€” ideally from env
  const imagePath = propertyImages?.[0]
    ? `${baseUrl}${propertyImages[0]}`
    : null;

  // Fetch properties function
  const fetchProperties = () => {
    setLoading(true);
    fetch("https://api.propertydronerealty.com/properties")
      .then((res) => res.json())
      .then((data) => {
        // Sort properties by ID in descending order
        const sortedData = data.sort((a: any, b: any) => b.id - a.id);
        setProperties(sortedData);
        setFilteredProperties(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProperties();
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
        (property.propertyName ? property.propertyName.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.name ? property.name.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.location ? property.location.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.city ? property.city.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.unitNo ? property.unitNo.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.propertyType ? property.propertyType.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.carpetArea ? property.carpetArea.toString().toLowerCase() : "").includes(lowerTerm) ||
        (property.buArea ? property.buArea.toString().toLowerCase() : "").includes(lowerTerm)
      ));
    } else if (searchFilter === "propertyName") {
      filtered = properties.filter((property) => {
        // Try both propertyName and name for compatibility
        const value = property.propertyName || property.name;
        return (value ? value.toString().toLowerCase() : "").includes(lowerTerm);
      });
    } else {
      filtered = properties.filter((property) => {
        const value = property[searchFilter];
        return (value ? value.toString().toLowerCase() : "").includes(lowerTerm);
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

  const deleteProperty = async (id: string) => {
    try {
      const response = await fetch(`https://api.propertydronerealty.com/properties/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete property');
      }
      // Refresh the properties list
      fetchProperties();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleEditClick = (property: any) => {
    let parsedPros = [];
    let parsedCons = [];
    try {
      parsedPros = Array.isArray(property.pros) ? property.pros : JSON.parse(property.pros || '[]');
    } catch (e) {
      parsedPros = typeof property.pros === 'string' && property.pros.trim() ? [property.pros] : [];
    }
    try {
      parsedCons = Array.isArray(property.cons) ? property.cons : JSON.parse(property.cons || '[]');
    } catch (e) {
      parsedCons = typeof property.cons === 'string' && property.cons.trim() ? [property.cons] : [];
    }

    setEditProperty({ ...property, pros: parsedPros, cons: parsedCons });
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
    const imageToRemove = editProperty.multipleImages[index];
    if (imageToRemove && imageToRemove.filename) {
      setDeletedImages((prev: string[]) => [...prev, imageToRemove.filename]);
    }
    setEditProperty((prev: any) => ({
      ...prev,
      multipleImages: prev.multipleImages.filter((_: any, i: number) => i !== index)
    }));
  };

  const handleRemoveNewImage = (index: number) => {
    setNewImages(prevImages => prevImages.filter((_, i) => i !== index));

    // Also remove the preview URL and revoke it to prevent memory leaks
    const previewToRemove = imagesPreviews[index];
    setImagesPreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    URL.revokeObjectURL(previewToRemove);
  };

  const handleUpdateProperty = async () => {
    if (!editProperty || !editProperty.slug) return;

    try {
      // Create FormData to handle both property data and images
      const formData = new FormData();

      // Add property data directly without stringifying
      Object.keys(editProperty).forEach(key => {
        if (key !== 'multipleImages' && key !== 'configurationTypology' && key !== 'pros' && key !== 'cons') {
          formData.append(key, editProperty[key]);
        }
      });

      // Handle configurationTypology separately - stringify it
      if (editProperty.configurationTypology && Array.isArray(editProperty.configurationTypology)) {
        formData.append('configurationTypology', JSON.stringify(editProperty.configurationTypology));
      }

      // Handle pros/cons as JSON arrays
      formData.append('pros', JSON.stringify(Array.isArray(editProperty.pros) ? editProperty.pros : []));
      formData.append('cons', JSON.stringify(Array.isArray(editProperty.cons) ? editProperty.cons : []));

      // Add new images if any
      if (newImages.length > 0) {
        newImages.forEach(image => {
          formData.append('propertyImages', image);
        });
      }

      // Add deleted images if any
      if (deletedImages.length > 0) {
        formData.append('imagesToRemove', JSON.stringify(deletedImages));
      }

      // Send request
      const response = await fetch(`https://api.propertydronerealty.com/properties/${editProperty.id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        // Refresh the properties list
        fetchProperties();

        // Clean up preview URLs
        imagesPreviews.forEach(preview => URL.revokeObjectURL(preview));

        setShowModal(false);
        alert("Property updated successfully!");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update property");
      }
    } catch (error) {
      console.error("Update failed", error);
      alert("Error updating property");
    }
  };

  // Add state for tracking deleted images
  const [deletedImages, setDeletedImages] = useState<string[]>([]);
  const [prosEditInput, setProsEditInput] = useState('');
  const [consEditInput, setConsEditInput] = useState('');

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
        <h2 className="text-3xl font-bold mb-6">Property Details</h2>

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
                suppressHydrationWarning
              />
              {searchTerm && (
                <button
                  className={`absolute inset-y-0 right-12 flex items-center pr-3 text-gray-500 hover:text-gray-700`}
                  onClick={clearSearch}
                  aria-label="Clear search"
                  suppressHydrationWarning
                >
                  <XIcon className="w-5 h-5" />
                </button>
              )}
              <button
                className={`absolute inset-y-0 right-0 flex items-center pr-3 ${isListening ? 'text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={toggleVoiceSearch}
                aria-label={isListening ? "Stop listening" : "Start voice search"}
                suppressHydrationWarning
              >
                <MicIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Filter toggle button */}
            <button
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
              suppressHydrationWarning
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
                    value="propertyName"
                    checked={searchFilter === "propertyName"}
                    onChange={() => setSearchFilter("propertyName")}
                    className="form-radio text-blue-500"
                  />
                  <span>Property Name</span>
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
                {/* Comparison checkbox */}
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={comparedPropertyIds.includes(property.id)}
                    onChange={e => {
                      if (e.target.checked) addToComparison(property);
                      // For removal, need delete logic (future)
                    }}
                    id={`compare-${property.id}`}
                    className="mr-2 text-blue-500 h-4 w-4"
                  />
                  <label htmlFor={`compare-${property.id}`} className="select-none cursor-pointer text-sm font-semibold text-blue-600">
                    Compare this property
                  </label>
                </div>
                <h3 className="text-2xl font-bold">{property.propertyName}</h3>
                <p className="text-gray-600">{property.location}, {property.city}</p>

                {/* Display property images if available */}
                {property.multipleImages && property.multipleImages.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Property Images</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                      {property.multipleImages.map((imageObj: any, imgIndex: number) => {
                        const image = typeof imageObj === 'string' ? imageObj : imageObj?.path;
                        if (!image) return null;
                        // Robust image path handling for string paths
                        const cleanPath = image.replace(/\\/g, '/');
                        const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
                        const fullUrl = image.startsWith('http') ? image : `${baseUrl}${finalPath}`;

                        return (
                          <div key={imgIndex} className="relative">
                            <img
                              src={fullUrl}
                              alt={`${property.propertyName} - Image ${imgIndex + 1}`}
                              className="w-full h-32 object-cover rounded"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <p><strong>Property Name:</strong> {property.propertyName || 'N/A'}</p>
                  <p><strong>City:</strong> {property.city || 'N/A'}</p>
                  <p><strong>Location:</strong> {property.location || 'N/A'}</p>
                  <p><strong>bathrooms:</strong> {property.baths || 'N/A'}</p>
                  <p><strong>beds:</strong> {property.beds || 'N/A'}</p>
                  <p><strong>Property Type:</strong> {property.propertyType || 'N/A'}</p>
                  <p><strong>Price:</strong> {property.tentativeBudget || 'N/A'}</p>
                  <p><strong>Carpet Area:</strong> {property.carpetArea ? `${property.carpetArea} ` : 'N/A'}</p>
                  <p><strong>Rera-Link:</strong> {property.event || 'N/A'}</p>
                  <p><strong>RERA Number:</strong> {property.reraNumber || 'N/A'}</p>
                </div>

                {/* Configuration Typology Table */}
                {property.configurationTypology && Array.isArray(property.configurationTypology) && property.configurationTypology.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Configuration Typology</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-2 py-1">Flat</th>
                            <th className="border px-2 py-1">Area (sqft)</th>
                            <th className="border px-2 py-1">Price</th>
                            <th className="border px-2 py-1">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {property.configurationTypology.map((conf: any, idx: number) => (
                            <tr key={idx}>
                              <td className="border px-2 py-1">{conf.flat_available}</td>
                              <td className="border px-2 py-1">{conf.area_sqft}</td>
                              <td className="border px-2 py-1">{conf.price}</td>
                              <td className="border px-2 py-1">{conf.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* <p className="mt-4"><strong>About Property:</strong> {property.aboutProperty || 'No description available.'}</p> */}

                {property.slug && <p className="mt-4 text-sm text-black-500"><strong>Slug:</strong> {property.slug}</p>}

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => deleteProperty(property.id)}
                    className="text-red-600 hover:text-red-800"
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
                    {editProperty.multipleImages.map((imageObj: any, index: number) => {
                      const image = typeof imageObj === 'string' ? imageObj : imageObj?.path;
                      if (!image) return null;
                      // Robust image path handling
                      const cleanPath = image.replace(/\\/g, '/');
                      const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
                      const fullUrl = image.startsWith('http') ? image : `${baseUrl}${finalPath}`;

                      return (
                        <div key={index} className="relative group">
                          <img
                            src={fullUrl}
                            alt={`Property image ${index + 1}`}
                            className="w-full h-32 object-cover rounded border border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const updatedImages = [...editProperty.multipleImages];
                              const removed = updatedImages.splice(index, 1)[0];
                              setEditProperty({
                                ...editProperty,
                                multipleImages: updatedImages
                              });
                              if (removed && removed.filename) {
                                setDeletedImages(prev => [...prev, removed.filename]);
                              }
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


            {/* Property Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
                <input
                  type="text"
                  value={editProperty.propertyName || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, propertyName: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <input
                  type="text"
                  value={editProperty.propertyType || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, propertyType: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
                <input
                  type="text"
                  value={editProperty.youtubeUrl || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, youtubeUrl: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Google Map URL</label>
                <input
                  type="text"
                  value={editProperty.googleMapUrl || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, googleMapUrl: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Category</label>
                <input
                  type="text"
                  value={editProperty.propertyCategory || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, propertyCategory: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Beds - USE 0 IF NOT AVAILABLE </label>
                <input
                  type="number"
                  value={editProperty.beds || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, beds: e.target.value ? parseInt(e.target.value) : '' })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Baths - USE 0 IF NOT AVAILABLE </label>
                <input
                  type="number"
                  value={editProperty.baths || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, baths: e.target.value ? parseInt(e.target.value) : '' })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topology</label>
                <input
                  type="text"
                  value={editProperty.topology || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, topology: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Carpet Area</label>
                <input
                  type="text"
                  value={editProperty.carpetArea || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, carpetArea: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={editProperty.city || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, city: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={editProperty.location || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, location: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Tentative Budget</label>
                <input
                  type="text"
                  value={editProperty.tentativeBudget || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, tentativeBudget: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Possession</label>
                <input
                  type="text"
                  value={editProperty.possession || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, possession: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  value={editProperty.seoTitle || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, seoTitle: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                <textarea
                  value={editProperty.seoDescription || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, seoDescription: e.target.value })}
                  rows={2}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
                <input
                  type="text"
                  value={editProperty.seoKeywords || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, seoKeywords: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                <input
                  type="text"
                  value={editProperty.canonical || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, canonical: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="https://example.com/property"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">About Property Description</label>
                <textarea
                  value={editProperty.aboutPropertyDescription || ''}
                  onChange={(e) => setEditProperty({ ...editProperty, aboutPropertyDescription: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Detailed description of the property..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={editProperty.slug || ''}
                    onChange={(e) => setEditProperty({ ...editProperty, slug: e.target.value })}
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                    placeholder="property-name-location"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const { propertyName, topology, location } = editProperty;
                      if (propertyName) {
                        const parts = [propertyName, topology, location].filter(Boolean);
                        const slug = parts
                          .join(' ')
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, '')
                          .replace(/\s+/g, '-')
                          .trim();
                        setEditProperty({ ...editProperty, slug });
                      }
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Event</label>
                <input
                  type="text"
                  value={editProperty.event || ''}
                  onChange={e => setEditProperty({ ...editProperty, event: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="e.g., Pre-launch offer"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">RERA Number</label>
                <input
                  type="text"
                  value={editProperty.reraNumber || ''}
                  onChange={e => setEditProperty({ ...editProperty, reraNumber: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="e.g., P51800012345"
                />
              </div>

              {/* Pros & Cons Edit Section */}
              <div className="md:col-span-2 border-t pt-4 mt-2">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Pros &amp; Cons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Pros */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">👍 Pros</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={prosEditInput}
                        onChange={e => setProsEditInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = prosEditInput.trim();
                            if (val) {
                              setEditProperty({ ...editProperty, pros: [...(editProperty.pros || []), val] });
                              setProsEditInput('');
                            }
                          }
                        }}
                        className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
                        placeholder="Type a pro and press Enter"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const val = prosEditInput.trim();
                          if (val) {
                            setEditProperty({ ...editProperty, pros: [...(editProperty.pros || []), val] });
                            setProsEditInput('');
                          }
                        }}
                        className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
                      >+</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(editProperty.pros || []).map((item: string, i: number) => (
                        <span key={i} className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          ✓ {item}
                          <button
                            type="button"
                            onClick={() => setEditProperty({ ...editProperty, pros: editProperty.pros.filter((_: string, idx: number) => idx !== i) })}
                            className="ml-1 text-green-600 hover:text-green-900 font-bold"
                          >×</button>
                        </span>
                      ))}
                      {(!editProperty.pros || editProperty.pros.length === 0) && (
                        <p className="text-xs text-gray-400 italic">No pros added yet.</p>
                      )}
                    </div>
                  </div>

                  {/* Cons */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">👎 Cons</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={consEditInput}
                        onChange={e => setConsEditInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = consEditInput.trim();
                            if (val) {
                              setEditProperty({ ...editProperty, cons: [...(editProperty.cons || []), val] });
                              setConsEditInput('');
                            }
                          }
                        }}
                        className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
                        placeholder="Type a con and press Enter"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const val = consEditInput.trim();
                          if (val) {
                            setEditProperty({ ...editProperty, cons: [...(editProperty.cons || []), val] });
                            setConsEditInput('');
                          }
                        }}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                      >+</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(editProperty.cons || []).map((item: string, i: number) => (
                        <span key={i} className="flex items-center gap-1 bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                          ✕ {item}
                          <button
                            type="button"
                            onClick={() => setEditProperty({ ...editProperty, cons: editProperty.cons.filter((_: string, idx: number) => idx !== i) })}
                            className="ml-1 text-red-600 hover:text-red-900 font-bold"
                          >×</button>
                        </span>
                      ))}
                      {(!editProperty.cons || editProperty.cons.length === 0) && (
                        <p className="text-xs text-gray-400 italic">No cons added yet.</p>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Configuration Typology Edit Table */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Configuration Typology</label>
                <div className="overflow-x-auto">
                  <table className="min-w-full border text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-2 py-1">Flat</th>
                        <th className="border px-2 py-1">Area (sqft)</th>
                        <th className="border px-2 py-1">Price</th>
                        <th className="border px-2 py-1">Note</th>
                        <th className="border px-2 py-1">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(editProperty.configurationTypology || []).map((conf: any, idx: number) => (
                        <tr key={idx}>
                          <td className="border px-2 py-1">
                            <input
                              type="text"
                              value={conf.flat_available}
                              onChange={e => {
                                const updated = [...editProperty.configurationTypology];
                                updated[idx] = { ...updated[idx], flat_available: e.target.value };
                                setEditProperty({ ...editProperty, configurationTypology: updated });
                              }}
                              className="w-full border border-gray-300 rounded px-2 py-1"
                            />
                          </td>
                          <td className="border px-2 py-1">
                            <input
                              type="text"
                              value={conf.area_sqft}
                              onChange={e => {
                                const updated = [...editProperty.configurationTypology];
                                updated[idx] = { ...updated[idx], area_sqft: e.target.value };
                                setEditProperty({ ...editProperty, configurationTypology: updated });
                              }}
                              className="w-full border border-gray-300 rounded px-2 py-1"
                            />
                          </td>
                          <td className="border px-2 py-1">
                            <input
                              type="text"
                              value={conf.price}
                              onChange={e => {
                                const updated = [...editProperty.configurationTypology];
                                updated[idx] = { ...updated[idx], price: e.target.value };
                                setEditProperty({ ...editProperty, configurationTypology: updated });
                              }}
                              className="w-full border border-gray-300 rounded px-2 py-1"
                            />
                          </td>
                          <td className="border px-2 py-1">
                            <input
                              type="text"
                              value={conf.note}
                              onChange={e => {
                                const updated = [...editProperty.configurationTypology];
                                updated[idx] = { ...updated[idx], note: e.target.value };
                                setEditProperty({ ...editProperty, configurationTypology: updated });
                              }}
                              className="w-full border border-gray-300 rounded px-2 py-1"
                            />
                          </td>
                          <td className="border px-2 py-1 text-center">
                            <button
                              type="button"
                              className="bg-red-500 text-white px-2 py-1 rounded"
                              onClick={() => {
                                const updated = [...editProperty.configurationTypology];
                                updated.splice(idx, 1);
                                setEditProperty({ ...editProperty, configurationTypology: updated });
                              }}
                              disabled={editProperty.configurationTypology.length === 1}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => {
                      const updated = [...(editProperty.configurationTypology || [])];
                      updated.push({ flat_available: '', area_sqft: '', price: '', note: '' });
                      setEditProperty({ ...editProperty, configurationTypology: updated });
                    }}
                  >
                    Add Configuration
                  </button>
                </div>
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
                onClick={handleUpdateProperty}
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
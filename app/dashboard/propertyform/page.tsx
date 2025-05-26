'use client';

import { useState } from 'react';
import Image from 'next/image';

// Define interfaces for better type safety
interface FormData {
  propertyName: string;
  topology: string;
  carpetArea: string;
  city: string;
  location: string;
  tentativeBudget: string;
  possession: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  multipleImages?: string[];
  propertyType: string;
  youtubeUrl: string;
  googleMapUrl: string;
  propertyCategory: string;
  beds: string;   // Use string for input compatibility
  baths: string;
}

interface Errors {
  [key: string]: string | null;
}

export default function PropertyForm() {
  // All hooks must be at the top level
  const [formData, setFormData] = useState<FormData>({
    propertyName: '',
    topology: '',
    carpetArea: '',
    city: '',
    location: '',
    tentativeBudget: '',
    possession: '',
    slug: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    propertyType: '',
    youtubeUrl: '',
    googleMapUrl: '',
    propertyCategory: '',
    beds: '',
    baths: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [imageMode, setImageMode] = useState<'upload' | 'urls'>('upload');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: string; message: string }>({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Helper function to generate slug from property name
  const generateSlug = () => {
    if (formData.propertyName) {
      const slug = formData.propertyName
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
        
      setFormData(prev => ({
        ...prev,
        slug
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const files = Array.from(e.target.files);
    setImages(files);

    // Create preview URLs for the selected images
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage({ type: '', message: '' });
  setErrors({});

  // Validate required fields
  const newErrors: Errors = {};
  if (!formData.propertyName) newErrors.propertyName = 'Property name is required';
  if (!formData.slug) newErrors.slug = 'Slug is required';

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setIsSubmitting(false);
    setSubmitMessage({
      type: 'error',
      message: 'Please fill in all required fields',
    });
    return;
  }

  try {
    // Construct multipart/form-data
    const formDataToSend = new FormData();

    // Append all text fields
    for (const key in formData) {
      const value = formData[key as keyof FormData];
      if (Array.isArray(value)) {
        value.forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, value || '');
      }
    }

    // Append images if in 'upload' mode
    if (imageMode === 'upload' && images.length > 0) {
      images.forEach((image: File) => {
        formDataToSend.append('propertyImages', image); // multer expects 'propertyImages'
      });
    }

    const response = await fetch('https://api.propertydronerealty.com/properties', {
      method: 'POST',
      body: formDataToSend, // No content-type header; browser sets it with correct boundary
    });

    if (response.ok) {
      setSubmitMessage({
        type: 'success',
        message: 'Property submitted successfully!',
      });

     setImages([]);
      setPreviewImages([]);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit property.');
    }
  } catch (error) {
    console.error('Error submitting property:', error);
    setSubmitMessage({
      type: 'error',
      message: `Failed to submit property: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
      
      {submitMessage.message && (
        <div className={`p-4 mb-6 rounded-md ${
          submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {submitMessage.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.propertyName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.propertyName && (
              <p className="mt-1 text-sm text-red-500">{errors.propertyName}</p>
            )}
          </div>
          
          {/* Topology */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topology
            </label>
            <input
              type="text"
              name="topology"
              value={formData.topology}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g., 2 & 3 BHK"
            />
          </div>
          
          {/* Carpet Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Carpet Area
            </label>
            <input
              type="text"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g., 1200-1500 sq.ft"
            />
          </div>
          
          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {/* Tentative Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tentative Budget
            </label>
            <input
              type="text"
              name="tentativeBudget"
              value={formData.tentativeBudget}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g., ₹85L - ₹1.2Cr"
            />
          </div>
          
          {/* Possession */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Possession
            </label>
            <input
              type="text"
              name="possession"
              value={formData.possession}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="e.g., Dec 2025"
            />
          </div>
          {/* Property Type */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Property Type
  </label>
  <select
    name="propertyType"
    value={formData.propertyType}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
  >
    <option value="">Select type</option>
    <option value="Luxury">Luxury</option>
    <option value="Premium">Premium</option>
  </select>
</div>

{/* Property Category */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Property Category
  </label>
  <input
    type="text"
    name="propertyCategory"
    value={formData.propertyCategory}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    placeholder="e.g., Residential"
  />
</div>

{/* YouTube URL */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    YouTube URL
  </label>
  <input
    type="text"
    name="youtubeUrl"
    value={formData.youtubeUrl}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    placeholder="https://youtube.com/example"
  />
</div>

{/* Google Map URL */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Google Map URL
  </label>
  <input
    type="text"
    name="googleMapUrl"
    value={formData.googleMapUrl}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    placeholder="https://maps.google.com/example"
  />
</div>

{/* Beds */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Beds
  </label>
  <input
    type="number"
    name="beds"
    value={formData.beds}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    min={0}
    placeholder="e.g., 3"
  />
</div>

{/* Baths */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Baths
  </label>
  <input
    type="number"
    name="baths"
    value={formData.baths}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md"
    min={0}
    placeholder="e.g., 2"
  />
</div>
          
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL Slug <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`flex-1 p-2 border ${errors.slug ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="e.g., property-name-location-city"
              />
              <button
                type="button"
                onClick={generateSlug}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Generate
              </button>
            </div>
            {errors.slug && (
              <p className="mt-1 text-sm text-red-500">{errors.slug}</p>
            )}
          </div>
        </div>
        
        {/* SEO Fields */}
        <div className="border-t pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">SEO Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Title
              </label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Keywords
              </label>
              <input
                type="text"
                name="seoKeywords"
                value={formData.seoKeywords}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Comma separated keywords"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Description
              </label>
              <textarea
                name="seoDescription"
                value={formData.seoDescription}
                onChange={handleChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Image Upload */}
        <div className="border-t pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Property Images</h2>
          
          {/* Toggle between upload and URL inputs */}
          <div className="flex mb-4 border rounded-md overflow-hidden">
            <button 
              type="button"
              onClick={() => setImageMode('upload')}
              className={`flex-1 py-2 ${imageMode === 'upload' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Upload Images
            </button>
            <button 
              type="button"
              onClick={() => setImageMode('urls')}
              className={`flex-1 py-2 ${imageMode === 'urls' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Image URLs
            </button>
          </div>
          
          {imageMode === 'upload' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Multiple Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              
              {/* Image Previews */}
              {previewImages.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Image Previews:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {previewImages.map((preview, index) => (
                      <div key={index} className="relative h-32 border rounded-md overflow-hidden">
                        <Image
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URLs (one per line)
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                placeholder="Enter image URLs here, one per line"
                onChange={(e) => {
                  const urls = e.target.value.split('\n').filter(url => url.trim());
                  setFormData(prev => ({
                    ...prev,
                    multipleImages: urls
                  }));
                }}
                value={formData.multipleImages ? formData.multipleImages.join('\n') : ''}
              ></textarea>
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="border-t pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Property'}
          </button>
        </div>
      </form>
    </div>
  );
}
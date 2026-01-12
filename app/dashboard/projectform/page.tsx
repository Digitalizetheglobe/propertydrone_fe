// app/projects/add/page.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";



export default function AddProject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    buildingName: "",
    unitNo: "",
    propertyType: "",
    propertySubtype: "",
    floor: "",
    location: "",
    city: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    slug: ""
  });
  
  const [images, setImages] = useState<File[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Auto-generate slug from building name if slug field is empty
    if (name === "buildingName" && !formData.slug) {
      const slug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files);
      
      // Create preview URLs for the selected images
      const newPreviewImages = fileArray.map(file => URL.createObjectURL(file));
      
      // Append new images to existing ones
      setImages(prev => [...prev, ...fileArray]);
      setPreviewImages(prev => [...prev, ...newPreviewImages]);
    }
  };

  const removeImage = (index: number) => {
    // Remove from preview and files arrays
    setPreviewImages(prev => {
      const newPreviews = [...prev];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
    
    setImages(prev => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.buildingName || !formData.propertyType || !formData.location || !formData.city) {
      alert("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    
    try {
      // Create form data object to send files and form data
      const submitData = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      
      // Add all images to FormData with the same field name
      images.forEach((file) => {
        submitData.append("projectImages", file);
      });
      
      // Send POST request to API
      const response = await fetch("https://api.propertydronerealty.com/projects", {
        method: "POST",
        body: submitData,
        // Don't set Content-Type header when sending FormData
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add project: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Project added successfully:", result);
      
      // Redirect to project listing page
      router.push("/projects");
      router.refresh();
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="buildingName" className="block text-sm font-medium text-gray-700 mb-1">
              Building Name*
            </label>
            <input
              id="buildingName"
              type="text"
              name="buildingName"
              value={formData.buildingName}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="unitNo" className="block text-sm font-medium text-gray-700 mb-1">
              Unit No
            </label>
            <input
              id="unitNo"
              type="text"
              name="unitNo"
              value={formData.unitNo}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
              Property Type*
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Mixed-Use">Mixed-Use</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="propertySubtype" className="block text-sm font-medium text-gray-700 mb-1">
              Property Subtype
            </label>
            <input
              id="propertySubtype"
              type="text"
              name="propertySubtype"
              value={formData.propertySubtype}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Apartment, Office, Warehouse"
            />
          </div>
          
          <div>
            <label htmlFor="floor" className="block text-sm font-medium text-gray-700 mb-1">
              Floor
            </label>
            <input
              id="floor"
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location*
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Downtown, Business District"
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City*
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
              Slug*
            </label>
            <input
              id="slug"
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. building-name-location"
            />
            <p className="mt-1 text-xs text-gray-500">
              URL-friendly version of the building name (auto-generated)
            </p>
          </div>
        </div>
        
        <div>
          <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-700 mb-1">
            SEO Title
          </label>
          <input
            id="seoTitle"
            type="text"
            name="seoTitle"
            value={formData.seoTitle}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="seoDescription" className="block text-sm font-medium text-gray-700 mb-1">
            SEO Description
          </label>
          <textarea
            id="seoDescription"
            name="seoDescription"
            value={formData.seoDescription}
            onChange={handleInputChange}
            rows={3}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="seoKeywords" className="block text-sm font-medium text-gray-700 mb-1">
            SEO Keywords
          </label>
          <input
            id="seoKeywords"
            type="text"
            name="seoKeywords"
            value={formData.seoKeywords}
            onChange={handleInputChange}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="property, real estate, building (comma separated)"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Images
          </label>
          
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
              Upload Images
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <span className="text-sm text-gray-500">
              {images.length > 0 ? `${images.length} image(s) selected` : "No images selected"}
            </span>
          </div>
          
          {previewImages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {previewImages.map((img, index) => (
                <div key={index} className="relative w-32 h-32">
                  <div className="w-32 h-32 relative rounded-md overflow-hidden border border-gray-300">
                    {/* Using regular img tag for preview images */}
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>
    </div>
      
    </>
  );
}
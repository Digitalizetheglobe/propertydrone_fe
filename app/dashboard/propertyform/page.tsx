"use client";

import { useState } from "react";
import axios from "axios";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    topology: "",
    carpetArea: "",
    city: "",
    location: "",
    tentativeBudget: "",
    possession: "",
    slug: "",
    seoDescription: "",
    seoTitle: "",
    seoKeywords: "",
  });

  const [images, setImages] = useState<File[]>([]);

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  // Remove image from preview
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data fields
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Append images
    images.forEach((image) => {
      data.append("multipleImages", image);
    });

    try {
      const response = await axios.post("http://localhost:5000/properties", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Success:", response.data);
      alert("Property added successfully!");
      setFormData({
        propertyName: "",
        topology: "",
        carpetArea: "",
        city: "",
        location: "",
        tentativeBudget: "",
        possession: "",
        slug: "",
        seoDescription: "",
        seoTitle: "",
        seoKeywords: "",
      });
      setImages([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add property.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Fields */}
        {[
          { label: "Property Name", name: "propertyName" },
          { label: "Topology", name: "topology" },
          { label: "Carpet Area", name: "carpetArea" },
          { label: "City", name: "city" },
          { label: "Location", name: "location" },
          { label: "Tentative Budget", name: "tentativeBudget" },
          { label: "Possession", name: "possession" },
          { label: "Slug", name: "slug" },
          { label: "SEO Title", name: "seoTitle" },
          { label: "SEO Keywords", name: "seoKeywords" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 mt-1"
              required={name === "propertyName" || name === "slug"}
            />
          </div>
        ))}

        {/* SEO Description */}
        <div>
          <label className="block text-sm font-medium">SEO Description</label>
          <textarea
            name="seoDescription"
            value={formData.seoDescription}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2 mt-1"
            rows={3}
          />
        </div>

        {/* Multiple Image Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Images</label>
          <input type="file" multiple onChange={handleFileChange} className="mt-2" />
        </div>

        {/* Image Preview */}
        <div className="flex flex-wrap gap-2 mt-2">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img src={URL.createObjectURL(img)} alt="Preview" className="w-20 h-20 object-cover rounded" />
              <button
                type="button"
                className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                onClick={() => removeImage(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;

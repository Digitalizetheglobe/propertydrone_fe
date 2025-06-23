'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
// Make sure to adjust the import path according to your project structure
import RichTextEditor from 'reactjs-tiptap-editor';
import { 
  BaseKit, 
  Bold, 
  BulletList, 
  Heading, 
  Italic, 
  Blockquote, 
  Code, 
  Color, 
  FontSize, 
  History, 
  HorizontalRule, 
  Iframe, 
  Indent, 
  Link,
  OrderedList,
  SlashCommand,
  Strike,
  Table,
  Katex,
  Underline,
  Image,
  FontFamily
} from 'reactjs-tiptap-editor/extension-bundle'
import 'reactjs-tiptap-editor/style.css';

// Define the extensions array for RichTextEditor
const extensions = [
  BaseKit,
  Bold,
  BulletList,
  Heading,
  Italic,
  Blockquote,
  Code,
  Color,
  FontSize,
  History,
  HorizontalRule,
  Iframe,
  Indent,
  Link,
  OrderedList,
  SlashCommand,
  Strike,
  Table,
  Katex,
  Underline,
  Image,
  FontFamily,
];

export default function AddRealEstateBasic() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    price: '',
    location: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    status: 'available',
    images: [] as File[],
    author: '' // This will store the rich text content
  });
  const [loading, setLoading] = useState(false);

  // Function to upload images and get URLs
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }
    if (!formData.description.trim()) {
      toast.error('Description is required');
      return;
    }
    if (!formData.keywords.trim()) {
      toast.error('Keywords are required');
      return;
    }
    if (!formData.author.trim()) {
      toast.error('Content is required');
      return;
    }
    if (formData.images.length === 0) {
      toast.error('At least one image is required');
      return;
    }

    setLoading(true);

    try {
      // For now, use placeholder URLs for images
      // You can implement image upload later if needed
      const imageUrls = formData.images.map(file => `/${file.name}`);
      
      // Prepare JSON data for the API
      const jsonData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        keywords: formData.keywords.trim(),
        author: formData.author.trim(),
        price: formData.price || null,
        location: formData.location || null,
        propertyType: formData.propertyType || null,
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
        bathrooms: formData.bathrooms ? parseInt(formData.bathrooms) : null,
        area: formData.area ? parseInt(formData.area) : null,
        status: formData.status || 'available',
        images: ['/dummy-image.jpg']
      };

      console.log('Sending JSON data:', jsonData);

      // POST API call to create real estate listing
      const response = await fetch('https://api.propertydronerealty.com/real-estate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        // Handle different error status codes
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Real estate listing created:', result);
      
      // Log what we sent vs what we received
      console.log('Data sent:', jsonData);
      console.log('Data received:', result);
      
      toast.success(`Real estate listing "${formData.title}" created successfully!`);
      
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        keywords: '',
        price: '',
        location: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        status: 'available',
        images: [],
        author: ''
      });

      // Reset file input
      const fileInput = document.getElementById('images') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error creating real estate listing:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create listing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl mx-auto font-bold mb-8">Add Real Estate Basic</h1>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter property title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter property description"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
          <div className="border border-gray-300 rounded-md">
            <RichTextEditor
              output="html"
              content={formData.author}
              onChangeContent={(content) => {
                console.log('Rich text content changed:', content);
                setFormData({ ...formData, author: content || '' });
              }}
              extensions={extensions}
              minHeight="300px"
              useEditorOptions={{
                editorProps: {
                  attributes: {
                    class: 'prose dark:prose-invert max-w-none p-4',
                  },
                },
              }}
              bubbleMenu={{}}
            />
          </div>
          {!formData.author.trim() && (
            <p className="text-red-500 text-sm mt-1">Content is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
            Keywords (comma-separated) *
          </label>
          <input
            type="text"
            id="keywords"
            value={formData.keywords}
            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="e.g. apartment, luxury, downtown, spacious"
          />
        </div>

       

       

        <div className="mb-6">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
            Images *
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Select multiple images. {formData.images.length} image(s) selected.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating...' : 'Create Real Estate Listing'}
        </button>
      </form>
    </div>
  );
}
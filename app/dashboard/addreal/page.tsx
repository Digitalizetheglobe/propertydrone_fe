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
    author: ''
  });
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images') {
          formData.images.forEach((image) => {
            formDataToSend.append('images', image);
          });
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, String(value));
        }
      });

      // POST API call to create real estate listing
      const response = await fetch('https://api.propertydronerealty.com/real-estate', {
        method: 'POST',
        body: formDataToSend,
        // Note: Don't set Content-Type header when using FormData - browser sets it automatically with boundary
      });

      if (!response.ok) {
        // Handle different error status codes
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Real estate listing created:', result);
      
      toast.success('Real estate listing created successfully!');
      
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
      
      // Navigate to dashboard or listing page
      router.push('/dashboard');
      
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
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Content*</label>
          <RichTextEditor
            output="html"
            content={formData.author}
            onChangeContent={(author) => setFormData({ ...formData, author })}
            extensions={extensions}
            minHeight="300px"
            useEditorOptions={{
              editorProps: {
                attributes: {
                  class: 'prose dark:prose-invert max-w-none',
                },
              },
            }}
            bubbleMenu={{}}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            id="keywords"
            value={formData.keywords}
            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
            Images
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
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Real Estate Listing'}
        </button>
      </form>
    </div>
  );
}
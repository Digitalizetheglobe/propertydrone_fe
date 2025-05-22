'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

interface RealEstateBasic {
  id: number;
  title: string;
  description: string;
  keywords: string;
  images: string[];
  createdAt: string;
  price: string;
  location: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  status: string;
}

export default function AllRealEstateBasics() {
  const router = useRouter();
  const [basics, setBasics] = useState<RealEstateBasic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBasics();
  }, []);

  const fetchBasics = async () => {
    try {
      const response = await fetch(`http://localhost:5000/real-estate`);
      if (!response.ok) throw new Error('Failed to fetch real estate basics');
      const data = await response.json();
      setBasics(data);
    } catch (error) {
      toast.error('Failed to fetch real estate basics');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this real estate basic?')) return;

    try {
      const response = await fetch(`http://localhost:5000/real-estate/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete real estate basic');

      toast.success('Real estate basic deleted successfully');
      fetchBasics();
    } catch (error) {
      toast.error('Failed to delete real estate basic');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Real Estate Basics</h1>
        <button
          onClick={() => router.push('/dashboard/addreal')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {basics.map((basic) => (
          <div key={basic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {basic.images && basic.images[0] && (
              <div className="relative h-48 w-full">
                <Image
                  src={basic.images[0]}
                  alt={basic.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{basic.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">{basic.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {basic.keywords && basic.keywords.split(',').map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                  >
                    {keyword.trim()}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
                <div>
                  <span className="font-medium">Price:</span> ${basic.price}
                </div>
                <div>
                  <span className="font-medium">Location:</span> {basic.location}
                </div>
                <div>
                  <span className="font-medium">Type:</span> {basic.propertyType}
                </div>
                <div>
                  <span className="font-medium">Status:</span> {basic.status}
                </div>
                <div>
                  <span className="font-medium">Bedrooms:</span> {basic.bedrooms}
                </div>
                <div>
                  <span className="font-medium">Bathrooms:</span> {basic.bathrooms}
                </div>
                <div>
                  <span className="font-medium">Area:</span> {basic.area} sq ft
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(basic.createdAt).toLocaleDateString()}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/dashboard/editreal/${basic.id}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(basic.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
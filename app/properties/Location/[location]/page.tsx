'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PropertyDetail from '@/app/components/PropertyDetail';

interface Property {
  id: number;
  propertyName: string;
  topology: string;
  carpetArea: string;
  city: string;
  location: string;
  tentativeBudget: string;
  possession: string;
  multipleImages: string[];
  slug: string;
  seoDescription: string;
  seoTitle: string;
  seoKeywords: string;
  createdAt: string;
  updatedAt: string;
}

export default function PropertyPage() {
  const params = useParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`http://localhost:5000/properties`);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data: Property[] = await response.json();

        // Get the location from the URL param
        const locationParam = params.location?.toString().toLowerCase();

        // Filter properties by last word of slug
        const filtered = data.filter((property) => {
          const slugWords = property.slug.split('-');
          const lastWord = slugWords[slugWords.length - 1].toLowerCase();
          return lastWord === locationParam;
        });

        setFilteredProperties(filtered);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [params.location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (filteredProperties.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>No properties found for this location.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {filteredProperties.map((property) => (
        <PropertyDetail
          key={property.id}
          property={{
            ...property,
            multipleImages: property.multipleImages.map((image) => ({
              url: image,
              path: image,
              filename: image.split('/').pop() || 'unknown',
              originalName: image.split('/').pop() || 'unknown',
            })),
          }}
        />
      ))}
    </div>
  );
}
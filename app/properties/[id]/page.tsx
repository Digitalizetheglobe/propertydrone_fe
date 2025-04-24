// app/properties/property/[id]/page.tsx
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
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const id = params.id;
        if (!id) {
          throw new Error('Property ID is required');
        }

        const response = await fetch(`http://localhost:5000/properties/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }

        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [params.id]);

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

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>Property not found</p>
        </div>
      </div>
    );
  }

  return <PropertyDetail property={property} />;
}
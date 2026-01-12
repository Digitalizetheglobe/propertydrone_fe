"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import PropertyDetail from '@/app/components/PropertyDetail';

interface PropertyImage {
  path: string;
  filename: string;
  originalName: string;
}

interface Property {
  id: number;
  propertyName: string;
  topology: string;
  carpetArea: string;
  city: string;
  location: string;
  tentativeBudget: string;
  possession: string;
  multipleImages: PropertyImage[];
  slug: string;
  seoDescription: string;
  seoTitle: string;
  seoKeywords: string;
  createdAt: string;
  updatedAt: string;
}

function PropertyPageContent() {
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const slug = params.slug;
        if (!slug) {
          throw new Error('Property slug is required');
        }

        const response = await fetch(`https://api.propertydronerealty.com/properties/${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }

        const data = await response.json();
        
        // Transform the data if needed to match PropertyImage interface
        const transformedData = {
          ...data,
          multipleImages: Array.isArray(data.multipleImages) 
            ? data.multipleImages.map((img: string | PropertyImage) => {
                // If the image is already an object with the correct structure, return it
                if (typeof img !== 'string' && img.path) {
                  return img;
                }
                
                // If it's a string, create the appropriate object
                const imgPath = typeof img === 'string' ? img : '';
                const filename = typeof imgPath === 'string' && imgPath.includes('/') 
                  ? imgPath.split('/').pop() || 'unknown' 
                  : 'unknown';
                
                return {
                  path: imgPath,
                  filename: filename,
                  originalName: filename
                };
              })
            : []
        };
        
        setProperty(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [params.slug]);

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

export default function PropertyPage() {
  return (
    <Suspense fallback={<div>Loading property...</div>}>
      <PropertyPageContent />
    </Suspense>
  );
}
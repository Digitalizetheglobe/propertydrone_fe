"use client";

import { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/images/7578550-uhd_3840_2160_30fps 1.png';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Bookmark, MapPin, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EnquireSideButton from '@/app/components/EnquireSideButton';
import PropertyDetail from '@/app/components/PropertyDetail';

interface ImageItem {
  path: string;
  filename: string;
  originalName: string;
}

interface Property {
  id: number;
  propertyName: string;
  location: string;
  city: string;
  tentativeBudget: number;
  badge: string;
  secondaryBadge: string;
  possession: string;
  topology: number;
  baths: number;
  carpetArea: number;
  image: any;
  featured: boolean;
  multipleImages?: ImageItem[];
  createdAt: string;
  propertyType: string;
  slug?: string;
  seoDescription?: string;
  seoTitle?: string;
  seoKeywords?: string;
  updatedAt?: string;
}

// Known location slugs
const KNOWN_LOCATIONS = [
  'hinjewadi',
  'bandra-west',
  'baner',
  'balewadi',
  'ravet',
];

// Known BHK / type slugs — uses string matching on topology free text
const BHK_SLUG_MAP: Record<string, {
  /** partial string to search for in the topology field */
  search?: string;
  /** alternative searches (OR logic) */
  altSearch?: string;
  category?: string;
  label: string;
}> = {
  '1rk':               { search: 'rk',      altSearch: 'studio', label: '1 RK / Studio' },
  '1bhk':              { search: '1 bhk',   altSearch: '1,',     label: '1 BHK Flats' },
  '2bhk':              { search: '2 bhk',   altSearch: '2,',     label: '2 BHK Flats' },
  '3bhk':              { search: '3 bhk',   altSearch: '3,',     label: '3 BHK Flats' },
  '4bhk':              { search: '4 bhk',   altSearch: '5 bhk',  label: '4+ BHK Flats' },
  'commercial-office': { category: 'office',                     label: 'Commercial Office' },
};

function SlugPageContent() {
  const params = useParams();
  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug) || '';

  const baseUrl = "http://localhost:9000";

  // Determine slug type
  const isLocationSlug = KNOWN_LOCATIONS.includes(slug.toLowerCase());
  const isBhkSlug = slug.toLowerCase() in BHK_SLUG_MAP;
  const isListingSlug = isLocationSlug || isBhkSlug;

  // ------ LOCATION LISTING MODE ------
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<number, number>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  // ------ PROPERTY DETAIL MODE ------
  const [property, setProperty] = useState<any>(null);

  const bhkMeta = BHK_SLUG_MAP[slug.toLowerCase()];
  const locationLabel = isBhkSlug
    ? bhkMeta.label
    : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const getImageSource = (property: Property, index: number = 0) => {
    if (property.multipleImages && property.multipleImages.length > 0) {
      if (property.multipleImages[index]?.path) {
        const path = property.multipleImages[index].path;
        if (path.startsWith('http')) return path;
        const cleanPath = path.replace(/\\/g, '/');
        const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
        return `${baseUrl}${finalPath}`;
      }
    }
    if (typeof property.image === 'string') {
      if (property.image.startsWith('http')) return property.image;
      const cleanPath = property.image.replace(/\\/g, '/');
      const finalPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
      return `${baseUrl}${finalPath}`;
    }
    return bg;
  };

  const nextImage = (propertyId: number, imagesLength: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (imagesLength <= 1) return;
    setActiveImageIndexes(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % imagesLength
    }));
  };

  const prevImage = (propertyId: number, imagesLength: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (imagesLength <= 1) return;
    setActiveImageIndexes(prev => ({
      ...prev,
      [propertyId]: (prev[propertyId] || 0) === 0 ? imagesLength - 1 : (prev[propertyId] || 0) - 1
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (isListingSlug) {
          // Fetch all properties and filter by location or BHK
          const response = await fetch(`${baseUrl}/properties`);
          if (!response.ok) throw new Error('Failed to fetch properties');
          const data = await response.json();

          const mapped = data.map((p: any) => ({
            id: p.id,
            propertyName: p.propertyName || 'Unnamed Property',
            location: p.location || '',
            city: p.city || '',
            tentativeBudget: p.tentativeBudget || 'N/A',
            badge: p.badge || '',
            secondaryBadge: p.secondaryBadge || '',
            possession: p.possession || '',
            topology: typeof p.topology === 'string' ? p.topology : String(p.topology || ''),
            baths: p.baths || 0,
            carpetArea: p.carpetArea || 0,
            image: p.image || bg,
            featured: Boolean(p.featured),
            multipleImages: p.multipleImages || [],
            createdAt: p.createdAt || new Date().toISOString(),
            propertyType: p.propertyType || '',
            slug: p.slug,
          }));

          let filtered: Property[];
          if (isLocationSlug) {
            const locationName = slug.replace(/-/g, ' ');
            filtered = mapped.filter((p: Property) =>
              p.location.toLowerCase() === locationName.toLowerCase()
            );
          } else {
            // BHK slug — match against topology free-text string
            const meta = BHK_SLUG_MAP[slug.toLowerCase()];
            if (meta.category) {
              filtered = mapped.filter((p: Property) =>
                (p.propertyType || '').toLowerCase().includes(meta.category!.toLowerCase()) ||
                (p.topology || '').toString().toLowerCase().includes(meta.category!.toLowerCase())
              );
            } else {
              const search = (meta.search || '').toLowerCase();
              const alt = (meta.altSearch || '').toLowerCase();
              filtered = mapped.filter((p: Property) => {
                const topo = (p.topology || '').toString().toLowerCase();
                return topo.includes(search) || (alt ? topo.includes(alt) : false);
              });
            }
          }

          filtered = filtered.sort((a: Property, b: Property) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

          setProperties(filtered);

          const initialIndexes: Record<number, number> = {};
          filtered.forEach((p: Property) => { initialIndexes[p.id] = 0; });
          setActiveImageIndexes(initialIndexes);
        } else {
          // Fetch single property by slug
          const response = await fetch(`${baseUrl}/properties/${slug}`);
          if (!response.ok) throw new Error('Failed to fetch property details');
          const data = await response.json();

          const transformedData = {
            ...data,
            multipleImages: Array.isArray(data.multipleImages)
              ? data.multipleImages.map((img: string | ImageItem) => {
                if (typeof img !== 'string' && (img as ImageItem).path) return img;
                const imgPath = typeof img === 'string' ? img : '';
                const filename = imgPath.includes('/') ? imgPath.split('/').pop() || 'unknown' : 'unknown';
                return { path: imgPath, filename, originalName: filename };
              })
              : []
          };
          setProperty(transformedData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchData();
  }, [slug, isLocationSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#172747]"></div>
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

  // ---- PROPERTY DETAIL VIEW ----
  if (!isListingSlug) {
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

  // ---- LOCATION LISTING VIEW ----
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <EnquireSideButton />

      {/* Hero Banner */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/video4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
          <p className="uppercase tracking-wider mb-2" style={{ fontSize: '18px', fontFamily: 'Lato', letterSpacing: '0.5px' }}>
            OUR PROPERTIES
          </p>
          <h1
            style={{ fontFamily: "'Rubik', 'Helvetica', sans-serif", fontWeight: 100, lineHeight: '150%' }}
            className="mb-3 text-white text-[36px] sm:text-[52px]"
          >
            Properties in {locationLabel}
          </h1>
          <p className="text-white text-lg">
            <Link href="/"><span className="hover:text-red-400 cursor-pointer">Home</span></Link>
            {' / '}
            <Link href="/our-properties-in-pune"><span className="hover:text-red-400 cursor-pointer">Properties</span></Link>
            {' / '}
            <span className="text-[#FEEB8F] font-medium">{locationLabel}</span>
          </p>
        </div>
      </section>

      {/* Results */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2
            style={{ fontFamily: 'Ivy Mode', fontWeight: 100, lineHeight: '150%' }}
            className="text-[#172747] text-[28px] sm:text-[36px]"
          >
            {properties.length > 0
              ? `${properties.length} Propert${properties.length === 1 ? 'y' : 'ies'} in ${locationLabel}`
              : `No Properties Found in ${locationLabel}`}
          </h2>
          <Link
            href="/our-properties-in-pune"
            className="text-sm text-[#172747] underline hover:text-blue-700 transition-colors"
          >
            ← View All Properties
          </Link>
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-20">
            <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 text-lg">No properties are currently listed in <strong>{locationLabel}</strong>.</p>
            <Link href="/our-properties-in-pune">
              <button className="mt-6 bg-[#172747] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors">
                Browse All Properties
              </button>
            </Link>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          >
            {properties.map((property) => {
              const activeIndex = activeImageIndexes[property.id] || 0;
              const hasMultiple = property.multipleImages && property.multipleImages.length > 1;

              return (
                <motion.div
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group"
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(property.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Link href={property.slug ? `/our-properties-in-pune/${property.slug}` : `/our-properties-in-pune/${property.id}`}>
                    <div className="relative h-52 overflow-hidden">
                      <motion.img
                        src={getImageSource(property, activeIndex) as string}
                        alt={property.propertyName}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = bg.src; }}
                        variants={{ hover: { scale: 1.05, transition: { duration: 0.3 } } }}
                      />
                      {property.badge && (
                        <span className="absolute top-3 left-3 bg-[#172747] text-white text-xs px-2 py-1 rounded-full font-medium">
                          {property.badge}
                        </span>
                      )}
                      {hasMultiple && (
                        <>
                          <button
                            onClick={(e) => prevImage(property.id, property.multipleImages!.length, e)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft size={16} className="text-gray-700" />
                          </button>
                          <button
                            onClick={(e) => nextImage(property.id, property.multipleImages!.length, e)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight size={16} className="text-gray-700" />
                          </button>
                        </>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-[#172747] text-lg mb-1 truncate">{property.propertyName}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin size={14} className="mr-1 flex-shrink-0" />
                        <span className="truncate">{property.location}, {property.city}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#172747] font-bold text-base">{property.tentativeBudget || 'Price on Request'}</span>
                        {property.topology ? (
                          <span className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full">{property.topology} BHK</span>
                        ) : null}
                      </div>
                      {property.possession && (
                        <p className="text-xs text-gray-400 mt-2">Possession: {property.possession}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function SlugPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#172747]"></div></div>}>
      <SlugPageContent />
    </Suspense>
  );
}
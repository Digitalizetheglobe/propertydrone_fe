import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";

const PopularLocations = ({ locationCounts }: { locationCounts: { location: string; count: number; image: string }[] }) => {
  const [displayedLocations, setDisplayedLocations] = useState(locationCounts);

  useEffect(() => {
    const updateDisplayedLocations = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDisplayedLocations(locationCounts.slice(0, 3)); // Mobile
      } else {
        setDisplayedLocations(locationCounts.slice(0, 10)); // Desktop
      }
    };

    updateDisplayedLocations(); // Initial load
    window.addEventListener("resize", updateDisplayedLocations); // Update on resize
    return () => window.removeEventListener("resize", updateDisplayedLocations); // Cleanup
  }, [locationCounts]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h2 className="text-2xl text-[#172747] font-bold mb-6">Popular Locations</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {displayedLocations.map((locationData, index) => (
          <Link key={index} href={`/our-properties-in-pune?location=${locationData.location}`}>
            <div className="relative grid h-52 w-full cursor-pointer place-content-center overflow-hidden rounded-[4px] bg-[#172747] shadow-md transition-transform duration-300 hover:scale-105 group">
              <div className="absolute right-6 top-6 p-1 z-50 rounded-full">
                <Building2 className="w-8 h-8 text-[#EEF1F5] transition-colors duration-300" />
              </div>
              <span className="absolute top-[20px] left-1/2 -translate-x-1/2 bg-[#172747] pr-9 pt-2 text-xl font-semibold uppercase text-[#EEF1F5] opacity-0 tracking-[6px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:tracking-[3px]">
                explore now
              </span>

              <div className="absolute inset-0 border-2 border-[#EEF1F5] opacity-0 rotate-[10deg] transition-all duration-500 ease-in-out group-hover:inset-[10px] group-hover:opacity-100 group-hover:rotate-0 rounded-[4px] pointer-events-none"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-[#EEF1F5]">
                <h3 className="text-2xl font-semibold">{locationData.location}</h3>
                <p className="text-xl">
                  {locationData.count} {locationData.count === 1 ? 'Property' : 'Properties'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;

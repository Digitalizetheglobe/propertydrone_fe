"use client";

import { useState, useEffect } from 'react';

export default function WeatherCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [weatherData, setWeatherData] = useState<{
    weather?: { main: string; icon: string; description: string }[];
    main?: { temp: number; feels_like: number; humidity: number; pressure: number };
    wind?: { speed: number };
    name?: string;
    sys?: { country: string };
    locationName?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Dunmore, Ireland');
  const [searchQuery, setSearchQuery] = useState('');

  const API_KEY = "c311b6362dbf3a74d60264e456c593ad";

  useEffect(() => {
    fetchWeatherData('Dunmore,IE');
  }, []);

  interface GeoData {
    lat: number;
    lon: number;
    name: string;
    country: string;
  }

  interface WeatherResponse {
    weather: { main: string; icon: string; description: string }[];
    main: { temp: number; feels_like: number; humidity: number; pressure: number };
    wind: { speed: number };
    name: string;
    sys: { country: string };
  }

  const fetchWeatherData = async (query: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      // First get coordinates for the location
      const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`
      );
      
      if (!geoResponse.ok) {
        throw new Error('Location not found');
      }
      
      const geoData: GeoData[] = await geoResponse.json();
      
      if (!geoData || geoData.length === 0) {
        throw new Error('Location not found');
      }
      
      const { lat, lon, name, country } = geoData[0];
      
      // Then get weather data
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('Weather data not available');
      }
      
      const weatherData: WeatherResponse = await weatherResponse.json();
      
      setWeatherData({
        ...weatherData,
        locationName: `${name}, ${country}`,
      });
      
      setLocation(`${name}, ${country}`);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeatherData(searchQuery.trim());
      setSearchQuery('');
    }
  };

  if (loading && !weatherData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Search form */}
       
        
        {/* Main card */}
        <div 
          className={`relative w-64 h-32 rounded-3xl z-20 transition-colors duration-300 ease-in-out ${isHovered ? 'bg-yellow-200' : 'bg-gray-100'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Weather icon */}
          <div className="m-4">
            {weatherData?.weather?.[0]?.icon ? (
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                alt={weatherData.weather[0].description}
                className="w-16 h-16"
              />
            ) : (
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#FFD700" />
                <path d="M50,10 Q65,25 80,10 Q65,25 80,40 Q65,25 50,40 Q35,25 50,10" fill="#FFA500" />
              </svg>
            )}
          </div>
          
          {/* Temperature */}
          <div className="absolute text-4xl font-bold top-4 left-32">
            {Math.round(weatherData?.main?.temp ?? 0)} °C
          </div>
          
          {/* Location */}
          <div className="absolute text-sm top-12 left-32">{location}</div>
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder=" location..."
              className="px-4 py-2 rounded-l-lg bg-yellow-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
          <button
  type="submit"
  className="px-4 py-2 bg-yellow-200 rounded-r-lg hover:bg-yellow-300 transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</button>
          </form>
        </div>
         {/* <div className="absolute -top-16 left-0 right-0 flex justify-center"> */}
          
        {/* </div> */}
        {/* Middle expanded card */}
        <div 
          className={`absolute top-0 -z-10 w-60 rounded-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-32' : 'h-32'
          }`}
        >
          {/* Upper section with humidity and wind */}
          <div className="relative flex justify-around mt-2 ml-4 mr-4 text-black">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8" viewBox="0 0 30 30">
                <path d="M15,10 Q20,5 25,10 T25,20 Q15,25 5,20 T5,10 Q10,5 15,10" fill="#89CFF0" />
              </svg>
              <div className="mt-2 text-xs text-center">
                Humidity<br/>{weatherData?.main?.humidity}%
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8" viewBox="0 0 30 30">
                <path d="M5,15 H25 M20,10 L25,15 L20,20" stroke="#333" fill="none" strokeWidth="2" />
              </svg>
              <div className="mt-2 text-xs text-center">
                Wind<br/>{Math.round((weatherData?.wind?.speed ?? 0) * 3.6)} Km/h
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom expanded card - expands downward */}
        <div 
          className={`absolute top-32 -z-10 w-60 rounded-b-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-36 opacity-100' : 'h-0 opacity-0'
          } overflow-hidden`}
        >
          {/* Lower section with additional info - only visible on hover */}
          <div className="flex justify-around w-full px-2 pt-4 text-black">
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#333" strokeWidth="1" />
                <text x="10" y="13" fontSize="8" textAnchor="middle" fill="#333">AQI</text>
              </svg>
              <div className="mt-1 text-xs text-center">
                AQI<br/>30
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <rect x="5" y="5" width="10" height="10" rx="2" fill="none" stroke="#333" strokeWidth="1" />
                <line x1="8" y1="10" x2="12" y2="10" stroke="#333" strokeWidth="1" />
              </svg>
              <div className="mt-1 text-xs text-center">
                Real Feel<br/>{Math.round(weatherData?.main?.feels_like ?? 0)} °C
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="7" fill="none" stroke="#333" strokeWidth="1" />
                <path d="M10,5 L10,10 L13,13" stroke="#333" fill="none" strokeWidth="1" />
              </svg>
              <div className="mt-1 text-xs text-center">
                Pressure<br/>{weatherData?.main?.pressure} mbar
              </div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="absolute bottom-0 w-full py-1 text-center text-white bg-green-500">
            {weatherData?.weather?.[0]?.main}
          </div>
        </div>
        
        {/* Top expanded card - expands upward */}
        <div 
          className={`absolute -z-10 w-60 rounded-t-3xl bg-white transition-all duration-300 ease-in-out ${
            isHovered ? 'h-24 -top-24 opacity-100' : 'h-0 top-0 opacity-0'
          } overflow-hidden`}
        >
          {/* Weather forecast */}
          <div className="flex justify-around w-full h-full items-center text-black">
            <div className="flex flex-col items-center">
              <div className="text-xs">Mon</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
              </svg>
              <div className="text-xs">24°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Tue</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
                <path d="M18,12 H22 M2,12 H6" stroke="#333" strokeWidth="1" />
              </svg>
              <div className="text-xs">22°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Wed</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12,7 Q16,7 16,11 T12,15" fill="#B6B6B6" stroke="#B6B6B6" strokeWidth="1" />
              </svg>
              <div className="text-xs">19°</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs">Thu</div>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFD700" />
              </svg>
              <div className="text-xs">25°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
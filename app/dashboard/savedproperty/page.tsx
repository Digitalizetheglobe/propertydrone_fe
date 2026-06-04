"use client";
import { useEffect, useState } from "react";

interface SavedProperty {
  id: string | number;
  webUserId: string | number;
  propertyId: string | number;
  propertyData?: any;
  WebUser?: {
    name: string;
    email: string;
    number: string;
  };
  savedAt: string;
}

export default function SavedPropertyPage() {
  const [savedProperties, setSavedProperties] = useState<SavedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.propertydronerealty.com/api/saved-properties")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch saved properties");
        return res.json();
      })
      .then(data => {
        setSavedProperties(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Saved Properties</h1>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 bg-red-50 p-4 rounded-lg">{error}</div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  User Details
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Property ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Property Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Saved At
                </th>
              </tr>
            </thead>
            <tbody>
              {savedProperties.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center text-gray-500">
                    No saved property found.
                  </td>
                </tr>
              ) : (
                savedProperties.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">{item.WebUser?.name || 'Unknown User'}</span>
                        <span className="text-gray-500 text-xs">{item.WebUser?.email || 'N/A'}</span>
                        <span className="text-gray-500 text-xs">{item.WebUser?.number || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap font-medium">{item.propertyId}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{item.propertyData?.propertyTitle || item.propertyData?.name || 'N/A'}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.savedAt ? new Date(item.savedAt).toLocaleDateString() : 'N/A'}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

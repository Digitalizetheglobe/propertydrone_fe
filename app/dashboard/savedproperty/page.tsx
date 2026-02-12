"use client";
import { useEffect, useState } from "react";

interface SavedProperty {
  id: string | number;
  webUserId: string | number;
  propertyId: string | number;
}

export default function SavedPropertyPage() {
  const [savedProperties, setSavedProperties] = useState<SavedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/api/saved-properties")
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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Properties</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <ul>
          {savedProperties.length === 0 ? (
            <li>No saved property found.</li>
          ) : (
            savedProperties.map(item => (
              <li key={item.id} className="mb-2 p-2 border-b">
                User #{item.webUserId} - Property: {item.propertyId}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}


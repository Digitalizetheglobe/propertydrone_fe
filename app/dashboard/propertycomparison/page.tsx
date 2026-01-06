"use client";
import { useEffect, useState } from "react";

interface Comparison {
  id: string | number;
  webUserId: string | number;
  propertyId: string | number;
}

export default function PropertyComparisonPage() {
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/property-comparisons")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch property comparisons");
        return res.json();
      })
      .then(data => {
        setComparisons(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Property Comparisons</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <ul>
          {comparisons.length === 0
            ? <li>No comparisons found.</li>
            : comparisons.map(item => (
                <li key={item.id} className="mb-2 p-2 border-b">
                  User #{item.webUserId} - Property: {item.propertyId}
                </li>
              ))
          }
        </ul>
      )}
    </div>
  );
}


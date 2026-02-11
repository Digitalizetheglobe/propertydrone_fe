"use client";
import { useEffect, useState } from "react";

import { User, Building, ExternalLink, X, Phone, Mail, Calendar } from "lucide-react";
import EnquireSideButton from "@/app/components/EnquireSideButton";

interface Comparison {
  id: string | number;
  webUserId: string | number;
  propertyId: string | number;
  propertyData?: any;
  WebUser?: WebUser;
  addedAt?: string;
}

interface WebUser {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: string;
}

// Predefined color schemes for users
const colorSchemes = [
  "bg-blue-50 border-blue-200 text-blue-900",
  "bg-emerald-50 border-emerald-200 text-emerald-900",
  "bg-violet-50 border-violet-200 text-violet-900",
  "bg-amber-50 border-amber-200 text-amber-900",
  "bg-rose-50 border-rose-200 text-rose-900",
  "bg-cyan-50 border-cyan-200 text-cyan-900",
  "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-900",
  "bg-lime-50 border-lime-200 text-lime-900",
];

export default function PropertyComparisonPage() {
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // User Details Modal State
  const [selectedUser, setSelectedUser] = useState<WebUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    fetch("http://api.propertydronerealty.com/api/property-comparisons")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch property comparisons");
        return res.json();
      })
      .then((data) => {
        setComparisons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const fetchUserDetails = async (userId: string | number) => {
    setUserLoading(true);
    setIsModalOpen(true); // Open modal immediately to show loading state
    try {
      const res = await fetch(`http://api.propertydronerealty.com/api/webusers/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch user details");
      const data = await res.json();
      setSelectedUser(data);
    } catch (err) {
      console.error(err);
      // Optional: show error in modal
    } finally {
      setUserLoading(false);
    }
  };

  const closeUserModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Group comparisons by webUserId
  const groupedComparisons = comparisons.reduce((acc, curr) => {
    const userId = String(curr.webUserId);
    if (!acc[userId]) {
      acc[userId] = [];
    }
    acc[userId].push(curr);
    return acc;
  }, {} as Record<string, Comparison[]>);

  // Function to get color based on user ID logic
  const getUserColor = (userId: string) => {
    const numId = parseInt(userId, 10);
    const index = isNaN(numId)
      ? userId.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % colorSchemes.length
      : numId % colorSchemes.length;
    return colorSchemes[index];
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 relative">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Comparison Activity</h1>
        <p className="text-gray-500 mt-2">Monitor which properties users are comparing.</p>
        <EnquireSideButton />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          Error: {error}
        </div>
      ) : Object.keys(groupedComparisons).length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No active comparisons found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedComparisons)
            .sort(([, a], [, b]) => {
              // Sort users by most recent comparison addedAt
              const addedA = a.reduce((max, curr) => Math.max(max, new Date(curr.addedAt || 0).getTime()), 0);
              const addedB = b.reduce((max, curr) => Math.max(max, new Date(curr.addedAt || 0).getTime()), 0);
              return addedB - addedA;
            })
            .map(([userId, userComparisons]) => {
              const colorClass = getUserColor(userId);
              const user = userComparisons[0]?.WebUser;
              const displayName = user?.name || `User #${userId}`;
              const displayPhone = user?.number ? `• ${user.number}` : '';

              // Sort comparisons within user group by recently added
              const sortedComparisons = [...userComparisons].sort((a, b) =>
                new Date(b.addedAt || 0).getTime() - new Date(a.addedAt || 0).getTime()
              );

              return (
                <div
                  key={userId}
                  className={`rounded-xl border shadow-sm overflow-hidden transition-all hover:shadow-md ${colorClass.replace('bg-', 'bg-white ')}`}
                >
                  {/* User Header */}
                  <div className={`px-6 py-4 border-b flex items-center justify-between gap-3 ${colorClass}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/50 rounded-full">
                        <User size={20} className="opacity-75" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg">{displayName}</h2>
                        <div className="flex flex-col">
                          <span className="text-xs opacity-75 font-medium uppercase tracking-wide">
                            {userComparisons.length} Properties Compared
                          </span>
                          {user?.number && (
                            <span className="text-xs opacity-90 font-medium tracking-wide mt-0.5">
                              {user.number}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => fetchUserDetails(userId)}
                      className="cursor-pointer bg-white/50 hover:bg-white/80 p-1.5 rounded-full transition-colors text-inherit shadow-sm"
                      title="View User Details"
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>

                  {/* Properties List */}
                  <div className="p-4 space-y-3 bg-white">
                    {sortedComparisons.map((item) => {
                      let propName = `Property ID: ${item.propertyId}`;
                      try {
                        const pData = typeof item.propertyData === 'string'
                          ? JSON.parse(item.propertyData)
                          : item.propertyData;

                        if (pData && pData.propertyName) {
                          propName = pData.propertyName;
                        }
                      } catch (e) {
                        // Fallback to ID
                      }

                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-gray-400 group-hover:text-gray-600">
                              <Building size={16} />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {propName}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* User Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-all">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 scale-100">
            <div className="px-6 py-4 border-b flex items-center justify-between bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <User size={20} className="text-blue-600" />
                User Details
              </h3>
              <button
                onClick={closeUserModal}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                title="Close"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {userLoading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-2"></div>
                  <p className="text-sm text-gray-500">Loading user details...</p>
                </div>
              ) : selectedUser ? (
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-full mt-1">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Full Name</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedUser.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email Address</p>
                      <p className="text-base font-medium text-gray-900 break-all">{selectedUser.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="p-3 bg-purple-100 text-purple-600 rounded-full mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone Number</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedUser.number}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="p-3 bg-amber-100 text-amber-600 rounded-full mt-1">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Joined On</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(selectedUser.createdAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 bg-red-50 rounded-lg">
                  <p className="text-red-600 font-medium">Unable to load details.</p>
                  <p className="text-xs mt-1">Please try again later.</p>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t flex justify-end">
              <button
                onClick={closeUserModal}
                className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { Trash2, Search, User, Mail, Phone, Calendar } from 'lucide-react';

interface WebUser {
  id: number;
  name: string;
  email: string;
  number: string;
  createdAt: string;
}

export default function WebUsersDashboard() {
  const [users, setUsers] = useState<WebUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/webusers");
      setUsers(res.data);
      setError("");
    } catch (e) {
      setError("Error loading users");
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/webusers/${id}`);
      toast.success("User deleted successfully");
      setUsers(users.filter(u => u.id !== id));
    } catch (e) {
      toast.error("Failed to delete user");
    }
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.number?.includes(searchTerm)
  );

  if (loading) return <div className="p-8 text-center text-gray-500">Loading users...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#172747]">Web Users</h1>
          <p className="text-gray-500 text-sm mt-1">Manage registered website users</p>
        </div>

        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#172747] focus:border-transparent text-sm"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#172747]/5 text-[#172747]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm">ID</th>
                  <th className="px-6 py-4 font-semibold text-sm">User Details</th>
                  <th className="px-6 py-4 font-semibold text-sm">Contact Only</th>
                  <th className="px-6 py-4 font-semibold text-sm">Registered On</th>
                  <th className="px-6 py-4 font-semibold text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500">#{u.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-[#172747]/10 flex items-center justify-center text-[#172747] mr-3">
                            <span className="text-xs font-bold">{u.name?.charAt(0).toUpperCase()}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{u.name}</div>
                            <div className="text-xs text-gray-500 flex items-center mt-0.5">
                              <Mail className="w-3 h-3 mr-1" /> {u.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {u.number ? (
                          <div className="flex items-center">
                            <Phone className="w-3 h-3 mr-1.5 text-gray-400" />
                            {u.number}
                          </div>
                        ) : <span className="text-gray-400 italic">N/A</span>}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1.5 text-gray-400" />
                          {new Date(u.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(u.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all"
                          title="Delete User"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';

interface CookieConsent {
    id: number;
    userId: number | null;
    clientIdentifier: string | null;
    consent: boolean;
    createdAt: string;
    updatedAt: string;
}

export default function CookieConsentsPage() {
    const [consents, setConsents] = useState<CookieConsent[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedConsent, setSelectedConsent] = useState<CookieConsent | null>(null);

    useEffect(() => {
        fetchConsents();
    }, []);

    const fetchConsents = async () => {
        try {
            const res = await fetch('api.propertydronerealty.com/api/cookie-consent/all');
            if (res.ok) {
                const data = await res.json();
                setConsents(data);
            }
        } catch (error) {
            console.error('Error fetching cookie consents:', error);
        } finally {
            setLoading(false);
        }
    };

    const downloadCSV = (period: 'weekly' | 'monthly' | 'yearly') => {
        const now = new Date();
        let cutoffDate = new Date();

        if (period === 'weekly') {
            cutoffDate.setDate(now.getDate() - 7);
        } else if (period === 'monthly') {
            cutoffDate.setMonth(now.getMonth() - 1);
        } else if (period === 'yearly') {
            cutoffDate.setFullYear(now.getFullYear() - 1);
        }

        const filtered = consents.filter(c => new Date(c.updatedAt) >= cutoffDate);

        if (filtered.length === 0) {
            alert(`No data found for the last ${period}.`);
            return;
        }

        const headers = ["ID", "User ID", "Client Identifier", "Consent", "Date"];
        const rows = filtered.map(c => [
            c.id,
            c.userId || "N/A",
            c.clientIdentifier || "N/A",
            c.consent ? "Accepted" : "Rejected",
            new Date(c.updatedAt).toLocaleString()
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(e => e.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `cookie_consents_${period}_${now.toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-[#224295]">Cookie Consents</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => downloadCSV('weekly')}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Weekly
                        </button>
                        <button
                            onClick={() => downloadCSV('monthly')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Monthly
                        </button>
                        <button
                            onClick={() => downloadCSV('yearly')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm"
                        >
                            <FontAwesomeIcon icon={faDownload} /> Yearly
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                                    <th className="p-4 font-semibold">ID</th>
                                    <th className="p-4 font-semibold">Client/User</th>
                                    <th className="p-4 font-semibold">Status</th>
                                    <th className="p-4 font-semibold">Date</th>
                                    <th className="p-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-gray-500">Loading...</td>
                                    </tr>
                                ) : consents.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-gray-500">No consent records found.</td>
                                    </tr>
                                ) : (
                                    consents.map((consent) => (
                                        <tr key={consent.id} className="border-b border-gray-50 hover:bg-gray-50">
                                            <td className="p-4 text-gray-600">#{consent.id}</td>
                                            <td className="p-4 text-gray-800 font-medium">
                                                {consent.userId ? `User: ${consent.userId}` : consent.clientIdentifier}
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${consent.consent ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {consent.consent ? 'Accepted' : 'Rejected'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-600 text-sm">
                                                {new Date(consent.updatedAt).toLocaleString()}
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => setSelectedConsent(consent)}
                                                    className="text-[#224295] hover:text-blue-800 transition-colors"
                                                    title="View Details"
                                                >
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Details Modal */}
            {selectedConsent && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setSelectedConsent(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>

                        <h2 className="text-2xl font-bold text-[#224295] mb-6">Consent Details</h2>

                        <div className="space-y-4">
                            <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                <span className="block text-xs font-bold text-gray-500 uppercase">Consent Status</span>
                                <span className={`text-lg font-semibold ${selectedConsent.consent ? 'text-green-600' : 'text-red-600'}`}>
                                    {selectedConsent.consent ? 'Accepted' : 'Rejected'}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Record ID</span>
                                    <span className="text-gray-800">#{selectedConsent.id}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">User ID</span>
                                    <span className="text-gray-800">{selectedConsent.userId || 'N/A'}</span>
                                </div>
                            </div>

                            <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                <span className="block text-xs font-bold text-gray-500 uppercase">Client Identifier</span>
                                <span className="text-gray-800 break-all font-mono text-sm">{selectedConsent.clientIdentifier}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Created At</span>
                                    <span className="text-gray-800 text-sm">{new Date(selectedConsent.createdAt).toLocaleString()}</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                                    <span className="block text-xs font-bold text-gray-500 uppercase">Updated At</span>
                                    <span className="text-gray-800 text-sm">{new Date(selectedConsent.updatedAt).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setSelectedConsent(null)}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

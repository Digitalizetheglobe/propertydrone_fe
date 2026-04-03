"use client";
import { useEffect, useState } from "react";

interface Testimonial {
  id: string | number;
  name: string;
  testimonial: string;
  rating?: number;
  isActive?: boolean;
  createdAt?: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", testimonial: "", rating: 0, isActive: true });
  const [editId, setEditId] = useState<string | number | null>(null);

  useEffect(() => {
    fetch("https://api.propertydronerealty.com/api/testimonials")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        return res.json();
      })
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = e.target instanceof HTMLInputElement ? e.target.checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let res: Response;
      let newTestimonial: Testimonial;
      if (editId !== null) {
        // Update
        res = await fetch(`https://api.propertydronerealty.com/api/testimonials/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error("Failed to update testimonial");
        newTestimonial = await res.json();
        setTestimonials(t => t.map(test => test.id === editId ? newTestimonial : test));
      } else {
        // Create
        res = await fetch("https://api.propertydronerealty.com/api/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error("Failed to add testimonial");
        newTestimonial = await res.json();
        setTestimonials(t => [newTestimonial, ...t]);
      }
      setShowModal(false);
      setFormData({ name: "", testimonial: "", rating: 0, isActive: true });
      setEditId(null);
    } catch (err: any) {
      alert(err.message || "Error saving testimonial");
    }
  }

  const handleDelete = async (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`https://api.propertydronerealty.com/api/testimonials/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("Delete failed");
      setTestimonials(t => t.filter(test => test.id !== id));
    } catch (err: any) {
      alert(err.message || "Error deleting testimonial");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition" onClick={() => { setShowModal(true); setEditId(null); setFormData({ name: "", testimonial: "", rating: 0, isActive: true }); }}>+ Add Testimonial</button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.length === 0 ? (
            <div className="text-center p-10 border rounded-lg bg-white shadow col-span-3">No testimonials found.</div>
          ) : (
            testimonials.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 relative flex flex-col gap-2 border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">{item.name}</span>
                  {item.isActive !== false ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Active</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs">Inactive</span>
                  )}
                </div>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star} className={"text-xl " + (item.rating && item.rating >= star ? "text-yellow-400" : "text-gray-300")}>â˜…</span>
                  ))}
                </div>
                <div className="mb-2 text-gray-700">{item.testimonial}</div>
                <hr className="my-2" />
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="text-xs text-gray-400">{item.createdAt ? (new Date(item.createdAt)).toLocaleDateString() : new Date().toLocaleDateString()}</span>
                  <div className="flex gap-3 text-gray-500 text-lg">
                    <button title="Edit" className="hover:text-blue-600" onClick={() => {
                      setEditId(item.id);
                      setFormData({
                        name: item.name || "",
                        testimonial: item.testimonial || "",
                        rating: item.rating || 0,
                        isActive: item.isActive !== false
                      });
                      setShowModal(true);
                    }}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.65 3.35l-10.3 10.3v2h2l10.3-10.3a1.416 1.416 0 00-2-2z"></path><path d="M14.86 5.14a2.001 2.001 0 00-2.83-2.83l-1.13 1.13 2.83 2.83 1.13-1.13z"></path></svg></button>
                    <button title="Toggle Active" className="hover:text-yellow-500"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7" /><path d="M8 4v4l3 3" /></svg></button>
                    <button title="Delete" className="hover:text-red-500" onClick={() => handleDelete(item.id)}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h10M6 6v6m4-6v6M2 6v10a1 1 0 001 1h10a1 1 0 001-1V6M7 2h2a2 2 0 012 2v1H5V4a2 2 0 012-2z"></path></svg></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Testimonial</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Client Name" required className="border p-2 w-full rounded" />
              </div>
              <div className="mb-2">
                <textarea name="testimonial" value={formData.testimonial} onChange={handleInputChange} placeholder="Testimonial Content" required className="border p-2 w-full rounded" rows={3} />
              </div>
              <div className="mb-2 flex items-center">
                <label className="mr-2">Rating:</label>
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} onClick={() => setFormData(fd => ({ ...fd, rating: star }))} className="cursor-pointer text-xl text-yellow-500">{formData.rating >= star ? 'â˜…' : 'â˜†'}</span>
                ))}
              </div>
              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" name="isActive" checked={formData.isActive} onChange={e => setFormData(fd => ({ ...fd, isActive: e.target.checked }))} className="mr-2" /> Active
                </label>
              </div>
              <div className="flex gap-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-gray-200">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">Save Testimonial</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}



"use client";
import { useEffect, useState } from "react";

interface Reel {
  id: string | number;
  title: string;
  video: { path: string };
  propertyName?: string;
  location?: string;
  builderName?: string;
  price2bhk?: string;
  price3bhk?: string;
  likes?: number;
  comments?: number;
  views?: number;
  isActive?: boolean;
  createdAt?: string;
  instagramLink?: string;
}

export default function ReelsPage() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ 
    title: "", 
    video: null as File | null, 
    propertyName: "",
    location: "",
    builderName: "",
    price2bhk: "",
    price3bhk: "",
    likes: 0,
    comments: 0,
    views: 0,
    isActive: true,
    instagramLink: ""
  });
  const [editId, setEditId] = useState<string | number | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

  useEffect(() => {
    fetch(`${API_URL}/api/reels`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch reels");
        return res.json();
      })
      .then(data => {
        setReels(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
      
    // Check for add=true query parameter to open modal automatically
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('add') === 'true') {
        setShowModal(true);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.files && target.files.length > 0 ? target.files[0] : null }));
      return;
    }
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
      let newReel: Reel;

      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('propertyName', formData.propertyName);
      submitData.append('location', formData.location);
      submitData.append('builderName', formData.builderName);
      submitData.append('price2bhk', formData.price2bhk);
      submitData.append('price3bhk', formData.price3bhk);
      submitData.append('likes', formData.likes.toString());
      submitData.append('comments', formData.comments.toString());
      submitData.append('views', formData.views.toString());
      submitData.append('isActive', formData.isActive.toString());
      submitData.append('instagramLink', formData.instagramLink);
      
      if (formData.video) {
        submitData.append('video', formData.video);
      }

      if (editId !== null) {
        res = await fetch(`${API_URL}/api/reels/${editId}`, {
          method: "PUT",
          body: submitData
        });
        if (!res.ok) throw new Error("Failed to update reel");
        newReel = await res.json();
        setReels(t => t.map(r => r.id === editId ? newReel : r));
      } else {
        if (!formData.video && !formData.instagramLink) throw new Error("Video file or Instagram link is required");
        res = await fetch(`${API_URL}/api/reels`, {
          method: "POST",
          body: submitData
        });
        if (!res.ok) throw new Error("Failed to add reel");
        newReel = await res.json();
        setReels(t => [newReel, ...t]);
      }
      setShowModal(false);
      setFormData({ 
        title: "", video: null, propertyName: "", location: "", builderName: "", 
        price2bhk: "", price3bhk: "", likes: 0, comments: 0, views: 0, isActive: true, instagramLink: "" 
      });
      setEditId(null);
    } catch (err: any) {
      alert(err.message || "Error saving reel");
    }
  }

  const handleDelete = async (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this reel?")) return;
    try {
      const res = await fetch(`${API_URL}/api/reels/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("Delete failed");
      setReels(t => t.filter(r => r.id !== id));
    } catch (err: any) {
      alert(err.message || "Error deleting reel");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Property Reels</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition" onClick={() => { setShowModal(true); setEditId(null); setFormData({ title: "", video: null, propertyName: "", location: "", builderName: "", price2bhk: "", price3bhk: "", likes: 0, comments: 0, views: 0, isActive: true, instagramLink: "" }); }}>+ Add Reel</button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.length === 0 ? (
            <div className="text-center p-10 border rounded-lg bg-white shadow col-span-3">No reels found.</div>
          ) : (
            reels.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 relative flex flex-col gap-2 border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">{item.title}</span>
                  </div>
                  {item.isActive !== false ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">Active</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs">Inactive</span>
                  )}
                </div>
                <div className="mb-2 text-gray-700">Property: {item.propertyName || 'N/A'}</div>
                <div className="mb-2">
                   {item.video && (
                     <video src={`${API_URL}${item.video.path}`} className="w-full h-48 object-cover rounded" controls muted />
                   )}
                   {item.instagramLink && (
                     <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded">
                       <a href={item.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm break-all text-center px-4">
                         View Instagram Reel<br/>
                         ({item.instagramLink})
                       </a>
                     </div>
                   )}
                </div>
                <hr className="my-2" />
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="text-xs text-gray-400">{item.createdAt ? (new Date(item.createdAt)).toLocaleDateString() : new Date().toLocaleDateString()}</span>
                  <div className="flex gap-3 text-gray-500 text-lg">
                    <button title="Edit" className="hover:text-blue-600" onClick={() => {
                      setEditId(item.id);
                      setFormData({
                        title: item.title || "",
                        video: null,
                        propertyName: item.propertyName || "",
                        location: item.location || "",
                        builderName: item.builderName || "",
                        price2bhk: item.price2bhk || "",
                        price3bhk: item.price3bhk || "",
                        likes: item.likes || 0,
                        comments: item.comments || 0,
                        views: item.views || 0,
                        isActive: item.isActive !== false,
                        instagramLink: item.instagramLink || ""
                      });
                      setShowModal(true);
                    }}>✏️</button>
                    <button title="Delete" className="hover:text-red-500" onClick={() => handleDelete(item.id)}>🗑️</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 overflow-y-auto pt-20 pb-10">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg my-auto">
            <h2 className="text-xl font-semibold mb-4">{editId ? 'Edit Reel' : 'Add New Reel'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-sm font-medium">Reel Title</label>
                <input name="title" value={formData.title} onChange={handleInputChange} required className="border p-2 w-full rounded" />
              </div>
              <div>
                <label className="text-sm font-medium">Video File (MP4)</label>
                <input type="file" name="video" accept="video/mp4,video/x-m4v,video/*" onChange={handleInputChange} className="border p-2 w-full rounded" />
              </div>
              <div className="text-center text-sm font-bold text-gray-400">OR</div>
              <div>
                <label className="text-sm font-medium">Instagram Reel Link</label>
                <input name="instagramLink" value={formData.instagramLink} onChange={handleInputChange} className="border p-2 w-full rounded" placeholder="https://www.instagram.com/reel/..." />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="text-sm font-medium">Property Name</label>
                    <input name="propertyName" value={formData.propertyName} onChange={handleInputChange} className="border p-2 w-full rounded" />
                </div>
                <div>
                    <label className="text-sm font-medium">Location</label>
                    <input name="location" value={formData.location} onChange={handleInputChange} className="border p-2 w-full rounded" placeholder="e.g. Hinjewadi, Pune" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Builder Name</label>
                <input name="builderName" value={formData.builderName} onChange={handleInputChange} className="border p-2 w-full rounded" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="text-sm font-medium">2BHK Price</label>
                    <input name="price2bhk" value={formData.price2bhk} onChange={handleInputChange} className="border p-2 w-full rounded" placeholder="e.g. ₹85 Lacs+" />
                </div>
                <div>
                    <label className="text-sm font-medium">3BHK Price</label>
                    <input name="price3bhk" value={formData.price3bhk} onChange={handleInputChange} className="border p-2 w-full rounded" placeholder="e.g. ₹1.15 Cr+" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                    <label className="text-sm font-medium">Likes</label>
                    <input type="number" name="likes" value={formData.likes} onChange={handleInputChange} className="border p-2 w-full rounded" />
                </div>
                <div>
                    <label className="text-sm font-medium">Comments</label>
                    <input type="number" name="comments" value={formData.comments} onChange={handleInputChange} className="border p-2 w-full rounded" />
                </div>
                <div>
                    <label className="text-sm font-medium">Views</label>
                    <input type="number" name="views" value={formData.views} onChange={handleInputChange} className="border p-2 w-full rounded" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" name="isActive" checked={formData.isActive} onChange={e => setFormData(fd => ({ ...fd, isActive: e.target.checked }))} /> 
                  <label className="text-sm">Active (Show on website)</label>
              </div>
              <div className="flex gap-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-gray-200">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">Save Reel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

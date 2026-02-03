"use client";
import { useState } from "react";

export default function WebLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("api.propertydronerealty.com/api/webusers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setSuccess("Login successful!"); // In production, set token/cookie here
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Web User Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" disabled={loading} className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </form>
    </div>
  );
}


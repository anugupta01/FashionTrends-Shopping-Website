"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration persistence would call an API here; original was a stub.
    router.push("/login");
  };

  return (
    <div className="container py-5" style={{ maxWidth: 420 }}>
      <h2 className="mb-4">Registration</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={form.name}
                 onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={form.email}
                 onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={form.password}
                 onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <button type="button" className="btn btn-link w-100 mt-2"
                onClick={() => router.push("/login")}>
          Already have an account? Log in
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setMessage("Please fill in all fields.");
      return;
    }
    setMessage("Login successful!");
    setTimeout(() => navigate("/"), 700);
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Login to EstateX</h1>
        <p>Access your account and continue your property search.</p>

        <form onSubmit={submit} className="form">
          <label>Email<input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@example.com" /></label>
          <label>Password<input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="••••••••" /></label>
          <button className="btn btn-primary full-btn">Login</button>
        </form>

        {message && <div className="form-message">{message}</div>}
        <p className="auth-switch">Don't have an account? <Link to="/signup">Create one</Link></p>
      </div>
    </section>
  );
}
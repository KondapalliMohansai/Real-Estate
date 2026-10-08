import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Account created successfully!");
    setTimeout(() => navigate("/"), 700);
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <span className="eyebrow">JOIN ESTATEX</span>
        <h1>Create your account.</h1>
        <p>Save properties and connect with trusted real estate agents.</p>

        <form onSubmit={submit} className="form">
          <label>Full Name<input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your name" /></label>
          <label>Email<input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="you@example.com" /></label>
          <label>Password<input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Create a password" /></label>
          <label>Confirm Password<input type="password" value={form.confirm} onChange={(e) => setForm({...form, confirm: e.target.value})} placeholder="Confirm password" /></label>
          <button className="btn btn-primary full-btn">Create Account</button>
        </form>

        {message && <div className="form-message">{message}</div>}
        <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </section>
  );
}
import React from "react";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Let's find the right place for you.</h1>
          <p>Have a question about a property or need help with your search? Send us a message.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item"><MapPin /><div><strong>Visit us</strong><p>Hyderabad, Telangana, India</p></div></div>
            <div className="info-item"><Phone /><div><strong>Call us</strong><p>+91 98765 43210</p></div></div>
            <div className="info-item"><Mail /><div><strong>Email us</strong><p>hello@estatex.com</p></div></div>
          </div>

          <form className="contact-form form" onSubmit={submit}>
            <div className="form-row">
              <label>Name<input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} /></label>
              <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} /></label>
            </div>
            <label>Phone<input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} /></label>
            <label>Message<textarea required rows="6" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="How can we help?" /></label>
            <button className="btn btn-primary">Send Message</button>
            {sent && <div className="success-message">Thanks! Your message has been sent successfully.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
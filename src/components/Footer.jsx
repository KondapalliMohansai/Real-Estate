import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo footer-logo">Estate<span>X</span></Link>
          <p className="footer-text">
            Find beautiful homes, trusted agents and better real estate opportunities with EstateX.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/properties">Properties</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Hyderabad, Telangana</p>
          <p>+91 98765 43210</p>
          <p>hello@estatex.com</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 EstateX. All rights reserved.</span>
        <span>Made with React</span>
      </div>
    </footer>
  );
}
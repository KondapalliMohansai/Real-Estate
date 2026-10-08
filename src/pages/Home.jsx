import React from "react";
import { ArrowRight, Building2, KeyRound, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/data";

export default function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">YOUR NEXT ADDRESS STARTS HERE</span>
          <h1>Find a place you'll be proud to call <em>home.</em></h1>
          <p>
            Discover hand-picked properties, trusted professionals and homes
            designed around the way you want to live.
          </p>
          <SearchBar />
          <div className="hero-trust">
            <span><ShieldCheck size={17} /> Verified listings</span>
            <span><Users size={17} /> Trusted agents</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FEATURED PROPERTIES</span>
              <h2>Homes worth seeing.</h2>
            </div>
            <Link className="text-link" to="/properties">View all <ArrowRight size={17} /></Link>
          </div>

          <div className="property-grid">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div><Building2 /><strong>500+</strong><span>Verified Properties</span></div>
          <div><Users /><strong>120+</strong><span>Professional Agents</span></div>
          <div><KeyRound /><strong>2,000+</strong><span>Happy Customers</span></div>
          <div><ShieldCheck /><strong>100%</strong><span>Verified Listings</span></div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-grid">
          <div>
            <span className="eyebrow">WHY ESTATEX</span>
            <h2>A smarter way to find your next home.</h2>
            <p>
              We bring properties and people together through a simple,
              transparent and modern real estate experience.
            </p>
            <Link className="btn btn-primary" to="/properties">Explore Properties</Link>
          </div>
          <div className="why-card">
            <span>01</span>
            <h3>Verified Listings</h3>
            <p>Every property is carefully reviewed so you can search with confidence.</p>
            <span>02</span>
            <h3>Expert Guidance</h3>
            <p>Connect directly with experienced property professionals.</p>
            <span>03</span>
            <h3>Simple Experience</h3>
            <p>Search, compare and contact agents without unnecessary complexity.</p>
          </div>
        </div>
      </section>
    </>
  );
}
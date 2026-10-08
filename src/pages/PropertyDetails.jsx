import React from "react";
import { Bath, BedDouble, CalendarDays, Mail, MapPin, Maximize, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { properties, agents } from "../data/data";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h2>Property not found</h2>
          <Link className="btn btn-primary" to="/properties">Back to Properties</Link>
        </div>
      </section>
    );
  }

  const agent = agents.find((a) => a.id === property.agentId);

  return (
    <section className="page-section">
      <div className="container">
        <Link to="/properties" className="back-link">← Back to properties</Link>

        <div className="details-grid">
          <div>
            <img className="details-image" src={property.image} alt={property.title} />
            <div className="details-main">
              <div className="details-title-row">
                <div>
                  <span className="property-type static-type">{property.type}</span>
                  <h1>{property.title}</h1>
                  <p className="location"><MapPin size={17} /> {property.area}, {property.city}</p>
                </div>
                <strong className="details-price">₹{property.price.toFixed(2)} Cr</strong>
              </div>

              <div className="large-specs">
                <div><BedDouble /><strong>{property.beds}</strong><span>Bedrooms</span></div>
                <div><Bath /><strong>{property.baths}</strong><span>Bathrooms</span></div>
                <div><Maximize /><strong>{property.sqft}</strong><span>Sq Ft</span></div>
                <div><CalendarDays /><strong>{property.year}</strong><span>Built</span></div>
              </div>

              <h2>About this property</h2>
              <p className="details-description">{property.description}</p>
            </div>
          </div>

          <aside className="contact-agent">
            <h2>Interested in this property?</h2>
            <p>Contact the listing agent to arrange a viewing or request more information.</p>

            <div className="agent-mini">
              <img src={agent.image} alt={agent.name} />
              <div>
                <strong>{agent.name}</strong>
                <span>{agent.role}</span>
              </div>
            </div>

            <a className="contact-row" href={`tel:${agent.phone}`}><Phone size={18} /> {agent.phone}</a>
            <a className="contact-row" href={`mailto:${agent.email}`}><Mail size={18} /> {agent.email}</a>
            <Link className="btn btn-primary full-btn" to={`/agents/${agent.id}`}>
              View Agent Profile
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
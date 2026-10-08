import React from "react";
import { Mail, Phone, Star, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AgentCard from "../components/AgentCard";
import PropertyCard from "../components/PropertyCard";
import { agents, properties } from "../data/data";

export default function AgentDetails() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === Number(id));

  if (!agent) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h2>Agent not found</h2>
          <Link className="btn btn-primary" to="/agents">Back to Agents</Link>
        </div>
      </section>
    );
  }

  const agentProperties = properties.filter((p) => p.agentId === agent.id);

  return (
    <section className="page-section">
      <div className="container">
        <Link to="/agents" className="back-link"><ArrowLeft size={16} /> Back to agents</Link>

        <div className="agent-profile">
          <img src={agent.image} alt={agent.name} />
          <div>
            <div className="rating"><Star size={16} fill="currentColor" /> {agent.rating} rating</div>
            <h1>{agent.name}</h1>
            <p className="agent-role">{agent.role}</p>
            <p>{agent.about}</p>
            <div className="profile-stats">
              <div><strong>{agent.experience}</strong><span>Experience</span></div>
              <div><strong>{agent.properties}</strong><span>Properties</span></div>
              <div><strong>{agent.rating}</strong><span>Rating</span></div>
            </div>
            <div className="profile-actions">
              <a className="btn btn-primary" href={`tel:${agent.phone}`}><Phone size={17} /> Call Agent</a>
              <a className="btn btn-outline" href={`mailto:${agent.email}`}><Mail size={17} /> Email Agent</a>
            </div>
          </div>
        </div>

        <div className="section-heading agent-properties-heading">
          <div>
            <span className="eyebrow">LISTINGS</span>
            <h2>Properties by {agent.name.split(" ")[0]}</h2>
          </div>
        </div>

        <div className="property-grid">
          {agentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
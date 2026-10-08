import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Star } from "lucide-react";

export default function AgentCard({ agent }) {
  return (
    <article className="agent-card">
      <img src={agent.image} alt={agent.name} className="agent-image" />
      <div className="agent-content">
        <div className="rating"><Star size={15} fill="currentColor" /> {agent.rating}</div>
        <h3>{agent.name}</h3>
        <p className="agent-role">{agent.role}</p>
        <p className="agent-meta">{agent.properties} properties · {agent.experience}</p>

        <div className="agent-contact">
          <a href={`tel:${agent.phone}`}><Phone size={16} /> {agent.phone}</a>
          <a href={`mailto:${agent.email}`}><Mail size={16} /> {agent.email}</a>
        </div>

        <Link className="btn btn-outline full-btn" to={`/agents/${agent.id}`}>
          View Agent
        </Link>
      </div>
    </article>
  );
}
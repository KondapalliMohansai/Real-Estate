import React from "react";
import AgentCard from "../components/AgentCard";
import { agents } from "../data/data";

export default function Agents() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">OUR PROFESSIONALS</span>
          <h1>Meet our trusted agents.</h1>
          <p>Experienced professionals ready to help you make the right property decision.</p>
        </div>

        <div className="agents-grid">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { Bath, BedDouble, Heart, MapPin, Maximize } from "lucide-react";
import { useState } from "react";

export default function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="property-card">
      <div className="property-image-wrap">
        <img src={property.image} alt={property.title} className="property-image" />
        <span className="property-type">{property.type}</span>
        <button
          className={`heart-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Save property"
        >
          <Heart size={19} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="property-body">
        <div className="location">
          <MapPin size={15} />
          {property.area}, {property.city}
        </div>
        <h3>{property.title}</h3>
        <div className="property-specs">
          <span><BedDouble size={16} /> {property.beds} Beds</span>
          <span><Bath size={16} /> {property.baths} Baths</span>
          <span><Maximize size={16} /> {property.sqft} sqft</span>
        </div>
        <div className="property-footer">
          <strong>₹{property.price.toFixed(2)} Cr</strong>
          <Link to={`/properties/${property.id}`}>View Details →</Link>
        </div>
      </div>
    </article>
  );
}
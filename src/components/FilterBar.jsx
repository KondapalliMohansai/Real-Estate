import React from "react";
export default function FilterBar({
  search,
  setSearch,
  type,
  setType,
  city,
  setCity,
  maxPrice,
  setMaxPrice
}) {
  return (
    <div className="filter-bar">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search properties..."
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="House">House</option>
      </select>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="All">All Cities</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
        <option value="All">Any Budget</option>
        <option value="2">Under ₹2 Cr</option>
        <option value="3">Under ₹3 Cr</option>
      </select>
    </div>
  );
}
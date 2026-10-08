import React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/data";

export default function Properties() {
  const [params] = useSearchParams();
  const initialSearch = params.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [type, setType] = useState("All");
  const [city, setCity] = useState("All");
  const [maxPrice, setMaxPrice] = useState("All");

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return properties.filter((p) => {
      const matchesSearch =
        !query ||
        `${p.title} ${p.city} ${p.area} ${p.type}`.toLowerCase().includes(query);

      const matchesType = type === "All" || p.type === type;
      const matchesCity = city === "All" || p.city === city;
      const matchesPrice = maxPrice === "All" || p.price <= Number(maxPrice);

      return matchesSearch && matchesType && matchesCity && matchesPrice;
    });
  }, [search, type, city, maxPrice]);

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">PROPERTY LISTINGS</span>
          <h1>Find your perfect property.</h1>
          <p>Explore our collection of verified homes, apartments and villas.</p>
        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
          city={city}
          setCity={setCity}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        <div className="results-top">
          <strong>{filtered.length} Properties Found</strong>
          <button
            className="clear-btn"
            onClick={() => {
              setSearch("");
              setType("All");
              setCity("All");
              setMaxPrice("All");
            }}
          >
            Clear Filters
          </button>
        </div>

        {filtered.length ? (
          <div className="property-grid">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No properties found</h2>
            <p>Try changing your search or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
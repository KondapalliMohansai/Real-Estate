import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    navigate(`/properties${value.trim() ? `?search=${encodeURIComponent(value.trim())}` : ""}`);
  }

  return (
    <form className="hero-search" onSubmit={submit}>
      <Search size={21} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search city, area or property..."
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
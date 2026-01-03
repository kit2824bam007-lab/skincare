import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/oily?search=${search}`);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 30px", background: "#fdecef" }}>
      <h2 style={{ cursor: "pointer", color: "#c2185b" }} onClick={() => navigate("/")}>
        Skinfizz
      </h2>

      <input
        placeholder="Search skincare..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", borderRadius: "10px", border: "1px solid #ccc" }}
      />

      <button
        style={{ background: "#c2185b", color: "white", border: "none", padding: "8px 16px", borderRadius: "15px", cursor: "pointer" }}
        onClick={handleSearch}
      >
        Search
      </button>

      <button
        style={{ marginLeft: "auto", background: "#880e4f", color: "white", border: "none", padding: "8px 16px", borderRadius: "15px", cursor: "pointer" }}
        onClick={() => navigate("/cart")}
      >
        🛒 Cart
      </button>
    </div>
  );
}

export default Navbar;

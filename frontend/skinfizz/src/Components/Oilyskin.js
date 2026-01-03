import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Oilyskin() {
  const [products, setProducts] = useState([]);

  // 🔍 Read search query from URL
  const location = useLocation();
  const searchQuery =
    new URLSearchParams(location.search).get("search") || "";

  const addToCart = async (product) => {
  try {
    await axios.post("http://localhost:5000/api/cart/add", {
      productId: product._id,
      productName: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    alert("Added to cart ✅");
  } catch (err) {
    alert("Failed to add to cart ❌");
  }
};

  // 📦 Fetch oily skin products
  useEffect(() => {
    fetch("http://localhost:5000/products/oily")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ✅ Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#c2185b" }}>
        Oily Skin Products
      </h2>

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .card {
          background-color: #fdecef;
          border-radius: 16px;
          padding: 15px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(194,24,91,0.25);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
        }

        .card h4 {
          margin: 10px 0 5px;
          color: #880e4f;
        }

        .card p {
          font-size: 14px;
          color: #555;
        }

        .price {
          font-weight: bold;
          margin: 8px 0;
        }

        .btn {
          background-color: #c2185b;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #ad1457;
        }
      `}</style>

      {/* ✅ Show filtered products */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="price">₹{product.price}</div>
            <button className="btn" onClick={() => addToCart(product)}> Add to Cart </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Oilyskin;


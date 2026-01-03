import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
const navigate = useNavigate();
const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/search?query=${encodeURIComponent(search)}`);
  } else {
    alert("Please enter a product to search");
  }
};

  return (
    <div className="home">
      {/* CSS INSIDE SAME FILE */}
      <style>{`
        .home {
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background-image: url("https://i.pinimg.com/736x/4f/85/5c/4f855ce743830c969817567335576990.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        /* Navbar */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(243,243,243,0.9);
          padding: 10px 30px;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-left img {
          width: 50px;
          height: 50px;
        }

        .nav-left h1 {
          margin: 0;
          font-size: 20px;
          color: #175e4f;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-right input {
          padding: 6px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .nav-right button {
          padding: 6px 12px;
          border: none;
          background-color: #48c9b0;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }

        .cart-icon {
          font-size: 22px;
          cursor: pointer;
        }

        /* Title */
        .header-title {
          text-align: center;
          font-size: 36px;
          margin: 30px 0;
          color: #175e4f;
        }

        /* Skin Types */
        .skin-types {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
          padding-bottom: 40px;
        }

        .skin-box {
          width: 200px;
          padding: 15px;
          background-color: rgba(243,243,243,0.95);
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: 0.3s;
        }

        .skin-box img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          border-radius: 10px;
        }

        .skin-box p {
          margin-top: 10px;
          font-weight: bold;
          color: #69c2af;
        }

        .skin-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        }
      `}</style>

      {/* NAVBAR */}
      <nav>
        <div className="nav-left">
          <img
            src="https://i.pinimg.com/736x/16/e1/18/16e118adfaaa085fc41b934f9a4d341a.jpg"
            alt="Skin Fizz Logo"
          />
          <h1>Skin Fizz</h1>
        </div>

        <div className="nav-right">
          <input type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <span>PRODUCTS</span>
          <span>CONTACT</span>
          <span className="cart-icon" onClick={() => navigate("/cart")}>
            🛒
          </span>

        </div>
      </nav>

      {/* TITLE */}
      <div className="header-title">Choose Your Skin Type</div>

      {/* SKIN TYPE BOXES */}
      
      <div className="skin-types">
        <div className="skin-box" onClick={() => navigate("/normal")}>
          <img src="https://i.pinimg.com/736x/f9/17/15/f9171517b387be545957a213a0413c60.jpg" alt="Normal Skin" />
          <p>Normal Skin</p>
        </div>

        <div className="skin-box" onClick={() => navigate("/oily")}>
          <img src="https://i.pinimg.com/736x/c3/47/86/c3478658320e80e805f76a27a670d206.jpg" alt="Oily Skin" />
          <p>Oily Skin</p>
        </div>

        <div className="skin-box" onClick={() => navigate("/dry")}>
          <img src="https://i.pinimg.com/736x/c0/aa/34/c0aa348810b0849898263bdd5ef961c0.jpg" alt="Dry Skin" />
          <p>Dry Skin</p>
        </div>

        <div className="skin-box" onClick={() => navigate("/combination")}>
          <img src="https://i.pinimg.com/736x/83/48/62/8348621111dcd333ebdb9f25b2043f0a.jpg" alt="Combination Skin" />
          <p>Combination Skin</p>
        </div>
      </div>
    </div>
                    
  );
}

export default Home;
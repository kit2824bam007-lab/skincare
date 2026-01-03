import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        body { overflow: hidden; }

        .bg-video-wrapper {
          position: fixed;
          inset: 0;
          z-index: -3;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,240,235,0.7);
          z-index: -2;
        }

        .login-card {
          width: 380px;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .logo {
          font-size: 36px;
          color: #8b5e5e;
          margin-bottom: 10px;
        }

        .tagline {
          font-size: 14px;
          margin-bottom: 30px;
          color: #9c6b6b;
        }

        .input-group {
          position: relative;
          margin-bottom: 22px;
        }

        .input-group input {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          border: none;
          outline: none;
        }

        .input-group label {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          transition: 0.3s;
          color: #b07b7b;
        }

        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 11px;
          background: white;
          padding: 0 6px;
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #c48b8b, #e6baba);
          color: white;
          cursor: pointer;
        }
      `}</style>

      <div className="bg-video-wrapper">
        <video autoPlay muted loop>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="overlay"></div>

      <div className="login-card">
        <h1 className="logo">Skinfizz</h1>
        <p className="tagline">Soft skin. Soft moments ✨</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              required
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

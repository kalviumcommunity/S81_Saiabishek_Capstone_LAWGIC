import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (res.data.success) {
        alert("Login successful");
        navigate("/home");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h1>LAWGIC</h1>
      <h2>Welcome to Lawgic</h2>
      <p className="slogan">Legal Help Made Easy</p>

      <form className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        <p>please login to continue.</p>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forgot-password">
          <Link to="/forgot-password">forgot password?</Link>
        </div>

        <button type="submit">Login</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    </div>
  );
};

export default Login;

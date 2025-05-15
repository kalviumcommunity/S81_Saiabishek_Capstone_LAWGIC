import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (res.data.success) {
        alert("Login successful");
        navigate("/home");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError("Unable to login. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>LAWGIC</h1>
      <h2>Welcome to Lawgic</h2>
      <p className="slogan">Legal Help Made Easy</p>

      <form className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        <p>Please login to continue.</p>

        {error && <p className="error-message">{error}</p>}

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
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    </div>
  );
};

export default Login;

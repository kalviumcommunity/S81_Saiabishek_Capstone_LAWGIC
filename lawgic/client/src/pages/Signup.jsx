import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Validation checks
    if (!formData.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true); // Set loading state
      const res = await axios.post("http://localhost:5000/api/signup", formData);

      if (res.data.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        setError("Signup failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong during signup.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="logo">
        LAW<span>GIC</span>
      </div>
      <h2>Signup</h2>
      <p>Please Signup to continue.</p>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-box" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <p className="login-link">
          Already have an account? Login to continue <br />
          <span onClick={() => navigate("/login")} className="link-text">
            Login
          </span>
        </p>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Processing..." : "➜"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

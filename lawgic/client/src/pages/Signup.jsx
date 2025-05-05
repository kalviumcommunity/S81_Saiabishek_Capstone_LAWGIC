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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);
      if (res.data.success) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Signup failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during signup.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="logo">LAW<span>GIC</span></div>
      <h2>Signup</h2>
      <p>please Signup to continue.</p>
      <form className="signup-box" onSubmit={handleSignup}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        
        <p className="login-link">
          Already have an account? Login to continue <br />
          <span onClick={() => navigate("/login")} className="link-text">Login</span>
        </p>

        <button type="submit" className="submit-btn">➜</button>
      </form>
    </div>
  );
};

export default Signup;

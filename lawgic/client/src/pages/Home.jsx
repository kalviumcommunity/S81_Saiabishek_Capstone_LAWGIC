import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Lawgic</h1>
        <p>Your trusted platform to find the right legal help</p>
        <div className="hero-buttons">
          <Link to="/signup">
            <button className="primary">Get Started</button>
          </Link>
          <a href="#how-it-works">
            <button className="secondary">How it Works</button>
          </a>
        </div>
      </section>

      <section className="legal-help">
        <h2>Need Legal Help?</h2>
        <p>Post your legal issue and connect with the right lawyer to get the assistance you need.</p>
        <Link to="/post-issue" className="post-link">
          Post a Legal Issue
        </Link>
      </section>

      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>📝 Post Your Issue</h3>
            <p>Share your legal problem and provide relevant details securely.</p>
          </div>
          <div className="step">
            <h3>📄 Get Matched</h3>
            <p>We suggest lawyers who specialize in your type of case.</p>
          </div>
          <div className="step">
            <h3>🤝 Connect & Resolve</h3>
            <p>Reach out to lawyers, discuss solutions, and resolve your issue.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

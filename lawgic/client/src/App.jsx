// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowseLawyers from "./pages/BrowseLawyers";
import ForgotPassword from "./pages/Forgotpassword";
import PostIssue from "./pages/PostIssue";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse-lawyers" element={<BrowseLawyers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/post-issue" element={<PostIssue />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white hover:text-gray-300">
          Lawgic
        </Link>

        <div className="space-x-6 text-sm hidden md:flex">
          <Link to="/search" className="hover:text-gray-300">Find Lawyers</Link>
          <Link to="/post-problem" className="hover:text-gray-300">Post a Problem</Link>
          <Link to="/profile" className="hover:text-gray-300">My Profile</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

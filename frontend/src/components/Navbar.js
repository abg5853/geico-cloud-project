import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">GEICO</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        <Link to="/claims" className="hover:text-yellow-300 transition">Claims</Link>
        <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
        <Link to="/signup" className="hover:text-yellow-300 transition">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

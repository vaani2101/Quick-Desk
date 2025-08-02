import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="shadow-xl bg-gradient-to-r from-sky-500 to-indigo-600">
      <nav className="container relative flex items-center justify-between px-6 py-4 mx-auto">
        
        {/* Logo on the Left */}
        <div className="text-3xl font-extrabold tracking-wide text-white">
          <span className="font-sans text-yellow-300">Quick</span>
          <span className="font-serif text-white">Desk</span>
        </div>

        {/* Navigation in Center (Absolute Positioned) */}
        <div className="absolute flex gap-8 transform -translate-x-1/2 left-1/2 animate-fade-in">
          <Link to="/" className="text-lg font-semibold text-white transition duration-300 hover:text-yellow-300">Dashboard</Link>
          <Link to="/new-ticket" className="text-lg font-semibold text-white transition duration-300 hover:text-yellow-300">New Ticket</Link>
          <Link to="/admin-panel" className="text-lg font-semibold text-white transition duration-300 hover:text-yellow-300">Admin Panel</Link>
          <Link to="/login" className="text-lg font-semibold text-white transition duration-300 hover:text-yellow-300">Login</Link>
          <Link to="/register" className="text-lg font-semibold text-white transition duration-300 hover:text-yellow-300">Sign Up</Link>
        </div>

        {/* Language Selector on the Right */}
        <div className="flex items-center gap-2">
          <i className="text-xl text-white ri-global-line"></i>
          <select className="px-2 py-1 text-black bg-white rounded-md shadow-sm focus:outline-none">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </nav>

      {/* Animation */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-yellow-200 transition">
          🚀 QuickDesk
        </Link>
        <div className="flex gap-6 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-yellow-200 transition">Dashboard</Link>
          <Link to="/newticket" className="hover:text-yellow-200 transition">New Ticket</Link>
          <Link to="/adminpanel" className="hover:text-yellow-200 transition">Admin Panel</Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 px-3 py-1 rounded-full hover:bg-yellow-100 transition text-sm shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
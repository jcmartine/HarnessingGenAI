import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-black">
          BOOK_A_TAXI
        </Link>
        <ul className="flex space-x-6 font-semibold text-gray-900">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          <li>
            <Link to="/book" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition shadow-lg">
              Book a Ride
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-10">
      <h1 className="text-6xl font-black mb-4">RIDE <span className="text-yellow-500">SMART.</span></h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">The fastest, safest, and most reliable taxi service in the city. Book your ride in seconds.</p>
      <Link to="/book" className="bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition">
        Book Now
      </Link>
    </div>
  );
}
export default Home;
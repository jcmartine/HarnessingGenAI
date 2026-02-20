import React from 'react';

function Services() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Standard Taxi</h3>
          <p>Reliable city transport.</p>
        </div>
        <div className="p-6 border rounded shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Airport Shuttle</h3>
          <p>Flat rates to all terminals.</p>
        </div>
        <div className="p-6 border rounded shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Premium Black Car</h3>
          <p>Luxury travel for business.</p>
        </div>
      </div>
    </div>
  );
}
export default Services;
import React, { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({ name: '', pickup: '', dropoff: '', service: 'Standard' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validation Rules
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.pickup) newErrors.pickup = "Pickup location is required";
    if (!formData.dropoff) newErrors.dropoff = "Drop-off location is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess('');
    } else {
      setErrors({});
      setSuccess(`Success! Your ${formData.service} ride is booked.`);
      setFormData({ name: '', pickup: '', dropoff: '', service: 'Standard' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4 border-yellow-400">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Your Ride</h2>
        
        {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center font-bold">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1">Pickup Location</label>
            <input 
              type="text" 
              name="pickup" 
              value={formData.pickup} 
              onChange={handleChange} 
              className={`w-full p-2 border rounded ${errors.pickup ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.pickup && <p className="text-red-500 text-sm mt-1">{errors.pickup}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1">Drop-off Location</label>
            <input 
              type="text" 
              name="dropoff" 
              value={formData.dropoff} 
              onChange={handleChange} 
              className={`w-full p-2 border rounded ${errors.dropoff ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.dropoff && <p className="text-red-500 text-sm mt-1">{errors.dropoff}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1">Service Type</label>
            <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
              <option>Standard</option>
              <option>Premium</option>
              <option>Van (6+ Passengers)</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition duration-300 mt-4">
            CONFIRM BOOKING
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
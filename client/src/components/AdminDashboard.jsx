import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    setError('Unauthorized: No token found');
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Unauthorized or invalid token');
    }

    const data = await response.json();
    setBookings(data);
    setLoading(false);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    setError('Failed to load bookings');
    setLoading(false);
  }
};

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-100 to-blue-50 px-2 py-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Admin Dashboard | ANIL DJ & EVENTS</title>
      </Helmet>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-6 sm:mb-8 border-b-4 border-blue-300 pb-2">
        📋 Admin Dashboard
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border-2 border-black p-4 sm:p-6">
        {loading ? (
          <p className="text-center text-blue-600 font-medium">Loading bookings...</p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-black rounded-md text-sm sm:text-base">
              <thead className="bg-blue-100 text-blue-800 font-semibold border-b border-black">
                <tr>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">Name</th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">Phone</th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap min-w-[80px]">Date</th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">Location</th>
                  <th className="p-2 sm:p-3 border-r border-black whitespace-nowrap">Event Type</th>
                  <th className="p-2 sm:p-3 whitespace-nowrap">Requests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="border-t border-black hover:bg-blue-50 transition">
                    <td className="p-2 sm:p-3 border-r border-black">{booking.name}</td>
                    <td className="p-2 sm:p-3 border-r border-black">{booking.phone}</td>
                    <td className="p-2 sm:p-3 border-r border-black whitespace-nowrap min-w-[90px]">{booking.date}</td>
                    <td className="p-2 sm:p-3 border-r border-black">{booking.location}</td>
                    <td className="p-2 sm:p-3 border-r border-black">{booking.eventType}</td>
                    <td className="p-2 sm:p-3">{booking.requests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
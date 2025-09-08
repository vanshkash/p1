import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`);
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Admin Dashboard | ANIL DJ & EVENTS</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">📋 Admin Dashboard</h1>

      {loading ? (
        <p className="text-center text-blue-600">Loading bookings...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Date</th>
                <th className="p-2">Location</th>
                <th className="p-2">Event Type</th>
                <th className="p-2">Requests</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="p-2">{booking.name}</td>
                  <td className="p-2">{booking.phone}</td>
                  <td className="p-2">{booking.date}</td>
                  <td className="p-2">{booking.location}</td>
                  <td className="p-2">{booking.eventType}</td>
                  <td className="p-2">{booking.requests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
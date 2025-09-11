import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const API = import.meta.env.VITE_API_URL
  const token = localStorage.getItem('accessToken')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  // FETCH ALL BOOKINGS
  const fetchBookings = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/bookings`, { headers })
      if (!res.ok) throw new Error('Failed to fetch bookings')
      const data = await res.json()
      setBookings(data)
      setError('')
    } catch (err) {
      console.error(err)
      setError(err.message)
      if (err.message.includes('Unauthorized')) {
        localStorage.removeItem('accessToken')
        navigate('/admin/login', {
          state: { message: 'Session expired—please log in.' },
          replace: true,
        })
      }
    } finally {
      setLoading(false)
    }
  }

  // CREATE
  const addBooking = async newBooking => {
    try {
      const res = await fetch(`${API}/api/bookings`, {
        method: 'POST',
        headers,
        body: JSON.stringify(newBooking),
      })
      if (!res.ok) throw new Error('Failed to create booking')
      const saved = await res.json()
      setBookings(prev => [...prev, saved])
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  // UPDATE (e.g., edit requests or status)
  const updateBooking = async (id, updates) => {
    try {
      const res = await fetch(`${API}/api/bookings/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updates),
      })
      if (!res.ok) throw new Error('Failed to update booking')
      const updated = await res.json()
      setBookings(prev =>
        prev.map(b => (b._id === id ? updated : b))
      )
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  // DELETE
  const deleteBooking = async id => {
    try {
      const res = await fetch(`${API}/api/bookings/${id}`, {
        method: 'DELETE',
        headers,
      })
      if (!res.ok) throw new Error('Failed to delete booking')
      setBookings(prev => prev.filter(b => b._id !== id))
      setError('')
    } catch (err) {
      setError(err.message)
    }
  }

  // on mount: check auth & load
  useEffect(() => {
    if (!token) {
      setError('Unauthorized: Please log in')
      setLoading(false)
      return
    }
    fetchBookings()
  }, [])

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Helmet>
          <title>Admin Authentication Required | ANIL DJ & EVENTS</title>
        </Helmet>
        <h2 className="text-2xl font-bold mb-3 text-blue-700 md:text-4xl">
          🔐 Admin Authentication Required
        </h2>
        <p className="mb-6 text-gray-600">{error}</p>
        <button
          onClick={() => navigate('/admin/login')}
          className="px-6 py-3 text-xl bg-blue-600 text-white rounded hover:bg-blue-700 transition hover:scale-105"
        >
          Go to Login Page
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-100 to-blue-50 px-4 py-6">
      <Helmet>
        <title>Admin Dashboard | ANIL DJ & EVENTS</title>
      </Helmet>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-6 border-b-4 border-blue-300 pb-2">
        📋 Admin Dashboard
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        {/* ADD BOOKING FORM */}
        <form
          onSubmit={e => {
            e.preventDefault()
            const form = e.target
            const newBooking = {
              name: form.name.value,
              phone: form.phone.value,
              date: form.date.value,
              location: form.location.value,
              eventType: form.eventType.value,
              requests: form.requests.value,
            }
            addBooking(newBooking)
            form.reset()
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
        >
          <input name="name" placeholder="Name" required className="input" />
          <input name="phone" placeholder="Phone" required className="input" />
          <input name="date" type="date" required className="input" />
          <input name="location" placeholder="Location" required className="input" />
          <input name="eventType" placeholder="Event Type" required className="input" />
          <input name="requests" placeholder="Requests" className="input" />
          <button
            type="submit"
            className="col-span-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Booking
          </button>
        </form>

        {/* STATUS & ERRORS */}
        {loading && <p className="text-center text-blue-600">Loading bookings…</p>}
        {error && !loading && (
          <p className="text-center text-red-600 font-semibold mb-4">{error}</p>
        )}
        {!loading && bookings.length === 0 && (
          <p className="text-center text-gray-600">No bookings found.</p>
        )}

        {/* BOOKINGS TABLE */}
        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-black rounded text-sm">
              <thead className="bg-blue-100 text-blue-800 font-semibold border-b border-black">
                <tr>
                  <th className="p-2 border-r">Name</th>
                  <th className="p-2 border-r">Phone</th>
                  <th className="p-2 border-r">Date</th>
                  <th className="p-2 border-r">Location</th>
                  <th className="p-2 border-r">Event Type</th>
                  <th className="p-2 border-r">Requests</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(booking => (
                  <tr
                    key={booking._id}
                    className="border-t hover:bg-blue-50 transition"
                  >
                    <td className="p-2 border-r">{booking.name}</td>
                    <td className="p-2 border-r">{booking.phone}</td>
                    <td className="p-2 border-r whitespace-nowrap">
                      {new Date(booking.date).toLocaleDateString()}
                    </td>
                    <td className="p-2 border-r">{booking.location}</td>
                    <td className="p-2 border-r">{booking.eventType}</td>
                    <td className="p-2 border-r">{booking.requests}</td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => {
                          const updatedText = prompt(
                            'Edit requests',
                            booking.requests
                          )
                          if (updatedText !== null) {
                            updateBooking(booking._id, { requests: updatedText })
                          }
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteBooking(booking._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

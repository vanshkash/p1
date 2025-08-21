import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function BookingForm() {
  const [success, setSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result.message);

      setSuccess(true);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <div className="relative max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      {/* 🧠 Helmet for SEO */}
      <Helmet>
        <title>Book Your Event | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Book ANIL DJ & EVENTS for your wedding, reception, birthday, or corporate celebration. Fill out our quick form to get started."
        />
        <meta name="keywords" content="DJ booking, Indian wedding DJ, baraat DJ, ANIL DJ & EVENTS, event form" />
        <meta name="author" content="Vansh | ANIL DJ & EVENTS" />
        <meta property="og:title" content="Book Your Event | ANIL DJ & EVENTS" />
        <meta
          property="og:description"
          content="Submit your event details and book ANIL DJ & EVENTS for an unforgettable celebration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anildjevents.netlify.app/contact" />
      </Helmet>

      {/* ✅ Centered Toast Message */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 
                        max-w-xs w-full text-center whitespace-nowrap overflow-hidden text-ellipsis animate-fade-in">
          ✅ Booking submitted successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold bg-blue-200 text-center">ANIL DJ & EVENTS</h1>
      <h2 className="text-xl font-bold text-center">DJ Booking Form</h2>

      {success ? (
        <div className="text-center mt-6 space-y-2">
          <p className="text-blue-700 font-medium text-base">
            🎉 Thank you for your booking! We’ll be in touch soon to finalize the details.
          </p>
          <p className="text-green-600 font-semibold text-lg">✅ Booking Submitted!</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium">Phone</label>
              <input
                {...register('phone', {
                  required: 'Phone is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter a valid 10-digit number',
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* Event Date */}
            <div>
              <label className="block font-medium">Event Date</label>
              <input
                type="date"
                {...register('date', { required: 'Event date is required' })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium">Location</label>
              <input
                {...register('location', { required: 'Location is required' })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>

            {/* Event Type */}
            <div>
              <label className="block font-medium">Event Type</label>
              <select
                {...register('eventType')}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select</option>
                <option value="Wedding Baraat">Wedding Baraat</option>
                <option value="Reception">Reception</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate</option>
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block font-medium">Special Requests</label>
              <textarea
                {...register('requests')}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={3}
              />
            </div>

            {/* Submit */}
            <div className="space-y-2">
              {isSubmitting && Object.keys(errors).length === 0 && (
                <div className="text-yellow-600 text-center font-medium text-base animate-pulse">
                  ⏳ Submitting your booking... please wait.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
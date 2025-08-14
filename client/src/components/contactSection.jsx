// ContactSection.jsx
// import BookingForm from './BookingForm';
import BookingForm from './contactform'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-16 px-6 md:px-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact & Booking</h2>
        <p className="text-lg text-gray-700">
          Ready to bring the beats to your event? Fill out the form below and we’ll get in touch!
        </p>
      </div>

      <BookingForm />
    </section>
  );
}
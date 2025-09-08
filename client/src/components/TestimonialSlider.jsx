import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Rajaji Haveli Restaurant",
    quote: "ANIL DJ brought vibrant energy to our outdoor celebration. Guests loved the music and setup!",
    location: "Hapur",
  },
  {
    name: "Amar Ujala",
    quote: "ANIL DJ energized our media event with flawless sound and crowd engagement. A true professional!",
    location: "Hapur",
  },
  {
    name: "Ajay & Priya",
    quote: "ANIL DJ made our baraat unforgettable! The energy was electric.",
    location: "Mumbai",
  },
  {
    name: "Om Saaj Band",
    quote: `⭐️⭐️⭐️⭐️⭐️
Om Saaj Band + ANIL DJ & EVENTS = Baraat magic! The live dhol, brass, and mobile DJ setup kept the energy sky-high. Guests were dancing nonstop, and the fusion of tradition with modern beats was unforgettable. Highly recommend for a baraat that truly stands out!`,
    location: "  — Groom, Ghaziabad Wedding",
  },
  {
    name: "Amit S.",
    quote: "Professional setup, amazing sound, and great vibes. Highly recommended!",
    location: "Ghaziabad",
  },
  {
    name: "Neha & Karan",
    quote: "The DJ on Wheels concept was a hit—everyone was dancing in the streets!",
    location: "Noida",
  },
  {
    name: "Mehul T.",
    quote: "Booked ANIL DJ for my sister’s wedding. Seamless coordination and top-notch sound!",
    location: "Meerut",
  },
  {
    name: "Ritika & Sahil",
    quote: "From dhol beats to Bollywood remixes, the baraat was pure magic. Thank you!",
    location: "Hapur",
  },
  {
    name: "Corporate Team – Zentech",
    quote: "Our annual party was a blast thanks to ANIL DJ. Professional, punctual, and energetic!",
    location: "Greater Noida",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />
                <div className="relative z-10">
                  <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg">
                    Client Reviews
                  </h2>
    <div id="testimonials" className="relative max-w-3xl mx-auto px-4 py-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 rounded-3xl blur-sm z-0" />

      {/* Testimonial Card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-3xl p-10 transition-all duration-700 ease-in-out">
        <div className="flex items-center gap-2 text-indigo-500 text-4xl mb-4">
          <FaQuoteLeft />
          <span className="text-indigo-700 font-bold text-2xl tracking-wide glow">
            What Clients Say
          </span>
        </div>
        <p className="text-xl text-gray-800 italic leading-relaxed transition-opacity duration-700">
          “{testimonials[current].quote}”
        </p>
        <div className="mt-6 text-right">
          <h4 className="text-pink-600 font-bold text-lg drop-shadow-md">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gray-500">{testimonials[current].location}</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-3 z-10 relative">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              current === index ? 'bg-pink-500 scale-125 shadow-lg' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
     </div>
              </section>
  );
}
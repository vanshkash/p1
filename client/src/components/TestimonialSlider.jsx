import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajaji Haveli Restaurant",
    quote:
      "ANIL DJ brought vibrant energy to our outdoor celebration. Guests loved the music and setup!",
    location: "Hapur",
  },
  {
    name: "Amar Ujala",
    quote:
      "ANIL DJ energized our media event with flawless sound and crowd engagement. A true professional!",
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
    location: "— Groom, Ghaziabad Wedding",
  },
  {
    name: "Amit S.",
    quote:
      "Professional setup, amazing sound, and great vibes. Highly recommended!",
    location: "Ghaziabad",
  },
  {
    name: "Neha & Karan",
    quote:
      "The DJ on Wheels concept was a hit—everyone was dancing in the streets!",
    location: "Noida",
  },
  {
    name: "Mehul T.",
    quote:
      "Booked ANIL DJ for my sister’s wedding. Seamless coordination and top-notch sound!",
    location: "Meerut",
  },
  {
    name: "Ritika & Sahil",
    quote:
      "From dhol beats to Bollywood remixes, the baraat was pure magic. Thank you!",
    location: "Hapur",
  },
  {
    name: "Corporate Team – Zentech",
    quote:
      "Our annual party was a blast thanks to ANIL DJ. Professional, punctual, and energetic!",
    location: "Greater Noida",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />

      <div className="relative z-10">
        {/* Heading Animation */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Client Reviews
        </motion.h2>

        <div id="testimonials" className="relative max-w-3xl mx-auto px-4 py-16">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 rounded-3xl blur-sm z-0" />

          {/* Testimonial Card with Animation + Hover Effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10 bg-white shadow-2xl rounded-3xl p-10 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-indigo-500 text-4xl mb-4">
                <FaQuoteLeft />
                <span className="text-indigo-700 font-bold text-2xl tracking-wide">
                  What Clients Say
                </span>
              </div>
              <p className="text-xl text-gray-800 italic leading-relaxed">
                “{testimonials[current].quote}”
              </p>
              <div className="mt-6 text-right">
                <h4 className="text-pink-600 font-bold text-lg drop-shadow-md">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots with Scale Animation */}
          <motion.div
            className="flex justify-center mt-8 space-x-3 z-10 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-pink-500 scale-125 shadow-lg"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

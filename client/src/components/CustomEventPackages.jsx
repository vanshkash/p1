import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CustomEventPackages() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Custom Event Packages | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="All-in-one entertainment bundles for Indian weddings and events. DJ, dhol, LED, photography, and more—customized to your vibe."
        />
        <meta
          property="og:title"
          content="Custom Event Packages | ANIL DJ & EVENTS"
        />
        {/* <meta
          property="og:image"
          content="https://res.cloudinary.com/your-cloud/image/upload/v1/custom-packages.jpg"
        /> */}
        <meta
          property="og:url"
          content="https://anildjevents.netlify.app/services/custom-event-packages"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-purple-700 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Custom Event Packages
            </h1>
            <p className="text-lg md:text-xl font-light">
              All-in-one entertainment bundles for unforgettable celebrations.
            </p>
            <a
              href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20my%20upcoming%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Your Package
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/custom_event.jpg"
                alt="Custom Event Packages"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          What’s Inside Your Package
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Live DJ & Sound System",
              desc: "Seamless audio setup for corporate mixers, college fests, and music concerts.",
              color: "bg-purple-100",
            },
            {
              title: "LED Screens & Visuals",
              desc: "High-res displays, sponsor loops, and branded content for any stage.",
              color: "bg-pink-100",
            },
            {
              title: "Dynamic Lighting & Ambiance",
              desc: "Uplighting, moving heads, and wash effects that match your theme.",
              color: "bg-yellow-100",
            },
            {
              title: "Special Effects & Confetti",
              desc: "Fog, haze, confetti blasts, and pyro to elevate key moments.",
              color: "bg-indigo-100",
            },
            {
              title: "Photography & Live Streaming",
              desc: "Multi-camera shoots and real-time broadcast for hybrid experiences.",
              color: "bg-rose-100",
            },
            {
              title: "Event Hosting & Coordination",
              desc: "A professional host guides the event and engages guests, while our team handles timing, vendors, and last-minute details.",
              color: "bg-teal-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
          Visual Vibes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["event1.jpg", "event2.jpg", "event3.jpg"].map(
            (img, i) => (
              <img
                key={i}
                src={`/images/${img}`}
                alt={`Event ${i + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
              />
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Client Love ❤️
        </h2>
        <div className="max-w-3xl mx-auto text-gray-800 italic text-lg">
          “We booked the full package for our wedding and it was electric! The
          baraat was unforgettable, the lighting was stunning, and the DJ kept
          the crowd dancing all night.”
          <br />
          <span className="block mt-4 font-semibold text-purple-600">
            — Priya & Karan, Delhi
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-white  text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Dream Package
        </h2>
        <p className="mb-6 text-lg">
          Tell us your vibe, your vision, and your venue—we’ll handle the rest.
        </p>
        <a
          href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20my%20upcoming%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book Now
        </a>
        <div className="mt-6 text-sm opacity-80">
          Trusted by many people across India
        </div>
        <div className="mt-6 mb-0">
          <Link to="/services" className="text-white hover:underline">
            ← Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
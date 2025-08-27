import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DjSetup() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Professional DJ Setup | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Professional DJ setups for weddings, concerts, and college fests. High-wattage sound, synced lighting, and nonstop energy."
        />
        <meta name="keywords" content="DJ setup, mobile DJ truck, Indian wedding DJ, baraat DJ, dhol and sound system, college fest DJ, corporate event DJ, concert DJ gear, ANIL DJ & EVENTS, professional DJ rig, LED lights and sound, DJ booth with visuals" />
        <meta name="vansh" content="ANIL DJ & EVENTS" />
        <meta property="og:title" content="DJ Setup | ANIL DJ & EVENTS" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-purple-700 to-pink-600 -skew-y-12 transform origin-top-left" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Professional DJ Setup
            </h1>
            <p className="text-lg md:text-xl font-light">
              High-powered sound, synced lighting, and nonstop beats for every kind of celebration.
            </p>
            <a
              href="https://wa.me/918923426667?text=Hey%20Shivam%21%20I%E2%80%99m%20interested%20in%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20Professional%20DJ%20Setup.%20Could%20you%20share%20the%20pricing%20and%20available%20options%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Your DJ
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/djsetup.jpg"
                alt="DJ Setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          What’s Inside Your DJ Setup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Pro DJ Console & Mixer",
              desc: "Industry-standard gear for flawless transitions and beat drops.",
              color: "bg-purple-100",
            },
            {
              title: "Surround Sound System",
              desc: "High-wattage speakers for immersive audio across any venue.",
              color: "bg-pink-100",
            },
            {
              title: "Lighting & Visual Sync",
              desc: "Moving heads, strobes, and LED walls that pulse with the music.",
              color: "bg-yellow-100",
            },
            {
              title: "Custom Playlists & Requests",
              desc: "We tailor the vibe to your crowd, from Bollywood to EDM.",
              color: "bg-indigo-100",
            },
            {
              title: "Wireless Mic & Announcements",
              desc: "For shoutouts, intros, and crowd engagement throughout the event.",
              color: "bg-rose-100",
            },
            {
              title: "On-Site Tech Support",
              desc: "Our crew handles setup, soundcheck, and live adjustments.",
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
          {["djsetup1.jpg", "djsetup2.jpg", "djsetup3.jpg"].map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`DJ Setup ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Client Love ❤️
        </h2>
        <div className="max-w-3xl mx-auto text-gray-800 italic text-lg">
          “The DJ setup was next-level. From the sound to the lights, everything was on point. Our guests didn’t stop dancing!”
          <br />
          <span className="block mt-4 font-semibold text-purple-600">
            — Aayush & Neha, Ghaziabad
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Set the Stage
        </h2>
        <p className="mb-6 text-lg">
          Whether it’s a wedding, college fest, or concert — we bring the beats, the gear, and the vibe.
        </p>
        <a
          href="https://wa.me/918923426667?text=Hey%20Shivam%21%20I%E2%80%99m%20interested%20in%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20Professional%20DJ%20Setup.%20Could%20you%20share%20the%20pricing%20and%20available%20options%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book Now
        </a>
        <div className="mt-6 text-sm opacity-80">
          Trusted by top venues and planners across India
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
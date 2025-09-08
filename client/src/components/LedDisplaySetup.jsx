import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function LedDisplaySetup() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>LED Display Setup | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="High-impact LED walls and visuals for weddings, concerts, and corporate events. Modular, weatherproof, and synced to your vibe."
        />
        <meta
          property="og:title"
          content="LED Display Setup | ANIL DJ & EVENTS"
        />
        <meta
          property="og:url"
          content="https://anildjevents.netlify.app/services/led-display-setup"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-purple-700 to-black -skew-y-12 transform origin-top-left" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              LED Display Setup
            </h1>
            <p className="text-lg md:text-xl font-light">
              Modular LED walls, synced visuals, and branded content for unforgettable impact.
            </p>
            <a
              href="https://wa.me/918923426667?text=Hey%20Shivam%21%20I%E2%80%99m%20interested%20in%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20LED%20Display%20Setup.%20Could%20you%20share%20the%20pricing%20and%20available%20options%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Your Display
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/ledwall.webp"
                alt="LED Display Setup"
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
          LED Setup Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Modular Panel Design",
              desc: "Custom sizes for indoor/outdoor stages, baraats, and brand activations.",
              color: "bg-purple-100",
            },
            {
              title: "Sponsor Loops & Branding",
              desc: "Display logos, animations, and live feeds with seamless transitions.",
              color: "bg-pink-100",
            },
            {
              title: "Weatherproof & Daylight Visible",
              desc: "Crystal-clear visuals even under harsh lighting or rain.",
              color: "bg-yellow-100",
            },
            {
              title: "Live Sync with DJ & Dhol",
              desc: "Visuals pulse with the beat for immersive energy.",
              color: "bg-indigo-100",
            },
            {
              title: "Custom Animations & Effects",
              desc: "Tailored intros, countdowns, and transitions for your event flow.",
              color: "bg-rose-100",
            },
            {
              title: "On-Site Tech Support",
              desc: "Our crew handles setup, testing, and real-time adjustments.",
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
          LED in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["display1.webp", "display2.webp", "display3.webp"].map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`LED Setup ${i + 1}`}
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
          “The LED wall was the centerpiece of our concert. Sponsors loved the visibility, and the crowd was blown away by the synced visuals.”
          <br />
          <span className="block mt-4 font-semibold text-purple-600">
            — Rohan & Team, Noida
          </span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Light Up Your Event
        </h2>
        <p className="mb-6 text-lg">
          From weddings to festivals, our LED setup turns your vision into a visual spectacle.
        </p>
        <a
          href="https://wa.me/918923426667?text=Hey%20Shivam%21%20I%E2%80%99m%20interested%20in%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20LED%20Display%20Setup.%20Could%20you%20share%20the%20pricing%20and%20available%20options%3F"
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
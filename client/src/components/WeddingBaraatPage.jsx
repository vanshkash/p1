import { Link } from "react-router-dom";

const WeddingBaraatPage = () => {
  return (
        <>
        {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-purple-700 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Wedding DJ Sound</h1>
      <p className="text-lg md:text-xl font-bold">
        Powerful sound systems tailored for Indian wedding processions. Dhol beats, Bollywood mixes, and crowd-hyping DJ sets.
      </p>
            <a
              href="/contact"
              className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Now
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/weddingsound.jpeg"
                alt="Wedding DJ Sound"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>
      
      <div className="max-w-4xl mx-auto p-6 w-full">
      <p className="text-gray-700 mb-4">
        Bring the energy of a full-blown celebration to the dance floor! Our DJ sound setup includes high-powered speakers, dhol integration, and curated Bollywood mixes to hype the crowd and honor tradition.
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Wireless sound rig for mobile deployment</li>
        <li>Live dhol syncing with DJ beats</li>
        <li>Custom playlists for groom’s entry</li>
        <li>Optional LED visuals and mic announcements</li>
      </ul>
      <Link
        to="/contact"
        className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform"
      >
        Book This Experience
      </Link>
      <div className="mt-6">
        <Link to="/services" className="text-blue-600 hover:underline">
          ← Back to Services
        </Link>
      </div>
    </div>
      </>
  );
};

export default WeddingBaraatPage;
import HeroTypedText from "./HeroTypedText";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
  <img
    src="/images/home.jpg"
    alt="ANIL DJ setup"
    className="w-full h-full object-cover blur-sm"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
</div>

      {/* Content on top of image */}
      <div className="relative text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 text-blue-500 drop-shadow-[0_0_10px_#3b82f6] hover:drop-shadow-[0_0_20px_#3b82f6] transition duration-300">
          ANIL DJ & EVENTS
        </h1>
        <div className="text-3xl font-bold md:text-3xl mb-8 text-blue-200">
          Bringing electrifying energy to your <HeroTypedText />
        </div>
        <a
          href="#contact"
          className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg hover:scale-105 transition duration-300"
        >
          Book Your Event
        </a>
      </div>
    </section>
  );
}
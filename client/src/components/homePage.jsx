export default function HomePage() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
          ANIL DJ & EVENTS
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Bringing electrifying energy to your wedding baraat, parties, and events.
          Mobile DJ setup, LED displays, and unforgettable sound.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition shadow-lg hover:scale-105"
        >
          Book Your Event
        </a>
      </div>
    </section>
  );
}
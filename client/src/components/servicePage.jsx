const services = [
  {
    title: "Custom Event Packages",
    description: "Bundle services like DJ, lighting, photography, and more",
    image: "/images/custom_event.jpg",
  },
  {
    title: "DJ on Wheels",
    description:
      "ANIL DJ & EVENTS presents “DJ on Wheels”—a high-energy mobile entertainment experience designed for Indian wedding baraats and outdoor celebrations",
    image: "/images/wheel.jpg",
  },
  {
    title: "Wedding Baraat Sound",
    description:
      "Powerful sound systems tailored for Indian wedding processions. Dhol beats, Bollywood mixes, and crowd-hyping DJ sets.",
    image: "/images/weddingsound.jpeg",
  },
  {
    title: "LED Display Setup",
    description:
      "High-impact LED screens for live visuals, custom messages, and synced music effects",
    image: "/images/ledwall.jpg",
  },
  {
    title: "DJ Setup",
    description:
      "Professional DJ setup with top-of-the-line equipment, ensuring high-quality sound and an unforgettable experience.",
    image: "/images/djsetup.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#fdf6ff] via-[#fefefe] to-[#f0f9ff] text-gray-900"
    >
      {/* Decorative pastel blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto font-extrabold">
          Explore what makes <span className="font-black">ANIL DJ & EVENTS</span> the heartbeat of every celebration.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed font-bold">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
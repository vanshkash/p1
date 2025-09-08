import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Custom Event Packages",
    description: "Bundle services like DJ, lighting, photography, and more",
    image: "/images/custom_event.webp",
  },
  {
    title: "DJ on Wheels",
    description:
      "ANIL DJ & EVENTS presents “DJ on Wheels”—a high-energy mobile entertainment experience designed for Indian wedding baraats and outdoor celebrations",
    image: "/images/card-djonwheels.webp",
  },
  {
    title: "Wedding DJ Sound",
    description:
      "Powerful sound systems tailored for Indian wedding processions. Dhol beats, Bollywood mixes, and crowd-hyping DJ sets.",
    image: "/images/weddingsound.webp",
  },
  {
    title: "LED Display Setup",
    description:
      "High-impact LED screens for live visuals, custom messages, and synced music effects",
    image: "/images/ledwall.webp",
  },
  {
    title: "Professional DJ Setup",
    description:
      "Professional DJ setup with top-of-the-line equipment, ensuring high-quality sound and an unforgettable experience.",
    image: "/images/djsetup.webp",
  },
];

export default function ServicesPage({ showHelmet = false }) {
  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>Services | ANIL DJ & EVENTS</title>
          <meta
            name="description"
            content="Explore our full range of services including DJ on Wheels, LED displays, wedding baraat sound systems, and custom event packages tailored for unforgettable celebrations."
        />
        <meta
          name="keywords"
          content="DJ services, Indian wedding DJ, baraat sound, LED display, mobile DJ, event packages, ANIL DJ & EVENTS, best dj service in hapur"
        />
        <meta name="author" content="Vansh | ANIL DJ & EVENTS" />

        {/* Open Graph */}
        <meta property="og:title" content="Services | ANIL DJ & EVENTS" />
        <meta
          property="og:description"
          content="From DJ on Wheels to LED displays, discover the services that make ANIL DJ & EVENTS the heartbeat of every celebration."
        />
        <meta property="og:image" content="https://anildjevents.netlify.app/images/djsetup.jpg" />
        <meta property="og:url" content="https://anildjevents.netlify.app/services" />
        <meta property="og:type" content="website" />

      </Helmet>
      )}

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
          {services.map((service, index) => {
  const slug = service.title.toLowerCase().replace(/\s+/g, "-"); // e.g. "custom-event-packages"

  return (
    <Link to={`/services/${slug}`} key={index}>
      <div className="group bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-purple-700 mb-2">{service.title}</h3>
          <p className="text-gray-800 leading-relaxed font-bold">{service.description}</p>
      <p className="font-bold text-blue-600 underline">Know more</p>
        </div>
      </div>
    </Link>
  );
})}
        </div>
      </section>
    </>
  );
}
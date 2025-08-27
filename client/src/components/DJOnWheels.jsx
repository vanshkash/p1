import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GallerySection from './gallery';

const DJOnWheels = () => {
  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>Baraat on Wheels | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Transform your baraat into a street-level celebration with our DJ on Wheels service."
        />
        <meta
          name="keywords"
          content="DJ on Wheels, Baraat on Wheels,Baraat on Wheels in Hapur,Baraat on Wheels in Noida, Baraat DJ, Indian wedding DJ, mobile DJ truck, dhol, ANIL DJ & EVENTS, college fest DJ, corporate event DJ"
        />
        <meta
          name="author"
          content="Vansh | ANIL DJ & EVENTS"
        />
        <meta
          property="og:title"
          content="Baraat on Wheels | ANIL DJ & EVENTS"
        />
        <meta
          property="og:url"
          content="https://anildjevents.netlify.app/services/dj-on-wheels"
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
              Baraat on Wheels
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6 animate-fade-in delay-300">
              Turn Your Baraat Into a Street-Level Celebration
            </h2>
            <a
              href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20a%20baraat%20procession%20with%20your%20DJ-on-Wheels%20setup!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Your Baraat
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/wheels.jpg"
                alt="Custom Event Packages"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">What Is DJ on Wheels?</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          DJ on Wheels is ANIL DJ & EVENTS’s flagship mobile experience — a high-energy, road-ready DJ setup built for Indian wedding baraats, college festivals, corporate activations, and concert pre-shows. We bring the beats, the visuals, and the vibe directly to your venue.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          What’s Inside Your Package
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Mobile DJ Booth with Dhol Integration",
              desc: "Live mixing synced with traditional dhol beats for a high-energy fusion that keeps the baraat moving.",
              color: "bg-purple-100",
            },
            {
              title: "Surround Sound on Wheels",
              desc: "High-wattage speakers mounted on the vehicle for 360° audio coverage across the entire procession route.",
              color: "bg-pink-100",
            },
            {
              title: "LED Uplighting & Moving Heads",
              desc: "Dynamic lighting synced to music, creating a visual spectacle that turns streets into dance floors.",
              color: "bg-yellow-100",
            },
            {
              title: "‘NAAM KI BARAAT’ Groom Template",
              desc: "A personalized nameplate mounted on the DJ vehicle — announcing the groom’s arrival in bold, celebratory style.",
              color: "bg-indigo-100",
            },
            {
              title: "Dhol + DJ Sync Performance",
              desc: "Live dhol players synced with DJ beats for a fusion of tradition and modern energy.",
              color: "bg-rose-100",
            },
            {
              title: "Procession Coordination & Crowd Safety",
              desc: "Our team manages timing, traffic, and guest flow so you can focus on celebrating without stress.",
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

      {/* Use Cases Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
          <div>💍 Wedding Baraats — Live DJ procession with full sound rig</div>
          <div>🏫 College Festivals — Campus-wide hype and crowd engagement</div>
          <div>🏢 Corporate Events — Branded mobile presence with AV punch</div>
          <div>🎶 Concert Pre-Parties — Street-level buzz before the main stage</div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />


      {/* Booking CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Roll?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Book DJ on Wheels for your next event and let the streets come alive with sound, lights, and unforgettable energy.
        </p>
        <a
          href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%E2%80%99m%20interested%20in%20booking%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20DJ-on-Wheels%20setup%20for%20a%20baraat.%20Could%20you%20please%20share%20the%20pricing%20and%20package%20details%3F"

          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
};

export default DJOnWheels;
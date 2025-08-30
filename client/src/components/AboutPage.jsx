import React from 'react';
import { Helmet } from "react-helmet-async";

const AboutPage = ( {showHelmet = false}) => {
  return (
    <>
    {showHelmet && (
     <Helmet>
        <title>About Us | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Discover ANIL DJ & EVENTS—India’s most electrifying mobile DJ brand. We deliver immersive audio-visual experiences for weddings, festivals, and corporate events."
        />
        <meta property="og:title" content="About Us | ANIL DJ & EVENTS" />
        <meta
          property="og:description"
          content="From baraats to college fests, ANIL DJ & EVENTS orchestrates unforgettable moments with curated sound, dynamic visuals, and authentic energy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anildjevents.netlify.app/about" />
      </Helmet>
    )}

    <section className="bg-gradient-to-br from-black via-neutral-800 to-neutral-800 text-white px-6 py-20 md:px-24 lg:px-32">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero Section */}
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            India’s most electrifying mobile DJ brand, delivering immersive audio-visual experiences for weddings, festivals, corporate events, and concerts. We don’t just play music—we orchestrate moments.
          </p>
          <div className="mt-6">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-black font-semibold shadow-md hover:scale-105 transition">
              Trusted By Many People Across India 🇮🇳
            </span>
          </div>
        </header>

        {/* Mission & Values */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-neutral-900 p-6 rounded-xl border-l-4 border-yellow-400 shadow-md hover:shadow-yellow-500/20 transition">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎯 Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To transform every celebration into a high-impact experience through curated sound, dynamic visuals, and seamless execution. We believe in authenticity, inclusivity, and scalable excellence.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-xl border-l-4 border-pink-500 shadow-md hover:shadow-pink-500/20 transition">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">💡 Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Precision in sound and lighting</li>
              <li>Authentic representation of every event</li>
              <li>Inclusive design and accessibility</li>
              <li>Modular, future-proof digital assets</li>
              <li>Client-first collaboration and transparency</li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            🔧 What We Deliver
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <ul className="list-disc list-inside space-y-2 bg-neutral-900 p-6 rounded-xl border border-yellow-500 shadow-md hover:shadow-yellow-500/20 transition">
              <li>Genre-spanning DJ sets: Bollywood, EDM, Punjabi, Hip-Hop, Rock</li>
              <li>Mobile DJ-on-wheels with full sound & lighting rig</li>
              <li>LED walls, dance floors, projectors, karaoke</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 bg-neutral-900 p-6 rounded-xl border border-pink-500 shadow-md hover:shadow-pink-500/20 transition">
              <li>Artist management & live performance coordination</li>
              <li>Custom playlists & crowd-responsive mixing</li>
              <li>Visual branding & digital gallery integration</li>
            </ul>
          </div>
        </section>

        {/* Reach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-400">📍 Where We Operate</h2>
          <p className="text-gray-300 leading-relaxed bg-neutral-900 p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-red-500/20 transition">
            Headquartered in Hapur, we serve clients across Delhi NCR, Uttar Pradesh, and pan-India. Whether it’s a baraat in Agra, a college fest in Lucknow, or a corporate gala in Mumbai—ANIL DJ & EVENTS brings the beats, the visuals, and the vibe.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 drop-shadow-lg">
            Let’s Make Your Event Legendary
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Ready to turn up the volume on your next celebration? Connect with us to craft an experience that’s unforgettable.
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-black font-bold rounded-full shadow-lg hover:scale-105 transition">
            Book Your Experience
          </button> */}
        </section>
      </div>
    </section>
    </>
  );
};

export default AboutPage;
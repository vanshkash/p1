import React from "react";
import { Helmet } from "react-helmet-async";
import HeroTypedText from "./HeroTypedText";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>ANIL DJ & EVENTS | Wedding DJ on Wheels in Hapur</title>
        <meta
          name="description"
          content="Book ANIL DJ & EVENTS for unforgettable celebrations and baraats. High-energy Indian wedding DJ services with mobile setups, LED displays, and custom event packages."
        />
        <meta
          name="keywords"
          content="Indian wedding DJ, baraat sound system, DJ on wheels, Hapur DJ, LED display DJ, ANIL DJ & EVENTS HAPUR, Best DJ in Hapur. Best DJ in Noida"
        />
        <meta name="author" content="Vansh | ANIL DJ & EVENTS" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="ANIL DJ & EVENTS | Wedding DJ on Wheels" />
        <meta
          property="og:description"
          content="Book the most energetic DJ experience for your Indian wedding. Mobile DJ, LED displays, and full event packages."
        />
        <meta property="og:image" content="https://anildjevents.netlify.app/images/home.webp" />
        <meta property="og:url" content="https://anildjevents.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 text-white"
      >
        {/* Background Image with AVIF & WebP support */}
        <div className="absolute inset-0">
          <picture>
            <source
              srcSet="https://res.cloudinary.com/dsagj1d3e/image/upload/f_avif,q_auto/v1756146704/home_xqcjlx.jpg"
              type="image/avif"
            />
            <source
              srcSet="https://res.cloudinary.com/dsagj1d3e/image/upload/f_webp,q_auto/v1756146704/home_xqcjlx.jpg"
              type="image/webp"
            />
            <img
              src="https://res.cloudinary.com/dsagj1d3e/image/upload/q_auto/v1756146704/home_xqcjlx.jpg"
              loading="eager"
              alt="ANIL DJ setup with mobile sound system and LED lights"
              className="w-full h-full object-cover brightness-75"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70"></div>
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
            href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20my%20upcoming%20event!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg hover:scale-105 transition duration-300"
          >
            Book Your Event
          </a>
        </div>
      </section>
    </>
  );
}
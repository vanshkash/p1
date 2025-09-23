import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ Slim build (lightweight)
import HeroTypedText from "./HeroTypedText";

export default function HomePage() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ loadSlim instead of loadFull
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src="/images/home.webp"
          src="https://res.cloudinary.com/dtetjnumo/image/upload/v1758294393/home_vygfjy.webp"
          loading="eager"
          alt="ANIL DJ setup with mobile sound system and LED lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 25 },
            color: { value: ["#ff0080", "#ffbf00", "#00d9ff"] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 4, random: true },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: { default: "out" },
            },
          },
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold mb-8 text-blue-500 drop-shadow-[0_0_10px_#3b82f6]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          ANIL DJ & EVENTS
        </motion.h1>

        <motion.div
          className="text-3xl font-bold md:text-3xl mb-8 text-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Bringing electrifying energy to your <HeroTypedText />
        </motion.div>

        <motion.a
          href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20my%20upcoming%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(255, 200, 100, 0.8)",
          }}
        >
          Book Your Event
        </motion.a>
      </motion.div>
    </section>
  );
}

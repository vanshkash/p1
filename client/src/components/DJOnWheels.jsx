import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import DJGallery from './DJOnWheelsGallery';
import StatsSection from "./StatsSection";

const fadeIn = (delay = 0, direction = "up") => ({
  hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: "easeOut" } },
});

const DJOnWheels = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [showBg, setShowBg] = useState(false);

  // Play/Pause Video on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        entry.isIntersecting ? video.play() : video.pause();
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  // Lazy load background
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShowBg(true),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <Helmet>
        <title>DJ on Wheels | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Transform your baraat into a street-level celebration with our DJ on Wheels service."
        />
      </Helmet>

      {/* 🚚 Hero Section */}
      <section ref={heroRef} className="relative bg-black text-white overflow-hidden">
        {/* Backgrounds */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat blur-[1.5px]"
          style={{
            backgroundImage: showBg ? "url('/images/desktop-djonwheels.webp')" : "none",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{
            backgroundImage: showBg ? "url('/images/mobile-djonwheels.webp')" : "none",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(0, "up")}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-violet-700 animate-glow drop-shadow-lg">
              Baraat On Wheels
            </h1>
            <motion.h2
              variants={fadeIn(0.2)}
              className="text-2xl md:text-3xl font-extrabold mb-6 text-white/90 drop-shadow-[0_0_14px_#ca8a04]"
            >
              Turn Your Baraat Into a Street-Level Celebration
            </motion.h2>
            <motion.a
              variants={fadeIn(0.3)}
              href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%20want%20to%20book%20ANIL%20DJ%20%26%20EVENTS%20for%20a%20baraat%20procession%20with%20your%20DJ-on-Wheels%20setup!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 duration-300 text-white font-bold px-8 py-3 rounded-xl shadow-lg"
            >
              Book Your Baraat
            </motion.a>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(0.3)}
            className="flex justify-center"
          >
            <div className="max-w-sm mx-auto group relative p-1 rounded-2xl bg-gradient-to-br from-yellow-300 via-red-400 to-green-500 shadow-xl hover:scale-105 transition-transform">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/duq50dwkb/video/upload/v1757782140/onwheels2_splpoa.mp4"
                poster="/images/wheelsposter/wheels1.webp"
                className="w-full aspect-square object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* 📝 Description Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
        className="py-10 md:py-16 px-6 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          What Is DJ on Wheels?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          DJ on Wheels is ANIL DJ & EVENTS’s flagship mobile experience — a high-energy, road-ready DJ setup built for wedding baraats, college festivals, corporate activations, and concert pre-shows.
        </p>
      </motion.section>

      {/* 📸 Gallery */}
      <DJGallery />

      {/* 🎵 Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-3xl font-bold text-center text-purple-700 mb-12"
        >
          What’s Inside Your Package
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Mobile DJ Booth with Dhol Integration", desc: "Live mixing synced with traditional dhol beats." },
            { title: "Surround Sound on Wheels", desc: "360° audio coverage across the entire procession route." },
            { title: "LED Uplighting & Moving Heads", desc: "Dynamic lighting synced to music." },
            { title: "‘NAAM KI BARAAT’ Groom Template", desc: "Personalized nameplate mounted on the vehicle." },
            { title: "Dhol + DJ Sync Performance", desc: "Fusion of tradition and modern energy." },
            { title: "Procession Coordination & Crowd Safety", desc: "Our team manages timing & traffic flow." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(i * 0.1)}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StatsSection />

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0)}
        className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Roll?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Book DJ on Wheels for your next event and let the streets come alive with music, lights, and unforgettable energy.
        </p>
        <a
          href="https://wa.me/918923426667?text=Hi%20Shivam%2C%20I%E2%80%99m%20interested%20in%20booking%20ANIL%20DJ%20%26%20EVENTS%E2%80%99%20DJ-on-Wheels%20setup%20for%20a%20baraat."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-105"
        >
          Request a Quote
        </a>
      </motion.section>
    </main>
  );
};

export default DJOnWheels;

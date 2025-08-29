import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GallerySection from './gallery';
import DJGallery from './DJOnWheelsGallery';
import StatsSection from "./StatsSection";
import { useEffect, useRef } from 'react';

const DJOnWheels = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // Adjust based on how much visibility you want
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
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
          <div className="text-white space-y-6 animate-fade-in ">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight ">
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
          <div className="animate-fade-in">
            <div className="
                max-w-sm mx-auto
                cursor-pointer
                group
                relative
                p-1
                rounded-xl
                bg-gradient-to-br
                from-yellow-300
                via-red-400
                to-green-500
                shadow-xl
                hover:scale-105
                focus:outline-none
                focus:ring-4
                focus:ring-pink-300
                transition-transform
              ">
             <video
  ref={videoRef}
  src="https://res.cloudinary.com/dsagj1d3e/video/upload/v1756364254/herovideo_l1zxz2.mp4"
  poster="/images/onwheelshero.png"
  className="w-full aspect-square object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  controls
  aria-label="DJ on Wheels in action"
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
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700">
          Why Book DJ on Wheels with Us?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Because your celebration deserves more than just sound—it deserves a spectacle. Our DJ on Wheels setup transforms ordinary streets into high-energy dance floors, blending traditional dhol with modern beats, synchronized lighting, and crowd-pumping audio. Whether it’s a baraat, college fest, or corporate launch, we bring the vibe, the visuals, and the volume—right to your doorstep.
        </p>
      </section>
      
      {/* Gallery */}
      <DJGallery />

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

      <StatsSection />
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
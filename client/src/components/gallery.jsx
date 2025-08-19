import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

const galleryImages = [
  {
    src: "/images/onwheels.mp4",
    alt: "DJ on Wheels in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/onwheels2.mp4",
    alt: "DJ on Wheels in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/event1.mp4",
    alt: "Noida Event in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/event2.mp4",
    alt: "Ghaziabad Event in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/onwheels3.mp4",
    alt: "DJ on Wheels in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/event3.mp4",
    alt: "wedding event setup in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  {
    src: "/images/miniwheels.mp4",
    alt: "DJ on 'Mini Wheels' in action",
    type: "video",
    // poster: "/images/onwheels.jpg",
  },
  
  // { src: "/images/ledscreen.jpg", alt: "LED display setup at night" },
  // { src: "/images/baaratcrowed.jpg", alt: "Baraat crowd dancing" },
  // { src: "/images/lighting.jpg", alt: "Custom lighting effects" },
  { src: "/images/djbooth.png", alt: "DJ booth with fog machine" },
  { src: "/images/stagesound.jpg", alt: "Wedding stage with sound system" },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((item) => ({
    src: item.src,
    description: item.alt,
    type: item.type || "image",
    poster: item.poster,
  }));

  // 🛠️ Pause/mute Swiper videos when Lightbox opens
  useEffect(() => {
    const swiperVideos = document.querySelectorAll(".swiper-slide video");

    if (open) {
      swiperVideos.forEach((vid) => {
        vid.pause();
        vid.muted = true;
      });
    } else {
      swiperVideos.forEach((vid) => {
        vid.play();
        vid.muted = true;
      });
    }
  }, [open]);

  return (
    <section
      id="gallery"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50"
    >
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-white/10 via-indigo-100/20 to-pink-100/10 blur-sm opacity-30" />
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-wide drop-shadow-md">
          Event Gallery
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          Glimpses of the <span className="text-purple-600 font-semibold">energy</span>, <span className="text-pink-600 font-semibold">setup</span>, and <span className="text-indigo-600 font-semibold">unforgettable moments</span> we create.
        </p>
        <div className="mt-4">
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        className="max-w-4xl mx-auto"
      >
        {galleryImages.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center">
              <div
                className="bg-white rounded-2xl shadow-2xl border border-indigo-200 hover:border-indigo-400 transition duration-300 overflow-hidden group cursor-pointer transform hover:scale-[1.02]"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <div className="relative">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-[400px] object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-5 text-center">
                  <p className="text-indigo-700 font-semibold text-lg group-hover:text-indigo-900 transition duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom, Captions]}
        render={{
          slide: ({ slide, offset }) =>
            slide.type === "video" ? (
              <video
                controls
                autoPlay={offset === 0}
                muted={offset !== 0}
                style={{ maxHeight: "80vh", maxWidth: "100%", margin: "0 auto" }}
                poster={slide.poster}
                onLoadedData={(e) => {
                  if (offset === 0) {
                    e.target.play();
                    e.target.muted = false;
                  } else {
                    e.target.pause();
                    e.target.muted = true;
                  }
                }}
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : undefined,
        }}
      />
    </section>
  );
}
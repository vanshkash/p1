import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702202/event1_vhb7fj.mp4",
    alt: "Ghaziabad Event in action",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756197788/event1_uyzxhg.png",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702292/event2_p6noph.mp4",
    alt: "Noida Event in action",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756199608/event2_phm6tx.png",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702945/event3_xt8fkw.mp4",
    alt: "Wedding Setup in Hapur",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756199872/event_3_mufjsl.png",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755701591/FULL_ENJOY_STAY_COOL_STAY_HAPPY_djonwheels_dj_dj_djpankaj_djviral_djsong_djcompetition_djvi_tobceb.mp4",
    alt: "Dj On Wheels with Co2 Jet",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756200666/onwhwwls1_prf2v7.jpg",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755704484/onwheels2_is09iy.mp4",
    alt: "Mobile Dj Setup + Dhol",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756201233/mini_di_ow_wheels_qvucbi.png",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755704009/onwheels_sinrhv.mp4",
    alt: "DJ on Wheels in action",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756203651/djonwheels_bggeff.png",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755703668/miniwheels_n33yjl.mp4",
    alt: "DJ on 'Mini Wheels' in action",
    poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756202609/Vibrant_DJ_Setup_at_Sunset_kqbatq.png",
    type: "video",
  },
];

export default function GallerySection({ showHelmet = false }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((item) => ({
    src: item.src,
    description: item.alt,
    type: item.type || "image",
    poster: item.poster,
  }));

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
      {/* 🧠 Helmet for SEO */}
      {showHelmet && (

      <Helmet>
        <title>Event Gallery | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Explore high-energy Indian wedding baraats, DJ setups, and unforgettable moments from ANIL DJ & EVENTS."
        />
        <meta
          name="keywords"
          content="Anil DJ, DJ services, event gallery, wedding DJ, party DJ, corporate events, music entertainment, DJ setup, sound and lighting, dance floor, DJ photos, event highlights, celebration gallery, DJ equipment, DJ performances, event moments"
        />
      </Helmet>
      )}

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-white/10 via-indigo-100/20 to-pink-100/10 blur-sm opacity-30" />
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-wide drop-shadow-md">
          Event Gallery
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed font-extrabold">
          Glimpses of the <span className="text-purple-600 font-semibold">energy</span>,{" "}
          <span className="text-pink-600 font-semibold">setup</span>, and{" "}
          <span className="text-indigo-600 font-semibold">unforgettable moments</span> we create.
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
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { Helmet } from "react-helmet-async";
// cloudinary sometimes has issues with this video, using another account-"vanshkas87@gmail.com"
const galleryItems = [
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702202/event1_vhb7fj.mp4",
    src: "https://res.cloudinary.com/dtetjnumo/video/upload/f_auto,q_auto/v1757862508/noida_event_y259uh.mp4",
    alt: "Ghaziabad Event in action",
    poster: "images/homegalleryposter/event1.webp",
    type: "video",
  },
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702292/event2_p6noph.mp4",
    src: "https://res.cloudinary.com/dtetjnumo/video/upload/f_auto,q_auto/v1757788960/event2_g9nasd.mp4",
    alt: "Noida Event in action",
    poster: "images/homegalleryposter/event4.webp",
    type: "video",
  },
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755702945/event3_xt8fkw.mp4",
    src: "https://res.cloudinary.com/dtetjnumo/video/upload/f_auto,q_auto/v1757789355/event3_y8essb.mp4",
    alt: "Wedding Setup in Hapur",
    poster: "images/homegalleryposter/event3.webp",
    type: "video",
  },
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756484731/noidaevent1_jvdgxe.mp4",
    src: "https://res.cloudinary.com/dtetjnumo/video/upload/f_auto,q_auto/v1757788002/noidaevent1_rg5fm8.mp4",
    alt: "DJ with Crowd in Noida",
    poster: "images/homegalleryposter/noidaevent1.webp",
    type: "video",
  },
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755703668/miniwheels_n33yjl.mp4",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757863357/wheels2_bmbquq.mp4", // reused from DJ on wheels gallery (englishmylovr@gmail.com)
    alt: "Baraat on wheels in action",
    poster: "images/wheelsposter/6.webp",
    type: "video",
  },
  {
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756484306/noidaevent2_r9nl1g.mp4",
    src: "https://res.cloudinary.com/dtetjnumo/video/upload/f_auto,q_auto/v1757788689/noidaevent2_pzth7t.mp4",
    poster: "images/homegalleryposter/noidaevent2.webp",
    alt: "DJ + Crowd in Noida",
    type: "video",
  },
];

export default function SpotlightGallery({ showHelmet = false }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          target.muted = true;
          isIntersecting ? target.play() : target.pause();
        });
      },
      { threshold: 0.6 }
    );

    const videos = document.querySelectorAll(".swiper-slide video");
    videos.forEach((video) => observer.observe(video));

    return () => videos.forEach((video) => observer.unobserve(video));
  }, []);

  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>Gallery | ANIL DJ & EVENTS</title>
          <meta
            name="description"
            content="Explore our gallery of high-energy DJ setups, vibrant wedding moments, and crowd-hyping performances across India. Experience the vibe visually."
          />
          <meta property="og:title" content="Gallery | ANIL DJ & EVENTS" />
          <meta
            property="og:description"
            content="Glimpses of the energy, setup, and unforgettable moments we create—from Ghaziabad to Noida to Hapur."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dsagj1d3e/image/upload/v1756197788/event1_uyzxhg.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://anildjevents.netlify.app/gallery" />
        </Helmet>
      )}

      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 shadow-xl">
        {/* 🌈 Decorative Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-tr from-white/10 via-indigo-100/20 to-pink-100/10 blur-sm opacity-30" />
        </div>

        {/* 🎬 Header */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-wide drop-shadow-md">
            Gallery
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

        {/* 🎯 Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {galleryItems.map((item, i) => (
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
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-[400px] object-cover"
                      muted
                      loop
                      playsInline
                      controls
                      loading="lazy"
                    />
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

        {/* 💡 Lightbox Viewer */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          plugins={[Video]}
          slides={galleryItems.map((item) => ({
            type: "video",
            sources: [{ src: item.src, type: "video/mp4" }],
            poster: item.poster,
            description: item.alt,
          }))}
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
                    const video = e.target;
                    if (offset === 0) {
                      video.play();
                      video.muted = false;
                    } else {
                      video.pause();
                      video.muted = true;
                    }
                  }}
                >
                  <source src={slide.sources[0].src} type="video/mp4" />
                </video>
              ) : null,
          }}
        />
      </section>
    </>
  );
}
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

const galleryItems = [
  // cloudinary sometimes has issues with this video, using another account-"englishmylovr@gmail.com"
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756316022/onwheels_up5ik1.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756317045/6_bblxhn.png",
    // alt: "Baraat on Wheels",

    alt: "Baraat on Wheels in Noida",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757782140/onwheels2_splpoa.mp4",
    poster: "/images/wheelsposter/wheels1.webp",
  },
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756455542/onwheels_tmnc7k.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756317029/1_zts5rl.png",

    alt: "Dj on Wheels in Noida",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757863357/wheels2_bmbquq.mp4",
    poster: "/images/wheelsposter/1.webp",
  },
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755701591/FULL_ENJOY_STAY_COOL_STAY_HAPPY_djonwheels_dj_dj_djpankaj_djviral_djsong_djcompetition_djvi_tobceb.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756317036/5_a6ewvk.png",
    // alt: "Setup Before Baraat",

    alt: "Full Enjoy with DJ on Wheels",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757780516/onwheels_qaf3h6.mp4",
    poster: "/images/wheelsposter/3.webp",
  },
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756315715/onwheels5_uwfwrj.mp4",
    // alt: "Dj on Wheels + Fog Gun",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756317025/2_m4qjuo.png",

    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757782662/onwheels3_pqp8sx.mp4",
    alt: " DJ on Wheels before baraat",
    poster: "/images/wheelsposter/5.webp",
  },
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1756315615/onwheels4_oncxji.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756317029/4_dps7ut.png",

    alt: "Mobile DJ Setup + Dhol",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757783204/onwheels5_nn5ec3.mp4",
    poster: "/images/wheelsposter/2.webp",
  },
  {
    type: 'video',
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755704484/onwheels2_is09iy.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756201233/mini_di_ow_wheels_qvucbi.png",

    alt: "Mobile DJ Setup + Dhol",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757783655/onwheels6_mat6wk.mp4",
    poster: "/images/wheelsposter/7.webp",
  },
  {
    type: "video",
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755704009/onwheels_sinrhv.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756203651/djonwheels_bggeff.png",

    alt: "Baraat on Wheels in action",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757782959/onwheels4_zuilsl.mp4",
    poster: "/images/wheelsposter/4.webp",
  },
  {
    type: "video",
    // src: "https://res.cloudinary.com/dsagj1d3e/video/upload/v1755703668/miniwheels_n33yjl.mp4",
    // poster: "https://res.cloudinary.com/dsagj1d3e/image/upload/v1756202609/Vibrant_DJ_Setup_at_Sunset_kqbatq.png",

    alt: "Mini DJ on Wheels in action",
    src: "https://res.cloudinary.com/duq50dwkb/video/upload/f_auto,q_auto/v1757780146/miniwheels_nqxg9y.mp4",
    poster: "/images/wheelsposter/6.webp",
  },
];

export default function DJGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="relative py-10 px-4 md:px-16 overflow-hidden">
      {/* 🌈 Light Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,192,203,0.3),_transparent)] animate-pulse z-0"></div>

      {/* 🎶 Content */}
      <div className="relative z-10">
        <h1 className="text-indigo-700 text-4xl font-bold mb-6 text-center drop-shadow-md">
          Gallery
        </h1>
        <h2 className="text-pink-600 text-3xl font-bold mb-6 text-center drop-shadow-md">
          DJ on Wheels in Action
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              role="button"
              aria-label={`Play video: ${item.alt}`}
              tabIndex={0}
              className="
                cursor-pointer
                group
                relative
                p-1
                rounded-xl
                bg-gradient-to-br
                from-pink-500
                via-purple-600
                to-indigo-600
                shadow-xl
                hover:scale-105
                focus:outline-none
                focus:ring-4
                focus:ring-pink-300
                transition-transform
              "
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIndex(i);
                  setOpen(true);
                }
              }}
            >
              <div className="rounded-xl bg-black overflow-hidden border-[1.5px] border-white/20">
                <div className="aspect-[9/16] w-full md:max-w-[220px] lg:max-w-[200px] mx-auto rounded-xl overflow-hidden relative">
                  <video
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                  />

                  {/* ▶️ Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-2 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 4l10 6-10 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-sm font-medium">
                {item.alt}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* 💡 Lightbox with Video Plugin */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        plugins={[Video]}
        slides={galleryItems.map((item, i) => ({
          type: 'video',
          sources: [
            {
              src: item.src,
              type: 'video/mp4',
            },
          ],
          poster: item.poster,
          autoPlay: i === index
        }))}
      />
    </section>
  );
}
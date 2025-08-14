// GallerySection.jsx
const galleryImages = [
  { src: "/images/onwheels.jpg", alt: "DJ on Wheels in action" },
  { src: "/images/ledscreen.jpg", alt: "LED display setup at night" },
  { src: "/images/baaratcrowed.jpg", alt: "Baraat crowd dancing" },
  { src: "/images/lighting.jpg", alt: "Custom lighting effects" },
  { src: "/images/djbooth.png", alt: "DJ booth with fog machine" },
  { src: "/images/stagesound.jpg", alt: "Wedding stage with sound system" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-gray-50 py-16 px-6 md:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Event Gallery</h2>
        <p className="text-lg text-gray-600">
          Glimpses of the energy, setup, and unforgettable moments we create.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
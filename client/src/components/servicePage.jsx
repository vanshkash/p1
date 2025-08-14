// ServicesPage.jsx
const services = [
  {
    title: "DJ on Wheels",
    description:
      "ANIL DJ & EVENTS presents “DJ on Wheels”—a high-energy mobile entertainment experience designed for Indian wedding baraats and outdoor celebrations. Mounted on a custom vehicle, our setup includes booming speakers, dazzling lights, and a live DJ who brings the beats directly to your procession. Whether you're dancing through the streets or making a grand entrance, our DJ on Wheels ensures the vibe stays electric from start to finish.",
    image: "/images/wheel.jpg", // Replace with your actual image path
  },
  {
    title: "LED Display Setup",
    description:
      "High-impact LED screens for live visuals, custom messages, and synced music effects. Controlled via NovaLCT for precision and wow factor.",
    image: "/images/leddisplay.png",
  },
  {
    title: "Wedding Baraat Sound",
    description:
      "Powerful sound systems tailored for Indian wedding processions. Dhol beats, Bollywood mixes, and crowd-hyping DJ sets.",
    image: "/images/baaratsound.jpg",
  },
  {
    title: "Custom Event Packages",
    description:
      "Bundle services like DJ, lighting, photography, and more. Collaborate with our partner vendors for a seamless experience.",
    image: "/images/events.jpg",
  },
];

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="bg-white text-gray-900 py-16 px-6 md:px-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600">
          Explore what makes ANIL DJ & EVENTS the heartbeat of every celebration.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
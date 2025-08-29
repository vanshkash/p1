export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          Our Journey So Far
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-purple-800">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold animate-pulse">25+</span>
            <p className="mt-2 text-lg font-medium">Years in Business</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold animate-pulse">5000+</span>
            <p className="mt-2 text-lg font-medium">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold animate-pulse">400+</span>
            <p className="mt-2 text-lg font-medium">Events Rocked</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold animate-pulse">40+</span>
            <p className="mt-2 text-lg font-medium">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
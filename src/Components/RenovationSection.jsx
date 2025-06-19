import commercial from "../assets/commercial.png";
import residentail from "../assets/residentail.png";

export default function RenovationSection() {
  return (
    <div className="py-6 md:py-12 px-4 md:px-16 bg-white md:my-16 my-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 mb-4">
            Book Online <br />
            <span className="text-black text-2xl md:text-3xl font-semibold mb-6">
              Premium Curtains and Blinds in Dubai
            </span>
          </h2>
          <p className="text-gray-600">
            We're available 24/7 to provide top-notch curtain and blind solutions in Dubai and nearby areas. Enhance your space with our exquisite range of window treatments, tailored to your style and needs. Book our services at your convenience and enjoy competitive rates.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition flex items-center gap-2 mt-4 mx-auto md:mx-0">
            Schedule Now →
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 w-full md:w-auto">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative w-full sm:w-1/2 md:w-[280px]">
            <img
              src={commercial}
              alt="Commercial"
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
              Premium
            </span>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="font-semibold">Commercial</h3>
              <p className="text-sm">
                Luxury window treatments for hotels, restaurants, and retail spaces across Dubai.
              </p>
              <button className="mt-2 text-sm">View Projects →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg relative w-full sm:w-1/2 md:w-[280px]">
            <img
              src={residentail}
              alt="Residential"
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
              Popular
            </span>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="font-semibold">Residential</h3>
              <p className="text-sm">
                Custom curtains and blinds for villas & apartments with smart home integration.
              </p>
              <button className="mt-2 text-sm">View Projects →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

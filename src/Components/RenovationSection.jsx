import { motion } from "framer-motion";

export default function RenovationSection() {
  return (
    <div className="py-6 md:py-12 px-4 md:px-16 bg-white md:my-16 my-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Text Section */}
        <div className="flex flex-col justify-items-center items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h2 className="text-xl md:text-1xl font-semibold text-gray-900 mb-4">
              Book Online <br />
              <span className="text-black text-2xl md:text-3xl font-semibold mb-6">Renovation Services in Dubai</span>
            </h2>
            <p className="text-gray-600">
              We're available 24/7 for interior makeover work in Dubai and nearby areas.
              Book our services per your free schedule at competitive rates.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition flex items-center gap-2 mt-4">
              Schedule Now →
            </button>
          </motion.div>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg relative w-full md:w-[280px] sm:w-[300px]"
          >
            <img
              src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg"
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
              <button className="mt-2 underline text-sm">View Projects →</button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg relative w-full md:w-[280px] sm:w-[300px]"
          >
            <img
              src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg"
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
              <button className="mt-2 underline text-sm">View Projects →</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

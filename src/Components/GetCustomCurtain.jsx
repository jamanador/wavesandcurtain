import { motion } from 'framer-motion';
import getCustom from '../assets/getCustom.png';

const GetCustomCurtain = () => {
  return (
    <section className="py-10 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden" // Ensures no overflow from this div
          >
            <div className="overflow-hidden">
              <img
                src={getCustom}
                alt="Modern living room with custom curtains"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 overflow-hidden" // Ensures no overflow from this div
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Get Custom Curtains & Blinds in Dubai
              </h2>
              <p className="text-gray-600 leading-relaxed overflow-hidden">
                Transform your space with premium curtains, blinds, and wallpaper from Waves Curtains & Blinds, Dubai's leading window treatment specialists. We provide luxury blackout curtains for optimal light control, smart motorized blinds for effortless operation, and designer wallpapers to instantly elevate any interior. Our collection combines exceptional quality with the latest designs to enhance both homes and offices.
              </p>
            </div>

            <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-blue-400 transition-colors duration-200 font-medium"
            >
              Get Your Estimate Now →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetCustomCurtain;

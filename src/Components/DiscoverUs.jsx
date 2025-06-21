import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import discover from '../assets/discover.png';

const DiscoverUs = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden"> {/* ✅ Added overflow-hidden */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden"> {/* optional overflow-hidden */}
          {/* Right Images */}
          <motion.div
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.95, duration: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <img src={discover} alt="" className="w-full h-auto max-w-full" /> {/* ✅ Added max-w-full */}
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-1"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                DISCOVER US
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Curtains & Blinds is here to help you;
                Our experts are available to answer any questions you might have. We’ve got the answers.
              </p>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">VISIT US</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div className="text-gray-600">
                    Dubai, United Arab Emirates<br />
                    Business Bay, Downtown Dubai
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">CALL US</h3>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div className="text-gray-600">+971 55 337 1902</div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">EMAIL US</h3>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div className="text-gray-600">badirafique@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverUs;

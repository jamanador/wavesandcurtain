import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="home" className="pt-20 lg:pt-24  bg-gray-50 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Your Certified Partner for
                <span className="text-blue-400"> Luxury</span>
                <span className="text-yellow-600"> Curtains & Blinds</span> in
                <span className="text-blue-400"> Dubai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                Transform your space with premium quality curtains and blinds.
                We provide professional installation services, offering a wide range
                of luxury window treatments that combine style, functionality, and
                exceptional craftsmanship.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="text-black px-5 md:px-8 py-3 border rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-200 font-medium">
                Get Started →
              </button>
              <button className="border border-gray-300 text-gray-700 px-5 md:px-8 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium">
                View Our Projects</button>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                {!isPlaying ? (
                  <>
                    <img
                      src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Luxury curtains installation"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <motion.button
                        whilehover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/1fynPRbCxxE?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
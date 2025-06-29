import { AnimatePresence, motion } from 'framer-motion';
import { DraftingCompass, Gem, Headset, X } from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const values = [
  {
    icon: Gem,
    title: 'Unmatched Quality',
    description: 'Sourcing the finest materials to ensure lasting beauty and function.',
  },
  {
    icon: DraftingCompass,
    title: 'Bespoke Craftsmanship',
    description: 'Meticulously crafted by artisans to meet your exact specifications.',
  },
  {
    icon: Headset,
    title: 'Client-Centric Service',
    description: 'A seamless, personalized experience from first call to final installation.',
  },
];

const InputField = ({ type = 'text', placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const AboutUsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className={`${showModal ? 'blur-sm pointer-events-none select-none' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}
          <section className="min-h-screen flex items-center py-12 lg:py-0 bg-white">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <div className="order-2 lg:order-1">
                <p className="text-blue-500 font-semibold mb-3 tracking-wider">ABOUT US</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Your Vision, Our Craftsmanship
                </h1>
                <p className="text-base text-gray-600 max-w-lg mb-8 leading-relaxed">
                  Founded on a passion for design and a commitment to quality, we transform living spaces with bespoke curtains and blinds.
                </p>
                <button
                  onClick={() => handleScroll('our-story')}
                  className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Explore Our Story
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg"
                  loading='eager'
                  alt="Elegant Interior"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section id="our-story" className="py-20 ">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="h-96 lg:h-[550px] relative">
                <img
                  src="https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg"
                  alt="Story"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  More Than Curtains. <br /> A Legacy of Design.
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our journey began in 2010 with a vision to transform spaces. From a humble workshop to Dubai’s premier design house, our commitment to artistry and precision has never wavered.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We blend timeless techniques with modern innovation to bring your vision to life.
                </p>
              </div>
            </div>
          </section>

          {/* Our Promise Section */}
          <section className="py-20 md:py-28 bg-white">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Promise</h2>
              <p className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                The pillars of our brand, built for you.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerParent}
            >
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-8 bg-gray-50 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
                >
                  <item.icon size={48} className="text-blue-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-500 py-20 md:py-24 text-center rounded-3xl mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Begin Your Design Journey</h2>
            <p className="text-lg text-blue-100 md:text-xl max-w-3xl mx-auto mb-8">
              Let’s create something extraordinary together.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-blue-500 font-bold py-4 px-12 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </button>
          </section>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-8 w-full max-w-xl shadow-2xl relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Free Consultation</h3>
              <form className="space-y-4">
                <InputField placeholder="Full Name" />
                <InputField type="email" placeholder="Email Address" />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutUsPage;

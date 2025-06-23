import { motion } from 'framer-motion';
import { projects } from '../../constants/projects';
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-1 mb-16"
        >
          <p className="text-blue-400 font-semibold">Discover Our</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Projects That Reflect Our
            <br />
            <span>Passion and Precision</span>
          </h2>
        </motion.div>

        {/* Add overflow-hidden here to prevent image scaling overflow */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
          {projects?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whilehover={{ scale: 1.02 }}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="mt-5 md:mt-7 border border-gray-300 text-gray-700 md:px-12 px-8 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium">
            Check Out More Projects
          </button>
        </motion.div>
      </div>
    </section>

  );
};

export default Projects;
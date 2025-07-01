import { motion } from 'framer-motion'; // Assume you have more projects data
import { projects } from '../../constants/projects';
import DiscoverUs from '../Home/DiscoverUs';

const AllProjectsPage = () => {
  return (
    <section id="more-projects" className="py-20 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-1 mb-16"
        >
          <p className="text-blue-400 font-semibold">All Projects</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Explore More of Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
          {projects?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                loading="eager"
                className="w-full h-52 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <DiscoverUs />
    </section>
  );
};

export default AllProjectsPage;

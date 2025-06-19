import { motion } from 'framer-motion';
import project1 from '../assets/project1.png'; // Ensure this path is correct
import project10 from '../assets/project10.png'; // Ensure this path is correct
import project11 from '../assets/project11.png'; // Ensure this path is correct
import project12 from '../assets/project12.png'; // Ensure this path is correct
import project13 from '../assets/project13.png'; // Ensure this path is correct
import project114 from '../assets/project14.png'; // Ensure this path is correct
import project15 from '../assets/project15.png'; // Ensure this path is correct
import project16 from '../assets/project16.png'; // Ensure this path is correct
import project2 from '../assets/project2.png'; // Ensure this path is correct
import project3 from '../assets/project3.png'; // Ensure this path is correct
import project4 from '../assets/project4.png'; // Ensure this path is correct
import project5 from '../assets/project5.png'; // Ensure this path is correct
import project6 from '../assets/project6.png'; // Ensure this path is correct
import project7 from '../assets/project7.png'; // Ensure this path is correct
import project8 from '../assets/project8.png'; // Ensure this path is correct
import project9 from '../assets/project9.png'; // Ensure this path is correct

const Projects = () => {
  const projects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
    project12,
    project13,
    project114,
    project15,
    project16
  ];

  return (
    <section id="projects" className="pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mb-16"
        >
          <p className="text-blue-400 font-semibold">Discover Our</p>
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900">
            Projects That Reflect Our
            <br />
            <span className="">Passion and Precision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
          {projects.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
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
            Check Our More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
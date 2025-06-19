import { motion } from 'framer-motion';
import blackoutcurtain from '../assets/blackoutcurtain.png'; // Ensure this path is correct
import rollerblind from '../assets/rollerblind.png'; // Ensure this path is correct
import romaniblind from '../assets/romaniblind.png'; // Ensure this path is correct
import sheercurtain from '../assets/sheercurtain.png'; // Ensure this path is correct
import zebrablind from '../assets/zebrablind.png'; // Ensure this path is correct
import ProductCard from './ProductCard';
const Products = () => {
  const products = [
    {
      name: "Blackout Curtain",
      image: blackoutcurtain,
      description: "Complete light blocking for perfect sleep"
    },
    {
      name: "Sheer Curtain",
      image: sheercurtain,
      description: "Elegant light filtering with privacy"
    },
    {
      name: "Romani Blind",
      image: romaniblind,
      description: "Classic folding style with luxury appeal"
    },
    {
      name: "Roller Blind",
      image: rollerblind,
      description: "Modern minimalist window solution"
    },
    {
      name: "Zebra Blind",
      image: zebrablind,
      description: "Dual fabric for ultimate light control"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mb-16"
        >
          <p className="text-blue-500 font-medium">Explore Our</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Range Of Products
          </h2>
        </motion.div>

        <div className='space-y-8'>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard product={product} index={index} key={index} />
            ))}

          </div>

          {/* Second row: 2 items centered */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {products.slice(3, 5).map((product, index) => (
              <ProductCard product={product} index={index + 3} key={index + 3} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="mt-5 md:mt-7 border border-gray-300 text-gray-700 md:px-12 px-8 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium">
            View Our Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
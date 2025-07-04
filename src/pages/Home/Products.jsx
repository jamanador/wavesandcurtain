import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../constants/products';
import ProductCard from './ProductCard';
const Products = () => {
  return (
    <section id="products" className="min-h-screen  py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mb-16"
        >
          <p className="text-blue-400 font-medium">Explore Our</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Range Of Products
          </h2>
        </motion.div>

        <div className='space-y-8'>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {products?.slice(0, 3).map((product, index) => (
              <ProductCard product={product} index={index} key={index} />
            ))}

          </div>

          {/* Second row: 2 items centered */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {products?.slice(3, 5).map((product, index) => (
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
          <Link to='/products' className="mt-5 md:mt-7 border border-gray-300 text-gray-700 md:px-12 px-8 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200 font-medium">
            View All Our Products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
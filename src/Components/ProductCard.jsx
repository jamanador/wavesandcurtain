import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  const [firstLine, secondLine] = product.name.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer w-full lg:max-w-sm md:max-w-lg max-w-lg"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="relative h-64 overflow-hidden">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Always-visible text */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <h3 className="text-4xl font-extrabold text-white group-hover:text-white transition-colors duration-300 text-center px-4 leading-tight">
              {firstLine}<br />{secondLine}
            </h3>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-500/80 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-40" />
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
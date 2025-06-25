import { motion } from 'framer-motion';

const ProductBanner = ({ product }) => {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl px-6 py-12 mx-auto text-white flex flex-col justify-center h-full"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg md:text-xl font-semibold mb-3">
          The Perfect Choice For Stylish And Durable Door & Window Coverings
        </p>
        <p className="text-sm md:text-base max-w-xl">
          Curtain and Blind is one of the most favoured dealers of {product.name} in Dubai with the luxurious and wide range of collection.
        </p>
      </motion.div>
    </div>
  );
};

export default ProductBanner;

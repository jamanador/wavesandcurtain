import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { products } from '../../constants/products';

const SingleProjects = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  console.log(product);

  if (!product) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-1 mb-16"
        >
          <p className="text-blue-400 font-semibold">Project Spotlight</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            {product.name || "Our Work"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {product?.images?.length > 0 ? (
            product.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))
          ) : (
            <p className="text-red-500 text-center col-span-full">
              No images available.
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default SingleProjects;

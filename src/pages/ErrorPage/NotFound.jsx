import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-9xl font-extrabold tracking-tight text-gray-200 drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mt-6 text-gray-300">
          Oops! Page not found.
        </p>
        <p className="mt-4 text-gray-400 text-base md:text-lg">
          The page you're looking for might have been moved or deleted.
        </p>
        <Link
          to="/home"
          className="inline-block mt-8 px-6 py-3 bg-blue-500 hover:bg-orange-500 transition-colors rounded-full font-medium text-white shadow-md"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}
export default NotFound;
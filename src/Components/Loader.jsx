import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <motion.div
        className="relative w-20 h-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: "easeInOut",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 50 50">
          <circle
            className="text-gray-700"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            opacity="0.2"
          />
          <motion.circle
            className="text-blue-400"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="60"
            animate={{
              strokeDashoffset: [60, 0, 60],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Loader;

import { motion } from 'framer-motion';
import { FaGavel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] bg-gray-50 text-gray-800 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-9xl font-extrabold text-blue-600 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        404
      </motion.div>
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The legal brief you were looking for doesn't exist.
      </p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link 
          to="/" 
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Go Back to Home
        </Link>
      </motion.div>
      <FaGavel className="text-blue-200 text-7xl mt-8" />
    </motion.div>
  );
};

export default NotFoundPage;
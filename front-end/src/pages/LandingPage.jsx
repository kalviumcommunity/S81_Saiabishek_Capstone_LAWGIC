import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGavel, FaSearch, FaCommentDots } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } 
    }
  };

  return (
    <motion.div 
      className="bg-gray-50 text-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 px-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4"
            variants={itemVariants}
          >
            Your Legal Journey Starts Here.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90"
            variants={itemVariants}
          >
            Connect with verified lawyers and get the legal help you need.
          </motion.p>
          <motion.button 
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-400 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto py-20 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <FaSearch className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Your Lawyer</h3>
            <p className="text-gray-600">Browse verified lawyer profiles by expertise, location, and reviews.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <FaCommentDots className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Consult Securely</h3>
            <p className="text-gray-600">Use our real-time messaging system for confidential consultations.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <FaGavel className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resolve Your Issue</h3>
            <p className="text-gray-600">Receive expert legal advice and services tailored to your needs.</p>
          </motion.div>
        </div>
      </div>

      {/* Optional AI Section */}
      <div className="bg-gray-100 py-20 px-8">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need Quick Answers?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our AI Legal Assistant can help with basic questions.
          </motion.p>
          <motion.button 
            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to AI
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
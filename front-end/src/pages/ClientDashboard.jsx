import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import ProblemCard from '../components/dashboards/ProblemCard';
import { getClientProblems } from '../api/api'; // Mock API call

const ClientDashboard = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await getClientProblems();
        setProblems(response.data);
      } catch (error) {
        console.error("Failed to fetch problems:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <motion.div 
      className="container mx-auto py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Dashboard</h1>
        <div className="flex space-x-4">
          <motion.button 
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus className="mr-2" /> Post a Problem
          </motion.button>
          <motion.button 
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch className="mr-2" /> Find Lawyers
          </motion.button>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Your Posted Problems</h2>
      {problems.length === 0 ? (
        <p className="text-gray-500">You haven't posted any problems yet. Start by posting one to get help!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(problem => (
            <motion.div 
              key={problem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProblemCard problem={problem} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ClientDashboard;
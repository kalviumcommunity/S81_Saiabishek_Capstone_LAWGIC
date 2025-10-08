import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import ProblemCard from '../components/dashboards/ProblemCard';
import { getAllProblems } from '../api/api'; // Mock API call

const LawyerDashboard = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await getAllProblems();
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
        <h1 className="text-3xl font-bold text-gray-800">Available Problems</h1>
        <motion.button 
          className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFilter className="mr-2" /> Filter
        </motion.button>
      </div>

      {problems.length === 0 ? (
        <p className="text-gray-500">No new problems posted at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(problem => (
            <motion.div 
              key={problem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProblemCard problem={problem} showDetails={true} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default LawyerDashboard;
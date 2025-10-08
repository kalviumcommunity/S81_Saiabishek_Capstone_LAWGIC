import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUsers, FaUserTie, FaCheckCircle, FaChartLine } from 'react-icons/fa';
// Assuming these API calls exist for an Admin role
import { getSystemStats, getPendingLawyers, updateUserStatus } from '../api/api'; 
import LawyerProfileCard from '../components/dashboards/LawyerProfileCard';

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [pendingLawyers, setPendingLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, lawyersRes] = await Promise.all([
          getSystemStats(),
          getPendingLawyers(),
        ]);
        
        setStats(statsRes.data);
        setPendingLawyers(lawyersRes.data);
      } catch (error) {
        console.error("Failed to fetch admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVerification = async (lawyerId, status) => {
    try {
      // API call to update the lawyer's verification status
      await updateUserStatus(lawyerId, { isVerified: status });
      
      // Update local state to remove the lawyer from the pending list
      setPendingLawyers(prev => prev.filter(lawyer => lawyer.id !== lawyerId));
      
    } catch (error) {
      console.error("Failed to update lawyer status:", error);
      alert("Failed to update lawyer status. Check console.");
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-lg">Loading Admin Data...</div>;
  }

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <FaChartLine className="mr-3 text-blue-600" />
        Admin Control Panel
      </h1>

      {/* ------------------ System Stats Overview ------------------ */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <div className="text-sm font-semibold text-gray-500">Total Clients</div>
          <div className="text-3xl font-bold text-gray-800 mt-1 flex items-center">
            {stats.totalClients || 0}
            <FaUsers className="ml-auto text-green-500" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <div className="text-sm font-semibold text-gray-500">Total Lawyers</div>
          <div className="text-3xl font-bold text-gray-800 mt-1 flex items-center">
            {stats.totalLawyers || 0}
            <FaUserTie className="ml-auto text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <div className="text-sm font-semibold text-gray-500">Pending Verification</div>
          <div className="text-3xl font-bold text-gray-800 mt-1 flex items-center">
            {pendingLawyers.length}
            <FaCheckCircle className="ml-auto text-yellow-500" />
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <div className="text-sm font-semibold text-gray-500">Active Problems</div>
          <div className="text-3xl font-bold text-gray-800 mt-1 flex items-center">
            {stats.activeProblems || 0}
            <FaChartLine className="ml-auto text-purple-500" />
          </div>
        </motion.div>
      </section>
      
      {/* ------------------ Lawyer Verification Queue ------------------ */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Lawyer Verification Queue
          ({pendingLawyers.length} Pending)
        </h2>

        {pendingLawyers.length === 0 ? (
          <p className="text-gray-500 bg-gray-50 p-6 rounded-lg text-center">
            All lawyer profiles are currently verified. Great job!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingLawyers.map(lawyer => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Note: LawyerProfileCard is reused here, but we pass custom admin actions */}
                <LawyerProfileCard 
                  lawyer={lawyer} 
                  showActions={false} // Disable default contact button
                />
                <div className="flex justify-between mt-3 space-x-3">
                  <motion.button
                    className="flex-1 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
                    onClick={() => handleVerification(lawyer.id, true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Approve
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors"
                    onClick={() => handleVerification(lawyer.id, false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reject
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
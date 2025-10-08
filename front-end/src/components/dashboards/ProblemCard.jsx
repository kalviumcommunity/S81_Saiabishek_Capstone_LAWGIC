import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaArrowRight, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProblemCard = ({ problem, userRole }) => {
  const { id, title, description, category, status, date } = problem;

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  };

  // Determine the action button text and link based on the user's role
  const actionText = userRole === 'lawyer' ? 'View & Respond' : 'View Details';
  const actionLink = `/problem/${id}`; // Link to the specific problem detail page

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
        <span 
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            status === 'Open' ? 'bg-green-100 text-green-800' : 
            status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-gray-100 text-gray-800'
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaTag className="mr-1.5 text-blue-500" />
            {category}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1.5 text-blue-500" />
            Posted: {date}
          </span>
        </div>
      </div>

      <Link
        to={actionLink}
        className="flex items-center justify-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {actionText}
        <FaArrowRight className="ml-2 w-3 h-3" />
      </Link>
      
      {/* Example of showing chat indicator for client dashboard */}
      {userRole === 'client' && status === 'In Progress' && (
        <div className="mt-3 text-center text-sm text-blue-600 flex items-center justify-center">
          <FaComment className="mr-2" />
          Ongoing Conversation
        </div>
      )}
    </motion.div>
  );
};

export default ProblemCard;
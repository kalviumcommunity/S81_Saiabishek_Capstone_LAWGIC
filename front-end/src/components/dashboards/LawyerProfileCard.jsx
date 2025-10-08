import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

const LawyerProfileCard = ({ lawyer }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={lawyer.profilePic} 
          alt={`${lawyer.name}'s profile`} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-800">{lawyer.name}</h3>
          <p className="text-sm text-gray-500">{lawyer.specialization}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{lawyer.bio}</p>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-1" />
          <span>{lawyer.location}</span>
        </div>
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span>{lawyer.rating} ({lawyer.reviews} reviews)</span>
        </div>
      </div>
      <motion.button
        className="w-full bg-green-500 text-white font-bold py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCommentDots className="mr-2" />
        Contact
      </motion.button>
    </motion.div>
  );
};

export default LawyerProfileCard;
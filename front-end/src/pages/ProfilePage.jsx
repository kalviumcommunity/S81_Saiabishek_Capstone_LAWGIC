import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getLawyerProfiles } from '../api/api';
import { FaMapMarkerAlt, FaStar, FaUserTie } from 'react-icons/fa';

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      // In a real app, this would be a more specific API call,
      // e.g., /api/profiles/${id}
      const res = await getLawyerProfiles(); 
      const foundProfile = res.data.find(p => p.id === id);
      if (foundProfile) {
        setProfile(foundProfile);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center py-20">Profile not found.</div>;
  }

  return (
    <motion.div 
      className="container mx-auto py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <motion.img 
          src={profile.profilePic || "https://via.placeholder.com/150"}
          alt={`${profile.name}'s profile`}
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{profile.name}</h1>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-lg text-gray-600 mb-4">
            <FaUserTie className="text-blue-500" />
            <span>{profile.specialization}</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{profile.bio}</p>

          <div className="flex items-center justify-center md:justify-start space-x-6 text-gray-500">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <FaMapMarkerAlt className="text-blue-500" />
              <span>{profile.location}</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <FaStar className="text-yellow-500" />
              <span>{profile.rating} ({profile.reviews} reviews)</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <motion.button
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact {profile.name}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
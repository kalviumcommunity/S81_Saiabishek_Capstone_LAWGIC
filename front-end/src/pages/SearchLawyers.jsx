import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';
import LawyerProfileCard from "../components/dashboards/LawyerProfileCard";
import { getLawyerProfiles } from '../api/api';

const SearchLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ specialization: '', location: '' });

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await getLawyerProfiles();
        setLawyers(response.data);
        setFilteredLawyers(response.data);
      } catch (error) {
        console.error("Failed to fetch lawyers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLawyers();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let tempLawyers = lawyers.filter(lawyer => {
        const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialization = filter.specialization === '' || lawyer.specialization === filter.specialization;
        const matchesLocation = filter.location === '' || lawyer.location === filter.location;
        return matchesSearch && matchesSpecialization && matchesLocation;
      });
      setFilteredLawyers(tempLawyers);
    };
    applyFilters();
  }, [searchTerm, filter, lawyers]);

  if (loading) return <div className="text-center py-20">Loading lawyers...</div>;

  return (
    <motion.div 
      className="container mx-auto py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Find Your Lawyer</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <div className="relative flex-grow">
          <input 
            type="text"
            placeholder="Search by name or specialization..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select 
          className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter.specialization}
          onChange={(e) => setFilter({ ...filter, specialization: e.target.value })}
        >
          <option value="">All Specializations</option>
          <option value="Family Law">Family Law</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Corporate Law">Corporate Law</option>
          <option value="Property Law">Property Law</option>
        </select>
        <select 
          className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map((lawyer, index) => (
            <motion.div 
              key={lawyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <LawyerProfileCard lawyer={lawyer} />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 col-span-3">No lawyers found matching your criteria.</p>
        )}
      </div>
    </motion.div>
  );
};

export default SearchLawyers;
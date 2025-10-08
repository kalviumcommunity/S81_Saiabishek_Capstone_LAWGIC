import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postNewProblem } from '../api/api';

const PostProblem = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await postNewProblem(formData);
      alert("Problem posted successfully!");
      navigate('/client-dashboard');
    } catch (error) {
      console.error("Failed to post problem:", error);
      alert("Failed to post problem. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="container mx-auto py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Post a New Legal Problem</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Problem Title</label>
          <input 
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Landlord not returning my deposit"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Category</label>
          <select 
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Property Law">Property Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Detailed Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your legal issue in detail."
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Submitting..." : "Post Problem"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default PostProblem;
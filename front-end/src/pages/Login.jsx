import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would call your backend login API
    console.log("Login submitted:", formData);
    
    // Mocking a successful login and redirecting based on role
    // In a real app, you'd get the role from the API response
    const role = formData.email.includes('lawyer') ? 'lawyer' : 'client';
    if (role === 'lawyer') {
      navigate('/lawyer-dashboard');
    } else {
      navigate('/client-dashboard');
    }
  };

  return (
    <motion.div 
      className="flex items-center justify-center min-h-[calc(100vh-6rem)] py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Lawgic</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
            <input 
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <motion.a 
            href="/register" 
            className="text-blue-600 font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
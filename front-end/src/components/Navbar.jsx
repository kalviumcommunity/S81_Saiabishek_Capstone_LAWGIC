import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-8 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          <motion.span whileHover={{ scale: 1.1 }}>Lawgic</motion.span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search-lawyers">Find Lawyers</NavLink>
          <NavLink to="/post-problem">Post Problem</NavLink>
          <NavLink to="/login" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
            Login
          </NavLink>
        </div>
        {/* Mobile menu and user-specific links would be added here */}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link to={to} {...props}>
    <motion.span whileHover={{ scale: 1.1, color: '#3182CE' }} className="text-gray-600 font-medium">
      {children}
    </motion.span>
  </Link>
);

export default Navbar;
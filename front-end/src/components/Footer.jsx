import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-gray-300 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Lawgic</h3>
            <p className="text-sm">
              Connecting clients with trusted legal professionals. Your journey to justice starts here.
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Contact & Social Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a 
                href="mailto:contact@lawgic.com" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
            <p className="text-sm">Email: contact@lawgic.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Lawgic. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
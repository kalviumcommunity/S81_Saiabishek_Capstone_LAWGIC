import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LawyerDashboard from './pages/LawyerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import AdminDashboard from "./pages/AdminDashboard";
import SearchLawyers from './pages/SearchLawyers';
import PostProblem from './pages/PostProblem';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <div className="min-h-screen pt-16">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search-lawyers" element={<SearchLawyers />} />
              <Route path="/post-problem" element={<PostProblem />} />
              
              {/* Protected Routes */}
              <Route path="/client-dashboard" element={<PrivateRoute role="client"><ClientDashboard /></PrivateRoute>} />
              <Route path="/lawyer-dashboard" element={<PrivateRoute role="lawyer"><LawyerDashboard /></PrivateRoute>} />
              <Route path="/admin-dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
              <Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path="/chat/:id" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
              
              {/* Catch-all for 404 */}
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </div>
        </AnimatePresence>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
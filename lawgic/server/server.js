const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const lawyerRoutes = require('./routes/lawyerRoutes'); // Import lawyer routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes); 
app.use('/api/lawyers', lawyerRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/lawgic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);       // For user login, registration, and JWT
app.use('/api/lawyers', lawyerRoutes);   // For lawyer-related endpoints

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

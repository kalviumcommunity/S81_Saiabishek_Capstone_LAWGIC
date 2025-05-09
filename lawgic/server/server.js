const express = require('express');
const mongoose = require('mongoose');
const lawyerRoutes = require('./routes/lawyerRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON request bodies

// MongoDB connection string
const dbURI = 'mongodb://127.0.0.1:27017/lawgic'; // Change this to your MongoDB URI if using a cloud database like MongoDB Atlas

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,    // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true // Use the new unified topology engine to avoid deprecation warnings
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // Exit the process if MongoDB fails to connect
});

// Use routes
app.use('/api/lawyers', lawyerRoutes);

// Start the server
app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});

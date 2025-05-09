const express = require('express');
const app = express();
const lawyerRoutes = require('./routes/lawyerRoutes'); // adjust path if needed

// Middlewares
app.use(express.json());

// Routes
app.use('/api/lawyers', lawyerRoutes);

// Server listener
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

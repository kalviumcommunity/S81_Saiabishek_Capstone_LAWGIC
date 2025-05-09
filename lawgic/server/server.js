const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const lawyerRoutes = require('./routes/lawyerRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/lawyers', lawyerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose');

// Schema for the Lawyer model
const lawyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Export the model
module.exports = mongoose.model('Lawyer', lawyerSchema);

const mongoose = require('mongoose');

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
  cases: [String]  // Example array of past cases
});

module.exports = mongoose.model('Lawyer', lawyerSchema);


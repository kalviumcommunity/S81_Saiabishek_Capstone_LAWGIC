// models/Lawyer.js
const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  contact: String
});

module.exports = mongoose.model('Lawyer', lawyerSchema);

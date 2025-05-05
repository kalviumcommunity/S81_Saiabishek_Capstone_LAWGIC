const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialization: { type: String },
  experience: { type: Number }
});

module.exports = mongoose.model('Lawyer', lawyerSchema);

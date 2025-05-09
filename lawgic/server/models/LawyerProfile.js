const mongoose = require("mongoose");

const lawyerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: Number,
  location: String,
  licenseNumber: String,
  pastCases: [{
    title: String,
    description: String,
    outcome: String,
    year: Number,
  }]
}, { timestamps: true });

module.exports = mongoose.model("LawyerProfile", lawyerProfileSchema);

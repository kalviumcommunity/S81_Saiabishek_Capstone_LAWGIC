const mongoose = require("mongoose");

const lawyerProfileSchema = new mongoose.Schema(
  {
    // Linked user (lawyer account) - One-to-One relationship
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // ensure one profile per user
    },

    // Main specialization area (e.g., Criminal, Civil, etc.)
    specialization: {
      type: String,
      required: true,
      trim: true,
    },

    experience: {
      type: Number,
      min: 0,
    },

    location: {
      type: String,
      trim: true,
    },

    licenseNumber: {
      type: String,
      trim: true,
      unique: true,
      sparse: true, // allows multiple nulls
    },

    // Past cases handled by the lawyer
    pastCases: [
      {
        title: { type: String, required: true },
        description: String,
        outcome: String,
        year: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("LawyerProfile", lawyerProfileSchema);

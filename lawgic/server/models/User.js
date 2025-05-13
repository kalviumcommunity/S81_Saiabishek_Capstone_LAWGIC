const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "lawyer", "admin"],
      default: "user",
    },
    phone: String,
    bio: String,

    // Reference to lawyer profile (only if the role is 'lawyer')
    lawyerProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LawyerProfile",
    },

    // Optional: you could store problems here, but typically referenced from the other side
    // legalProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "LegalProblem" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

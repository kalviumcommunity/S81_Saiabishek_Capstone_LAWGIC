const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "closed", "in-progress"],
    default: "open",
  },
  assignedLawyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LawyerProfile",
  },
}, { timestamps: true });

module.exports = mongoose.model("Case", caseSchema);

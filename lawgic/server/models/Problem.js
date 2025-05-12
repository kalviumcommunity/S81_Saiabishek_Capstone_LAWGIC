const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedBy: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Problem", problemSchema);

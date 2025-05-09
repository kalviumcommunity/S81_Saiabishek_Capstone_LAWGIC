const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  name: String,
  phone: String,
  bio: String,
  role: String, // 'lawyer' or 'client'
});

module.exports = mongoose.model("User", userSchema);

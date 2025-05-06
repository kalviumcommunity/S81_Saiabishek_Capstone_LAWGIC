const mongoose = require('mongoose');

const legalProblemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LegalProblem', legalProblemSchema);

const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    category: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Problem', problemSchema);

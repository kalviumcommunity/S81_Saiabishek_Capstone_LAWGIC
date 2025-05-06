const express = require('express');
const LegalProblem = require('../models/LegalProblem');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

// Protected POST route to post a legal problem
router.post('/post', requireAuth, async (req, res) => {
    try {
        const { title, description, category } = req.body;

        const newProblem = new LegalProblem({
            userId: req.user._id, // comes from decoded JWT in authMiddleware
            title,
            description,
            category,
            datePosted: new Date()
        });

        await newProblem.save();
        res.status(201).json({ message: 'Problem posted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

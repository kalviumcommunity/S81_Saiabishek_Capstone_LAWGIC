const express = require('express');
const router = express.Router();
const Lawyer = require('../models/Lawyer'); // Adjust path if needed

// GET all lawyers
router.get('/', async (req, res) => {
  try {
    const lawyers = await Lawyer.find({});
    res.status(200).json(lawyers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Lawyer = require('../models/Lawyer');

// GET: Fetch all lawyers
router.get('/', async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).json(lawyers);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST: Add a new lawyer
router.post('/', async (req, res) => {
  const { name, specialization, experience, email } = req.body;

  try {
    const newLawyer = new Lawyer({ name, specialization, experience, email });
    await newLawyer.save();
    res.status(201).json({ message: 'Lawyer created successfully', lawyer: newLawyer });
  } catch (error) {
    res.status(500).json({ message: 'Error creating lawyer', error: error.message });
  }
});

module.exports = router;

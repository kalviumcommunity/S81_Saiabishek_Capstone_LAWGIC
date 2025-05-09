const Lawyer = require('../models/Lawyer');

// @desc    Get all lawyers
// @route   GET /api/lawyers
// @access  Public
const getLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).json(lawyers);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  getLawyers
};


const Lawyer = require('../models/Lawyer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, specialization, experience } = req.body;

    // Check if user already exists
    const existingLawyer = await Lawyer.findOne({ email });
    if (existingLawyer) {
      return res.status(400).json({ error: 'Lawyer already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new lawyer
    const lawyer = new Lawyer({
      name,
      email,
      password: hashedPassword,
      specialization,
      experience
    });

    await lawyer.save();

    // Create JWT token
    const token = jwt.sign({ id: lawyer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
      message: 'Lawyer registered successfully',
      lawyer: {
        id: lawyer._id,
        name: lawyer.name,
        email: lawyer.email,
        specialization: lawyer.specialization,
        experience: lawyer.experience
      },
      token
    });

  } catch (err) {
    res.status(500).json({ error: 'Server error during signup' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const lawyer = await Lawyer.findOne({ email });
    if (!lawyer) {
      return res.status(404).json({ error: 'Lawyer not found' });
    }

    const isMatch = await bcrypt.compare(password, lawyer.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: lawyer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: 'Login successful',
      lawyer: {
        id: lawyer._id,
        name: lawyer.name,
        email: lawyer.email,
        specialization: lawyer.specialization,
        experience: lawyer.experience
      },
      token
    });

  } catch (err) {
    res.status(500).json({ error: 'Server error during login' });
  }
};

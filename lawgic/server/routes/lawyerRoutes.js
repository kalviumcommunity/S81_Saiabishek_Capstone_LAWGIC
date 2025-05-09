const express = require('express');
const router = express.Router();
const { getLawyers } = require('../controllers/lawyerController');

router.get('/', getLawyers);

module.exports = router;

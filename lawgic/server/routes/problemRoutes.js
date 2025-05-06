const express = require('express');
const { createProblem, getProblems } = require('../controllers/problemControllers');
const requireAuth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', requireAuth, createProblem);
router.get('/', getProblems);

module.exports = router;

const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// POST a new legal problem
router.post("/", async (req, res) => {
  const { title, description, postedBy } = req.body;
  const newProblem = new Problem({ title, description, postedBy });
  await newProblem.save();
  res.status(201).json(newProblem);
});

// GET all legal problems
router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.status(200).json(problems);
});

module.exports = router;

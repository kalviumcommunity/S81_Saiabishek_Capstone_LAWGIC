const Problem = require('./problemControllers');

exports.createProblem = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const problem = await Problem.create({
            userId: req.user.id,
            title,
            description,
            category
        });
        res.status(201).json(problem);
    } catch (err) {
        res.status(400).json({ error: 'Could not post problem' });
    }
};

exports.getProblems = async (req, res) => {
    const problems = await Problem.find().populate('userId', 'name');
    res.status(200).json(problems);
};

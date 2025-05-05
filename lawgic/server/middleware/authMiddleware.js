const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header exists and has a Bearer token
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized - Token missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user info to request so we can use it in the route
    req.user = decoded;

    next(); // pass control to the next middleware/route
  } catch (err) {
    console.error(err);
    return res.status(403).json({ error: 'Forbidden - Invalid token' });
  }
};

module.exports = requireAuth;

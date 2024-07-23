const authMiddleware = (req, res, next) => {
    // Simple token-based authentication
    const token = req.headers['authorization'];
    if (token && token === 'Bearer f9a939d80980a8d09bbf0090') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;

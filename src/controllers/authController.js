const { login } = require('../services/authService');

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token, isAdmin } = await login(username, password);
        res.json({ token, isAdmin });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

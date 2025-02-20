const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return { token, isAdmin: user.isAdmin };
};

module.exports = { login };

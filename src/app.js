const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

// Routes
// app.use('/api/users', require('./routes/userRoutes'));

// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;

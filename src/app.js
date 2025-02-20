const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config({ path: "./.env" });

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/menu', require('./routes/menuRoutes'));
app.use('/api/qrcode', require('./routes/qrRoutes'));

// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Export app (if using separate server.js)
module.exports = app;

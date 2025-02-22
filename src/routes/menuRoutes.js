const express = require('express');
const router = express.Router();
const {
    getMenu,
    getMenuItem,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    generateQRCode
} = require("../controllers/menuController");
const authMiddleware = require('../middleware/authMiddleware');

// Public Routes
router.get("/", getMenu);
router.get("/:id", getMenuItem);

// Protected Routes (Only Admins)
router.post("/", authMiddleware, addMenuItem);
router.put("/:id", authMiddleware, updateMenuItem);
router.delete("/:id", authMiddleware, deleteMenuItem);

module.exports = router;

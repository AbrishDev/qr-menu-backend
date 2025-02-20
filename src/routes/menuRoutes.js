const express = require('express');
const router = express.Router();
const { getMenu, addMenuItem } = require('../controllers/menuController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getMenu);
router.post('/', authMiddleware, addMenuItem);

module.exports = router;

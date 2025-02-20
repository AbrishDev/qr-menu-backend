const express = require('express');
const router = express.Router();
const { getQRCode } = require('../controllers/qrController');

router.get('/:menuId', getQRCode);

module.exports = router;

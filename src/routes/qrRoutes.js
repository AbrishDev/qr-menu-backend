const express = require('express');
const router = express.Router();
const { getQRCode } = require('../controllers/qrController');

router.get('/', getQRCode);

module.exports = router;

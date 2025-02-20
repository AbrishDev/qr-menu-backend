const { generateQRCode } = require('../services/qrService');

exports.getQRCode = async (req, res) => {
    try {
        const qrCodeUrl = await generateQRCode(req.params.menuId);
        res.json({ qrCode: qrCodeUrl });
    } catch (error) {
        res.status(500).json({ message: 'QR Code Generation Failed' });
    }
};

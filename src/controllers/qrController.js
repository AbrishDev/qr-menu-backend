const { generateQRCode } = require("../services/qrService");

exports.getQRCode = async (req, res) => {
    try {
        const qrCodeUrl = await generateQRCode();
        res.json({ menuUrl: `${process.env.CLIENT_URL}/menu`, qrCode: qrCodeUrl });
    } catch (error) {
        res.status(500).json({ message: "QR Code Generation Failed" });
    }
};

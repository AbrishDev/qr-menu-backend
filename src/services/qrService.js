const QRCode = require("qrcode");

const generateQRCode = async () => {
    const menuUrl = `${process.env.CLIENT_URL}/menu`; // Full menu URL
    return await QRCode.toDataURL(menuUrl);
};

module.exports = { generateQRCode };

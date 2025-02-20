const QRCode = require('qrcode');

const generateQRCode = async (menuId) => {
    return await QRCode.toDataURL(`https://yourwebsite.com/menu/${menuId}`);
};

module.exports = { generateQRCode };

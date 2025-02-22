const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

// console.log("MONGO_URI:", process.env.MONGO_URI);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
afterAll(async () => {
    await mongoose.connection.close(); // ✅ Close DB connection after all tests
  });
module.exports = connectDB;
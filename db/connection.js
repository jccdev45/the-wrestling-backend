require("dotenv").config();
const mongoose = require("mongoose");

let MONGODB_URI = process.env.DATABASE_URL;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.error("Connection error", e.message));

module.exports = mongoose.connection;

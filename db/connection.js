if (process.env.NODE_ENV !== "production") require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

let MONGODB_URI =
  process.env.DATABASE_URL || "mongodb://localhost/wrestlingDatabase";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.error("Connection error", e.message));

module.exports = mongoose.connection;

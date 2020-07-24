if (process.env.NODE_ENV !== "production") require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.error("Connection error", e.message));

module.exports = mongoose.connection;

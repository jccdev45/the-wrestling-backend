const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Match = new Schema(
  {
    typePrimary: String,
    typeSecondary: Array,
    participants: Array,
    show: String,
    title: Array,
    outcome: String,
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("matches", Match);

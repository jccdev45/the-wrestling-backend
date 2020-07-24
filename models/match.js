const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Match = new Schema(
  {
    typePrimary: { type: String, required: true },
    typeSecondary: { type: Array, required: false },
    participants: { type: Array, required: true },
    show: { type: String, required: true },
    title: { type: Array, required: false },
    outcome: { type: String, required: true },
    date: { type: String, required: false },
  },
  { timestamps: true },
  { usePushEach: true }
);

module.exports = mongoose.model("matches", Match);

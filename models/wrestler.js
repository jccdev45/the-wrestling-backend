const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wrestler = new Schema(
  {
    name: { type: String, required: false },
    dob: { type: String, required: false },
    nationality: { type: String, required: false },
    ringNames: { type: Array, required: true },
    promotions: { type: Array, required: false },
    championships: { type: Array, required: false },
  },
  { timestamps: true },
  { usePushEach: true}
);

module.exports = mongoose.model("wrestlers", Wrestler);

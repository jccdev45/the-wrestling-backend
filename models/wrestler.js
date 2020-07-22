const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wrestler = new Schema(
  {
    name: String,
    dob: String,
    nationality: String,
    ringNames: Array,
    promotions: Array,
    championships: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("wrestlers", Wrestler);

const Mongoose = require("mongoose");

const sampleSchema = require("./sample");

module.exports = {
  Sample: Mongoose.model("User", sampleSchema),
};

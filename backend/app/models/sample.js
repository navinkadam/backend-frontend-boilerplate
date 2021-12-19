const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const sampleSchema = new Schema(
  {
    objectRef: { type: Mongoose.Types.ObjectId, ref: "User", required: true },
    number: Number,
    String: {
      Types: String,
      enum: [],
    },
    boolean: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = sampleSchema;

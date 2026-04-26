const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    worker_id: {
      type: String,
      required: true,
      unique: true, // W1, W2...
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Worker", workerSchema);
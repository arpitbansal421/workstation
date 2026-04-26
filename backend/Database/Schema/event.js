const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      required: true,
      index: true, // important for sorting
    },

    worker_id: {
      type: String,
      required: true,
      index: true,
    },

    workstation_id: {
      type: String,
      required: true,
      index: true,
    },

    event_type: {
      type: String,
      enum: ["working", "idle", "absent", "product_count"],
      required: true,
    },

    confidence: {
      type: Number,
      default: 1,
    },

    count: {
      type: Number,
      default: 0, // used only for product_count
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
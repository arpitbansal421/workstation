const mongoose = require('mongoose')
const factorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Sample Factory",
    },

    total_workers: {
      type: Number,
      default: 6,
    },

    total_workstations: {
      type: Number,
      default: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Factory", factorySchema);
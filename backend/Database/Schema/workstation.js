const mongoose = require('mongoose')
const workstationSchema = new mongoose.Schema(
  {
    workstation_id: {
      type: String,
      required: true,
      unique: true, // S1, S2...
    },
    name: {
      type: String,
    },
    type: {
      type: String, // optional (assembly, packing etc.)
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workstation", workstationSchema);
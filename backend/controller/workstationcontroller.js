const Workstation = require("../Database/Schema/workstation");
const Event = require('../Database/Schema/event')

 const getWorkstationMetrics = async (req, res) => {
  try {
    const stations = await Workstation.find();
    const result = [];

    for (let station of stations) {
      const events = await Event.find({
        workstation_id: station.workstation_id,
      }).sort({ timestamp: 1 });

      let occupancyTime = 0;
      let idleTime = 0;
      let totalUnits = 0;

      for (let i = 0; i < events.length - 1; i++) {
        const current = events[i];
        const next = events[i + 1];

        const diff = (new Date(next.timestamp) - new Date(current.timestamp)) / (1000 * 60);

        if (current.event_type === "working") {
          occupancyTime += diff;
        } else if (current.event_type === "idle") {
          idleTime += diff;
        }
      }

      for (let event of events) {
        if (event.event_type === "product_count") {
          totalUnits += event.count || 0;
        }
      }

      const totalTime = occupancyTime + idleTime;

      result.push({
        workstation_id: station.workstation_id,
        name: station.name,
        occupancyTime,
        utilization: totalTime ? (occupancyTime / totalTime) * 100 : 0,
        totalUnits,
        throughput: occupancyTime ? (totalUnits / (occupancyTime / 60)) : 0,
      });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getWorkstationMetrics}
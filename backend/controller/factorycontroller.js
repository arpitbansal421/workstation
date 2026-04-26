const Event = require('../Database/Schema/event')

const getFactoryMetrics = async (req, res) => {
  try {
    const events = await Event.find().sort({ timestamp: 1 });

    let totalWorkingTime = 0;
    let totalIdleTime = 0;
    let totalUnits = 0;

    for (let i = 0; i < events.length - 1; i++) {
      const current = events[i];
      const next = events[i + 1];

      const diff = (new Date(next.timestamp) - new Date(current.timestamp)) / (1000 * 60);

      if (current.event_type === "working") {
        totalWorkingTime += diff;
      } else if (current.event_type === "idle") {
        totalIdleTime += diff;
      }
    }

    for (let event of events) {
      if (event.event_type === "product_count") {
        totalUnits += event.count || 0;
      }
    }

    const totalTime = totalWorkingTime + totalIdleTime;

    res.json({
      totalProduction: totalUnits,
      totalWorkingTime,
      avgUtilization: totalTime ? (totalWorkingTime / totalTime) * 100 : 0,
      avgProductionRate: totalWorkingTime
        ? totalUnits / (totalWorkingTime / 60)
        : 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports ={getFactoryMetrics}
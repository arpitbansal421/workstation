const Worker = require("../Database/Schema/worker");
const Workstation = require("../Database/Schema/workstation");
const Event = require("../Database/Schema/event");

const seedData = async (req, res) => {
  try {
    await Worker.deleteMany();
    await Workstation.deleteMany();
    await Event.deleteMany();

    const workers = [];
    for (let i = 1; i <= 6; i++) {
      workers.push({
        worker_id: `W${i}`,
        name: `Worker ${i}`,
      });
    }
    await Worker.insertMany(workers);

    const workstations = [];
    for (let i = 1; i <= 6; i++) {
      workstations.push({
        workstation_id: `S${i}`,
        name: `Station ${i}`,
      });
    }
    await Workstation.insertMany(workstations);

    const events = [];
    const baseTime = new Date("2026-01-15T09:00:00Z");

    for (let i = 1; i <= 6; i++) {
      let currentTime = new Date(baseTime);

      for (let j = 0; j < 3 + i; j++) {
        events.push({
          timestamp: new Date(currentTime),
          worker_id: `W${i}`,
          workstation_id: `S${i}`,
          event_type: "working",
        });

        const workingGap = (5 + Math.floor(Math.random() * 10)) * 60000;
        currentTime = new Date(currentTime.getTime() + workingGap);

        events.push({
          timestamp: new Date(currentTime),
          worker_id: `W${i}`,
          workstation_id: `S${i}`,
          event_type: "product_count",
          count: Math.floor(Math.random() * 6) + 1,
        });

        const afterProductGap =
          (5 + Math.floor(Math.random() * 10)) * 60000;
        currentTime = new Date(currentTime.getTime() + afterProductGap);

        if (Math.random() > 0.3) {
          events.push({
            timestamp: new Date(currentTime),
            worker_id: `W${i}`,
            workstation_id: `S${i}`,
            event_type: "idle",
          });

          const idleGap =
            (5 + Math.floor(Math.random() * 10)) * 60000;
          currentTime = new Date(currentTime.getTime() + idleGap);
        }
      }
    }

    await Event.insertMany(events);

    res.status(200).json({
      message: "Database seeded successfully",
      workers: workers.length,
      workstations: workstations.length,
      events: events.length,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { seedData };
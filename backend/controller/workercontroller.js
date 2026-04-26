    const Worker = require("../Database/Schema/worker");
    const Event = require("../Database/Schema/event");

    const getWorkerMetrics = async (req, res) => {
    try {
        const workers = await Worker.find();
        const result = [];

        for (let worker of workers) {
        const events = await Event.find({
            worker_id: worker.worker_id,
        }).sort({ timestamp: 1 });

        let workingTime = 0;
        let idleTime = 0;
        let totalUnits = 0;

        for (let i = 0; i < events.length - 1; i++) {
            const current = events[i];
            const next = events[i + 1];

            const diff = (new Date(next.timestamp) - new Date(current.timestamp)) / (1000 * 60); // in minutes

            if (current.event_type === "working") {
            workingTime += diff;
            } else if (current.event_type === "idle") {
            idleTime += diff;
            }
        }

        // production
        for (let event of events) {
            if (event.event_type === "product_count") {
            totalUnits += event.count || 0;
            }
        }

        const totalTime = workingTime + idleTime;

        result.push({
            worker_id: worker.worker_id,
            name: worker.name,
            workingTime,
            idleTime,
            utilization: totalTime ? (workingTime / totalTime) * 100 : 0,
            totalUnits,
            unitsPerHour: workingTime ? (totalUnits / (workingTime / 60)) : 0,
        });
        }

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    module.exports= {getWorkerMetrics}
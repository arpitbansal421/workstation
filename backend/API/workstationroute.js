const express = require("express");
const router = express.Router();

const { seedData } = require("../controller/seedcontroller");
const {getWorkerMetrics} = require("../controller/workercontroller")
const {getFactoryMetrics} = require("../controller/factorycontroller")
const {getWorkstationMetrics} = require("../controller/workstationcontroller")

// endpoint
router.post("/seeddata", seedData);

//get API call
router.get("/getWorkerMetrics",getWorkerMetrics)
router.get("/getFactoryMetrics",getFactoryMetrics);
router.get("/getWorkstationMetrics",getWorkstationMetrics);


module.exports = router; 
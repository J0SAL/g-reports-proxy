const express = require("express");
const router = express.Router();

const trafficController = require("../controllers/trafficController");

router.get("/google-report", trafficController.fetchNetworkTraffic);
module.exports = router;

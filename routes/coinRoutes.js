const express = require("express");
const router = express.Router();
const { rewardSeller } = require("../controllers/coinController");

router.post("/reward", rewardSeller);

module.exports = router;

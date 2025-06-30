const express = require("express");
const router = express.Router();
const { getWeeklyTopSellers, getFeaturedIDs } = require("../controllers/statsController");

router.get("/top-sellers", getWeeklyTopSellers);
router.get("/featured-ids", getFeaturedIDs);

module.exports = router;

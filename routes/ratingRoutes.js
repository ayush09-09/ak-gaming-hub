const express = require("express");
const router = express.Router();
const { submitRating, getAverageRating, getMyRatings } = require("../controllers/ratingController");
const { protect } = require("../middleware/authMiddleware");

router.post("/submit", protect, submitRating);
router.get("/avg/:sellerId", getAverageRating);
router.get("/mine", protect, getMyRatings);

module.exports = router;

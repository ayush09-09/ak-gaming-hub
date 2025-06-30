const express = require("express");
const router = express.Router();
const { generateReferral, useReferral, getReferralCode } = require("./controllers/referralController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/generate", protect, generateReferral);
router.post("/use", protect, useReferral);
router.get("/mycode", protect, getReferralCode);

module.exports = router;

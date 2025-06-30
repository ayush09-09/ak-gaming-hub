const express = require("express");
const router = express.Router();
const { relistID } = require("../controllers/idController");
const { protect } = require("../middleware/authMiddleware");

router.post("/relist/:id", protect, relistID);

module.exports = router;

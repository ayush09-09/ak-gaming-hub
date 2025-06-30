const express = require("express");
const router = express.Router();
const { relistID } = require("../controllers/idController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/relist/:id", protect, relistID);

module.exports = router;

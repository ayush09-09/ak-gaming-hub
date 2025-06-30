const express = require("express");
const router = express.Router();
const { toggleWishlist, getWishlist, checkWishlist } = require("../controllers/wishlistController");
const verifyUser = require("../middlewares/authMiddleware");

router.use(verifyUser);

router.post("/toggle", toggleWishlist);
router.get("/", getWishlist);
router.get("/check/:idId", checkWishlist);

module.exports = router;

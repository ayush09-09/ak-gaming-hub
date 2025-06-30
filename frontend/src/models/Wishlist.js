const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  idId: { type: mongoose.Schema.Types.ObjectId, ref: "FreeFireID", required: true },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);

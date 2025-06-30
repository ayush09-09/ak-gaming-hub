const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, maxlength: 300 },
}, { timestamps: true });

module.exports = mongoose.model("SellerRating", ratingSchema);

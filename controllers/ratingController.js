const SellerRating = require("../models/SellerRating");

exports.submitRating = async (req, res) => {
  const { sellerId, rating, review } = req.body;
  const buyerId = req.user._id;

  const alreadyRated = await SellerRating.findOne({ buyerId, sellerId });
  if (alreadyRated) return res.status(400).json({ msg: "You already rated this seller." });

  const newRating = new SellerRating({ sellerId, buyerId, rating, review });
  await newRating.save();
  res.json({ success: true });
};

exports.getAverageRating = async (req, res) => {
  const { sellerId } = req.params;
  const ratings = await SellerRating.find({ sellerId });

  if (ratings.length === 0) return res.json({ avg: 0, count: 0 });

  const total = ratings.reduce((sum, r) => sum + r.rating, 0);
  res.json({ avg: (total / ratings.length).toFixed(1), count: ratings.length });
};

exports.getMyRatings = async (req, res) => {
  const sellerId = req.user._id;
  const ratings = await SellerRating.find({ sellerId }).populate("buyerId", "name");
  res.json(ratings);
};

const Wishlist = require("../models/Wishlist");

exports.toggleWishlist = async (req, res) => {
  const { idId } = req.body;
  const userId = req.user._id;

  const exists = await Wishlist.findOne({ user: userId, idId });

  if (exists) {
    await Wishlist.deleteOne({ user: userId, idId });
    return res.json({ saved: false });
  } else {
    await Wishlist.create({ user: userId, idId });
    return res.json({ saved: true });
  }
};

exports.getWishlist = async (req, res) => {
  const userId = req.user._id;
  const wishlist = await Wishlist.find({ user: userId }).populate("idId");
  res.json(wishlist.map(item => item.idId));
};

exports.checkWishlist = async (req, res) => {
  const userId = req.user._id;
  const { idId } = req.params;

  const exists = await Wishlist.findOne({ user: userId, idId });
  res.json({ saved: !!exists });
};

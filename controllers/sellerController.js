import SellerStats from '../models/SellerStats.js';
import FreeFireID from '../models/FreeFireID.js';

export const getSellerStats = async (req, res) => {
  const stats = await SellerStats.findOne({ userId: req.user._id }) || { akCoins: 0, totalEarnings: 0 };
  res.json(stats);
};

export const getSellerListings = async (req, res) => {
  const listings = await FreeFireID.find({ sellerId: req.user._id });
  res.json(listings);
};

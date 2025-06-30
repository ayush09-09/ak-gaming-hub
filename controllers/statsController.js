const Order = require("../models/Order");
const User = require("../models/User");
const FFID = require("../models/FFID");

exports.getWeeklyTopSellers = async (req, res) => {
  try {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const sellers = await Order.aggregate([
      { $match: { createdAt: { $gte: oneWeekAgo } } },
      { $group: { _id: "$sellerId", totalSales: { $sum: 1 } } },
      { $sort: { totalSales: -1 } },
      { $limit: 5 }
    ]);

    const result = await Promise.all(
      sellers.map(async (seller) => {
        const user = await User.findById(seller._id).select("name avatar");
        return { ...seller, sellerName: user.name, avatar: user.avatar };
      })
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch top sellers" });
  }
};

exports.getFeaturedIDs = async (req, res) => {
  try {
    const featured = await FFID.find({ sold: false })
      .sort({ views: -1 }) // assuming views tracked
      .limit(5);
    res.status(200).json(featured);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch featured IDs" });
  }
};

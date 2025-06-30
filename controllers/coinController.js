const User = require("../models/User");
const FFID = require("../models/FFID");
const { calculateCoinReward } = require("../utils/rewardUtils");

exports.rewardSeller = async (req, res) => {
  try {
    const { ffidId } = req.body;

    const ffid = await FFID.findById(ffidId);
    if (!ffid) return res.status(404).json({ msg: "ID not found" });

    const reward = calculateCoinReward(ffid);
    if (reward === 0) return res.status(200).json({ msg: "ID doesn't qualify", reward: 0 });

    await User.findByIdAndUpdate(ffid.sellerId, {
      $inc: { coinBalance: reward }
    });

    res.status(200).json({ msg: "Coins rewarded", reward });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const Referral = require("../models/Referral");
const User = require("../models/User");

exports.generateReferral = async (req, res) => {
  const referrerId = req.user._id;
  const code = `REF${referrerId.toString().slice(-5)}${Date.now().toString().slice(-4)}`;
  const referral = await Referral.create({ referrerId, code });
  res.json({ code });
};

exports.useReferral = async (req, res) => {
  const { code } = req.body;
  const referredUserId = req.user._id;

  const ref = await Referral.findOne({ code, referredUserId: null });
  if (!ref) return res.status(400).json({ msg: "Invalid or already used code." });

  ref.referredUserId = referredUserId;
  await ref.save();

  // Reward logic
  const referrer = await User.findById(ref.referrerId);
  referrer.akCoins += 10; // Reward 10 coins
  await referrer.save();

  res.json({ success: true });
};

exports.getReferralCode = async (req, res) => {
  const code = await Referral.findOne({ referrerId: req.user._id });
  res.json({ code: code?.code });
};

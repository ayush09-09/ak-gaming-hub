const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  referrerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  referredUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  code: { type: String, unique: true },
  rewardGiven: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Referral", referralSchema);

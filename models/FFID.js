const { calculateCoinReward } = require("../utils/rewardUtils");

const reward = calculateCoinReward(savedFFID);
if (reward > 0) {
  await User.findByIdAndUpdate(savedFFID.sellerId, {
    $inc: { coinBalance: reward }
  });
}

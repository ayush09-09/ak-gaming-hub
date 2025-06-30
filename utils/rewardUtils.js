exports.calculateCoinReward = (ffid) => {
  // Reward only if ID meets the level requirement
  if (ffid.level >= 60) return 5; // 5 coins per qualifying ID
  return 0;
};

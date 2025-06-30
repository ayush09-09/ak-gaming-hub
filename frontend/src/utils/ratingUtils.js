const dummySellerStats = {
  "seller001": {
    totalOrders: 22,
    successfulOrders: 20,
    negativeFeedbacks: 1,
  },
};

export const calculateSellerRating = async (sellerId) => {
  const stats = dummySellerStats[sellerId];
  if (!stats) return 0;

  const successRate = stats.successfulOrders / stats.totalOrders;
  const penalty = stats.negativeFeedbacks * 0.1;
  const rawRating = (successRate * 5) - penalty;

  return Math.max(0, Math.min(5, rawRating));
};

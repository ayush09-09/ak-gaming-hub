import mongoose from 'mongoose';

const sellerStatsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  akCoins: { type: Number, default: 0 },
  totalEarnings: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('SellerStats', sellerStatsSchema);

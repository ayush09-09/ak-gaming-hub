import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FreeFireID' }]
}, { timestamps: true });

export default mongoose.model('Wishlist', wishlistSchema);

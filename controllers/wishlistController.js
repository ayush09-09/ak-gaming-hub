import Wishlist from '../models/Wishlist.js';

export const getWishlist = async (req, res) => {
  const userId = req.user._id;
  const wishlist = await Wishlist.findOne({ userId }).populate('ids');
  res.json(wishlist?.ids || []);
};

export const toggleWishlistItem = async (req, res) => {
  const userId = req.user._id;
  const itemId = req.params.id;
  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = new Wishlist({ userId, ids: [itemId] });
  } else {
    const index = wishlist.ids.indexOf(itemId);
    if (index === -1) {
      wishlist.ids.push(itemId);
    } else {
      wishlist.ids.splice(index, 1);
    }
  }
  await wishlist.save();
  res.json({ success: true, ids: wishlist.ids });
};

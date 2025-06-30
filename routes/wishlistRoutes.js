import express from 'express';
import {
  getWishlist,
  toggleWishlistItem
} from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/', getWishlist);
router.post('/toggle/:id', toggleWishlistItem);

export default router;

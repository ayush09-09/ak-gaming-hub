import express from 'express';
import { getSellerStats, getSellerListings } from '../controllers/sellerController.js';
const router = express.Router();

router.get('/stats', getSellerStats);
router.get('/listings', getSellerListings);

export default router;

import express from 'express';
import { getAllListings, approveListing, rejectListing, getAllUsers } from '../controllers/adminController.js';
import { verifyAdmin } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/listings', verifyAdmin, getAllListings);
router.post('/listings/approve/:id', verifyAdmin, approveListing);
router.post('/listings/reject/:id', verifyAdmin, rejectListing);
router.get('/users', verifyAdmin, getAllUsers);

export default router;

const express = require('express');
const router = express.Router();
const FreeFireID = require('../models/FreeFireID');
const sendWhatsAppNotification = require('../utils/whatsapp');
const { calculateCoinReward } = require('../utils/rewardUtils');
const User = require('../models/User');

// Sell FreeFireID
router.post('/sell', async (req, res) => {
  try {
    const { userID, freeFireID, price, level } = req.body;
    const newID = new FreeFireID({
      userID,
      freeFireID,
      price,
      status: 'available',
      seller: userID,
      isSold: false,
      level // level field for reward logic
    });
    await newID.save();

    // Coin reward logic
    const reward = calculateCoinReward(newID);
    if (reward > 0) {
      await User.findByIdAndUpdate(userID, { $inc: { coinBalance: reward } });
    }

    // WhatsApp notification to admin
    sendWhatsAppNotification('919297505890', `New FreeFire ID listed for sale: ${freeFireID} by user ${userID}`);
    res.json({ message: 'FreeFireID listed for sale!', id: newID, reward });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Market: List all unsold FreeFireIDs
router.get('/market', async (req, res) => {
  const ids = await FreeFireID.find({ isSold: false });
  res.json(ids);
});

// Buy FreeFireID
router.post('/buy/:id', async (req, res) => {
  try {
    const { buyerId } = req.body;
    const id = await FreeFireID.findById(req.params.id);
    if (!id || id.isSold) return res.status(400).json({ error: 'ID not available' });
    id.buyer = buyerId;
    id.isSold = true;
    id.status = 'sold';
    await id.save();
    // WhatsApp notification to admin
    sendWhatsAppNotification('919297505890', `FreeFire ID purchased: ${id.freeFireID} by user ${buyerId}`);
    res.json({ message: 'Purchase successful!', id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// My Purchases
router.get('/my-purchases', async (req, res) => {
  const { userId } = req.query;
  const ids = await FreeFireID.find({ buyer: userId });
  res.json(ids);
});

// My Sales
router.get('/my-sales', async (req, res) => {
  const { userId } = req.query;
  const ids = await FreeFireID.find({ seller: userId });
  res.json(ids);
});

router.post('/create', async (req, res) => {
  const freeFireID = new FreeFireID(req.body);
  await freeFireID.save();
  res.send(freeFireID);
});

router.get('/', async (req, res) => {
  const freeFireIDs = await FreeFireID.find();
  res.send(freeFireIDs);
});

// Test route for checking FreeFireID route
router.get('/test', (req, res) => {
  res.json({ message: 'FreeFireID route working!' });
});

module.exports = router;

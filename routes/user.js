const express = require('express');
const router = express.Router();
const User = require('../../models/user'); // Path fixed for correct model location

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// Test route for checking user route
router.get('/test', (req, res) => {
  res.json({ message: 'User route working!' });
});

module.exports = router;

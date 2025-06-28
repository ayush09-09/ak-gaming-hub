const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
defaultToken = (user) => {
  return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ message: 'All fields required' });
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    const user = await User.create({ username, email, password });
    const token = defaultToken(user);
    res.status(201).json({ success: true, token, user: { id: user._id, username: user.username, email: user.email, coins: user.coins, isAdmin: user.isAdmin } });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = defaultToken(user);
    res.status(200).json({ success: true, token, user: { id: user._id, username: user.username, email: user.email, coins: user.coins, isAdmin: user.isAdmin } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

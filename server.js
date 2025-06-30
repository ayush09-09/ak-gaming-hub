require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/admin');
const uploadRoutes = require('./routes/uploadRoutes');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', uploadRoutes);
app.use("/api/ratings", require("./routes/ratingRoutes"));
app.use("/api/referral", require("./routes/referralRoutes"));
app.use("/api/id", require("./routes/idRoutes"));
app.use("/api/stats", require("./routes/statsRoutes"));
app.use("/api/coins", require("./routes/coinRoutes"));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on PORT: ${PORT}`);
});


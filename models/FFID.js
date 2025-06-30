const mongoose = require('mongoose');

const FFIDSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: Number,
  // ...add other fields as per your app's needs
});

module.exports = mongoose.model('FFID', FFIDSchema);

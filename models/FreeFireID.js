const mongoose = require('mongoose');
const freeFireIDSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  freeFireID: String,
  price: Number,
  status: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  isSold: { type: Boolean, default: false },
  level: { type: Number, required: true } // Added level for reward logic
});
module.exports = mongoose.model('FreeFireID', freeFireIDSchema);

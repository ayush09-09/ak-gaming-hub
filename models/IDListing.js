// models/IDListing.js
const mongoose = require('mongoose')

const IDListingSchema = new mongoose.Schema({
  level: Number,
  price: Number,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  images: [String],
  coinRewarded: Boolean,
  status: { type: String, enum: ['pending', 'approved', 'sold'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('IDListing', IDListingSchema)

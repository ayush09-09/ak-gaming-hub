const mongoose = require('mongoose')

const UploadedIDSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  akCoinsRewarded: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String], // Array of image URLs or file names
    required: true,
    validate: [array => array.length === 5, 'Exactly 5 images required'],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'sold'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('UploadedID', UploadedIDSchema)

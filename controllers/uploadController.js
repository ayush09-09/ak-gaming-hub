const IDListing = require('../models/IDListing')

const uploadID = async (req, res) => {
  try {
    const { level, price } = req.body
    const sellerId = req.user._id // Assuming user is authenticated
    const images = req.files.map((file) => `/uploads/${file.filename}`)

    const listing = new IDListing({
      level,
      price,
      seller: sellerId,
      images,
      coinRewarded: false,
    })

    await listing.save()

    res.status(201).json({ message: 'ID uploaded successfully', listing })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ message: 'Upload failed' })
  }
}

module.exports = { uploadID }

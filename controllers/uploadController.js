const UploadedID = require('../models/UploadedID')

exports.uploadID = async (req, res) => {
  try {
    const { userId, level, price, images } = req.body

    if (!userId || !level || !price || !images || images.length !== 5) {
      return res.status(400).json({ error: 'All fields are required and 5 images must be provided.' })
    }

    const coins = level >= 60 ? 5 : 0

    const newID = new UploadedID({
      user: userId,
      level,
      price,
      images,
      akCoinsRewarded: coins,
    })

    await newID.save()

    res.status(201).json({ message: 'ID uploaded successfully', data: newID })
  } catch (error) {
    console.error('Upload Error:', error)
    res.status(500).json({ error: 'Server error while uploading ID' })
  }
}

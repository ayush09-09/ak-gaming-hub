// File: src/pages/seller/UploadIDForm.jsx

import { useState } from 'react'
import ImageUploader from '@/components/shared/ImageUploader'
import { calculateCoins } from '@/utils/coinUtils'

const UploadIDForm = () => {
  const [level, setLevel] = useState('')
  const [price, setPrice] = useState('')
  const [images, setImages] = useState([])
  const [coins, setCoins] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (images.length < 5) {
      alert('Please upload all 5 required images.')
      return
    }

    const formData = {
      level: Number(level),
      price: Number(price),
      coins,
      images
    }

    console.log('Uploading ID:', formData)
    // TODO: Send this to backend
  }

  const handleLevelChange = (e) => {
    const value = e.target.value
    setLevel(value)
    setCoins(calculateCoins(Number(value)))
  }

  return (
    <section className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Upload New Free Fire ID</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Account Level</label>
          <input
            type="number"
            value={level}
            onChange={handleLevelChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter level (60+ earns coins)"
            required
          />
        </div>

        <div>
          <label className="font-medium">Selling Price (₹)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label className="font-medium">Upload 5 Images</label>
          <ImageUploader onImagesChange={setImages} />
        </div>

        <p className="text-green-600 font-semibold">
          You’ll earn: {coins} AK Coins
        </p>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Upload ID
        </button>
      </form>
    </section>
  )
}

export default UploadIDForm

import { useState } from 'react'

const UploadForm = () => {
  const [form, setForm] = useState({
    level: '',
    price: '',
    region: '',
    images: []
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setForm({ ...form, images: files })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (parseInt(form.level) < 60) {
      alert('Level must be 60 or above to upload ID.')
      return
    }

    if (form.images.length !== 5) {
      alert('Please upload exactly 5 images.')
      return
    }

    setLoading(true)
    try {
      // Prepare form data for backend
      const data = new FormData()
      data.append('level', form.level)
      data.append('price', form.price)
      data.append('region', form.region)
      form.images.forEach((img, idx) => data.append('images', img))
      // Add userID (replace with actual user ID from context/auth)
      data.append('userID', localStorage.getItem('userID') || 'demoUserId')
      // For backend compatibility
      data.append('freeFireID', 'demoFFID')

      const res = await fetch('/api/freefireid/sell', {
        method: 'POST',
        body: data
      })
      const result = await res.json()
      if (res.ok) {
        setSuccess(true)
        alert(`Upload successful! Coins rewarded: ${result.reward || 0}`)
      } else {
        setError(result.error || 'Upload failed')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        placeholder="Free Fire Level"
        className="w-full p-2 border rounded"
        value={form.level}
        onChange={(e) => setForm({ ...form, level: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Price (₹)"
        className="w-full p-2 border rounded"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Region (India, Brazil, etc.)"
        className="w-full p-2 border rounded"
        value={form.region}
        onChange={(e) => setForm({ ...form, region: e.target.value })}
        required
      />

      <input
        type="file"
        multiple
        accept="image/*"
        className="w-full p-2"
        onChange={handleImageChange}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload ID'}
      </button>

      {success && <div className="text-green-600">Upload successful!</div>}
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}

export default UploadForm

// src/components/shared/ImageUploader.jsx
import { useState } from 'react'

const ImageUploader = ({ onImagesChange }) => {
  const [previews, setPreviews] = useState([])

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    const previewUrls = files.map(file => URL.createObjectURL(file))

    setPreviews(previewUrls)
    onImagesChange(files)
  }

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="w-full text-sm"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {previews.map((src, idx) => (
          <img key={idx} src={src} alt="Preview" className="rounded-md h-24 object-cover" />
        ))}
      </div>
    </div>
  )
}

export default ImageUploader

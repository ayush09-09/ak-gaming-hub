import { useState } from "react";

const ImageUploadPreview = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="border p-4 rounded-xl mt-6 text-center">
      <input type="file" accept="image/*" onChange={handleChange} className="mb-2" />
      {image && <img src={image} alt="Preview" className="max-w-full h-60 mx-auto rounded-lg shadow mt-2" />}
    </div>
  );
};

export default ImageUploadPreview;

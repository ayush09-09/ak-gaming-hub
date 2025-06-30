import React from "react";

const ImageUploader = ({ label, name, onChange }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type="file"
      name={name}
      accept="image/*"
      onChange={onChange}
      required
      className="w-full border p-2 rounded"
    />
  </div>
);

export default ImageUploader;

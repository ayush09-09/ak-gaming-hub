import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageUploader({ images, setImages }) {
  const onDrop = useCallback((acceptedFiles) => {
    const previews = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  }, [setImages]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*", multiple: true });

  return (
    <div className="p-4 border-dashed border-2 rounded-lg bg-gray-50 text-center">
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <p>📂 Drag & drop images here, or click to browse</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {images.map((img, i) => (
          <Zoom key={i}>
            <img
              src={img.preview}
              alt={`upload-${i}`}
              className="w-full h-32 object-cover rounded shadow hover:scale-105 transition-transform"
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
}

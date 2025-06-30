import axios from "axios";

const ReListButton = ({ id }) => {
  const handleRelist = async () => {
    await axios.post(`/api/listing/relist/${id}`);
    alert("ID relisted successfully!");
  };

  return (
    <button
      onClick={handleRelist}
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
    >
      Re-list ID
    </button>
  );
};

export default ReListButton;

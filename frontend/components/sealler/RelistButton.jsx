import axios from "axios";

export default function RelistButton({ id }) {
  const handleRelist = async () => {
    try {
      const res = await axios.post(`/api/id/relist/${id}`);
      alert("ID re-listed successfully!");
    } catch (err) {
      alert(err.response.data.msg || "Error while relisting");
    }
  };

  return (
    <button
      onClick={handleRelist}
      className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md shadow"
    >
      Re-list
    </button>
  );
}

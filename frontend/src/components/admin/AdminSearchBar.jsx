import React from "react";

const AdminSearchBar = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder || "Search..."}
    className="border px-3 py-2 rounded w-full mb-4"
  />
);

export default AdminSearchBar;

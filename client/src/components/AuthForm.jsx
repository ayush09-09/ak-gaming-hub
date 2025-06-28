import React, { useState } from "react";

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">{type === "login" ? "Login" : "Register"}</h2>

      {type === "register" && (
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;

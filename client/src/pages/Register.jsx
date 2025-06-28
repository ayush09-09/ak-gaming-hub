import React from "react";
import AuthForm from "../components/AuthForm";
import { apiRequest } from "../lib/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (formData) => {
    try {
      await apiRequest("/auth/register", "POST", formData);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message || "Registration Failed");
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
};

export default Register;

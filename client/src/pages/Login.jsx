import React from "react";
import AuthForm from "../components/AuthForm";
import { apiRequest } from "../lib/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const res = await apiRequest("/auth/login", "POST", formData);
      localStorage.setItem("token", res.token);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Login Failed");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;

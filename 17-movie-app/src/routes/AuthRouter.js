import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthRouter = ({ setToken }) => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginScreen setToken={setToken} />} />
      <Route path="/auth/register" element={<RegisterScreen setToken={setToken} />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AuthRouter;

import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { DashboardScreen, LoginScreen } from "../screens";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

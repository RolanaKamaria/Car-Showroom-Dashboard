import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Booking from "../pages/Booking";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/main-page" element={<MainPage />} />}
      />
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/bookings" element={<Booking />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;

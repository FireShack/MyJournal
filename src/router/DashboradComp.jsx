import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginComp } from "../components/auth/LoginComp";
import { HomeComp } from "../components/ui/HomeComp";
import { NavbarComp } from "../components/ui/NavbarComp";

export const DashboradComp = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="*" element={<HomeComp />} />
      </Routes>
    </>
  );
};

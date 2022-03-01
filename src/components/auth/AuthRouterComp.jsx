import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginComp } from "./LoginComp";
import { RegisterComp } from "./RegisterComp";

export const AuthRouterComp = () => {
  return (
    <div className="auth__main">
      <Routes>
        <Route exact path="*" element={<LoginComp />} />
        <Route exact path="register" element={<RegisterComp />} />
      </Routes>
    </div>
  );
};

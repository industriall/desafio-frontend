import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import { FormRegister } from "../components/FormRegister";

export function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </Router>
  );
}

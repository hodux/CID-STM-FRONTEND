import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../Pages/Home"
import Signin from "../Pages/SignIn";
import Signup from "../Pages/SignUp";

function AppRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </RouterRoutes>
  );
}

export default AppRoutes;

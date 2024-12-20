import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../pages/Home"
import Signin from "../pages/SignIn";
import Signup from "../pages/SignUp";
import MaxSequencesChart from "../pages/MaxSequencesChart"
import FullTripTimeChart from "../pages/FullTripTimeChart";
import SeatOccupancyChart from "../pages/SeatOccupancyChart";

function AppRoutes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} /> 
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/maxsequenceschart" element={<MaxSequencesChart />} />
      <Route path="/fullTripTimeChart" element={<FullTripTimeChart />} />
      <Route path="/seat-chart" element={<SeatOccupancyChart />} />
    </RouterRoutes>
  );
}

export default AppRoutes;

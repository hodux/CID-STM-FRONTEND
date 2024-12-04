import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

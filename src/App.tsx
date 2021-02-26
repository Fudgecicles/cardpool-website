import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingScreen from "./screens/LandingScreen";

import dotenv from "dotenv";

dotenv.config();

function App() {
  return (
    <div className="App">
      <LandingScreen />
    </div>
  );
}

export default App;

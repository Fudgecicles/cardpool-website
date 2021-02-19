import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import SignupConfirmation from "./screens/SignupConfirmation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignupConfirmation />
          </Route>
          <Route path="/">
            <LandingScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

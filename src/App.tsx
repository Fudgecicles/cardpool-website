import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import SignupConfirmation from "./screens/SignupConfirmation";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

import dotenv from "dotenv";

dotenv.config();

function App() {
  let x = 50;
  const y = 50;

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

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

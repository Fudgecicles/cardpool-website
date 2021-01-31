import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import landingImage from "./assets/landing.png";

function App() {
  return (
    <div className="App">
      <div className="Header-Full">
        <Container>
          <Navbar bg="light" expand="lg" className="App-Header">
            <Navbar.Brand>
              <h1 className="App-Brand">
                <span className="Card-Color">card</span>
                <span className="Pool-Color">pool</span>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="Collapse">
              <Nav className="App-Nav-Container">
                <Nav.Link href="home" className="App-Nav-Button">
                  Home
                </Nav.Link>
                <Nav.Link href="home" className="App-Nav-Button">
                  About
                </Nav.Link>
                <Nav.Link href="home" className="App-Nav-Button">
                  Team
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <div className="Landing-Screen">
        <div className="Horizontal-Container">
          <div className="Landing-Screen-Container">
            <div className="Text-Container">
              <h1 className="Landing-Screen-Text">
                Spend less time <span className="Card-Color">paying</span>{" "}
                <br />
                And more time <span className="Pool-Color">playing</span> <br />
                <br />
                <span className="Bold">
                  Instantly split payments <br />
                  with
                </span>{" "}
                <span className="Card-Color">card</span>
                <span className="Pool-Color">pool</span>
              </h1>
            </div>
          </div>
          <div className="Image-Container">
            <img
              src={landingImage}
              alt="swing"
              className="Landing-Screen-Image"
            />
          </div>
        </div>
        <div className="Signup-Container">
          <TextField margin = "normal" label="Email" variant="filled" className="Email-Input"/>
          <Button variant = "contained" className="Signup-Button">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

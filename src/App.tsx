import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Colors from "./config/Colors";
import FeatureOne from "./components/static/FeatureOne";
import FeatureTwo from "./components/static/FeatureTwo";
import FeatureThree from "./components/static/FeatureThree";
import Team from "./components/Team";

const FeatureContainer = styled.div`
  background-color: ${Colors.sand};
  display: flex;
  padding-top: 100px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
`;

const CenteredText = styled.h2`
  text-align: center;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <FeatureContainer>
        <Container>
          <CenteredText>A modern way to split payments</CenteredText>
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
        </Container>
      </FeatureContainer>
      <Team />
    </div>
  );
}

export default App;

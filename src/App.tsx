import React, { useRef } from "react";
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
import Footer from "./components/Footer";

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
  const aboutRef = useRef<HTMLDivElement>();
  const teamRef = useRef<HTMLDivElement>();

  return (
    <div className="App">
      <Navbar about={aboutRef} team={teamRef} />
      <Banner />
      <FeatureContainer ref={aboutRef as any} id="about">
        <Container>
          <CenteredText>A modern way to split payments</CenteredText>
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
        </Container>
      </FeatureContainer>
      <Team ref={teamRef as any} />
      <Footer />
    </div>
  );
}

export default App;

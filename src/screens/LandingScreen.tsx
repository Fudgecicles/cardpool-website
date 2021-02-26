import FeatureOne from "../components/static/FeatureOne";
import FeatureTwo from "../components/static/FeatureTwo";
import FeatureThree from "../components/static/FeatureThree";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import styled from "styled-components";
import Colors from "../config/Colors";

import React, { useRef } from "react";
import FeatureFour from "../components/static/FeatureFour";

const FeatureContainer = styled.div`
  background-color: ${Colors.sand};
  display: flex;
  flex-direction: column;
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

function LandingScreen() {
  const aboutRef = useRef<HTMLDivElement>();
  const teamRef = useRef<HTMLDivElement>();
  return (
    <>
      <Navbar about={aboutRef} team={teamRef} />
      <Banner />
      <FeatureContainer ref={aboutRef as any} id="about">
        <CenteredText>A modern way to split payments</CenteredText>
        <FeatureOne />
        <FeatureFour />
        <FeatureThree />
        <FeatureTwo />
      </FeatureContainer>
      <Team ref={teamRef as any} />
      <Footer />
    </>
  );
}

export default LandingScreen;

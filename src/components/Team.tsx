import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import steven from "../assets/me.jpeg";
import lain from "../assets/lain.jpg";
import Colors from "../config/Colors";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";
import TeamMember from "./TeamMember";

const CenteredText = styled.h2`
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
`;

const TeamBackground = styled.div`
  background-color: ${Colors.blue};
`;

const TeamLayout = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;

function Team() {
  return (
    <>
      <WaveTop></WaveTop>
      <TeamBackground>
        <Container>
          <CenteredText>An award winning team</CenteredText>
          <TeamLayout>
            <TeamMember
              borderColor={Colors.card}
              image={steven}
              name="Steven Li"
              body={
                <>
                  <h4>University of Southern California </h4>
                  <h4>Sledgehammer Games</h4>
                  <h4>PAX 10 2015</h4>
                </>
              }
            />
            <TeamMember
              borderColor={Colors.pool}
              image={lain}
              name="McLean Goldwhite"
              body={
                <>
                  <h4>University of Southern California </h4>
                  <h4>Pinscreen</h4>
                  <h4>BAFTA Ones to Watch 2016</h4>
                </>
              }
            />
          </TeamLayout>
        </Container>
      </TeamBackground>
      <WaveBottom />
    </>
  );
}

export default Team;

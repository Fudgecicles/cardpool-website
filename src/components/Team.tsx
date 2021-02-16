import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import steven from "../assets/me.jpeg";
import lain from "../assets/lain.jpg";
import Colors from "../config/Colors";
import WaveTop from "./WaveTop";
import WaveBottom from "./WaveBottom";

const CenteredText = styled.h2`
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
`;

const TeamBackground = styled.div`
  background-color: ${Colors.blue};
`;

const MemberImage = styled.img<ColorProp>`
  border-width: 10px;
  border-style: solid;
  border-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  margin-bottom: 25px;
  width: 300px;
`;

const TeamLayout = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

type ColorProp = {
  backgroundColor: string;
};

function Team() {
  return (
    <>
      <WaveTop></WaveTop>
      <TeamBackground>
        <Container>
          <CenteredText>An award winning team</CenteredText>
          <TeamLayout>
            <MemberContainer>
              <MemberImage backgroundColor={Colors.card} src={steven} />
              <h3>Steven Li</h3>
              <h4>University of Southern California</h4>
              <h4>Sledgehammer Games</h4>
              <h4>PAX 10 Featured Developer</h4>
            </MemberContainer>
            <MemberContainer>
              <MemberImage backgroundColor={Colors.pool} src={lain} />
              <h3>McLean Goldwhite</h3>
              <h4>University of Southern California</h4>
              <h4>Pinscreen</h4>
              <h4>BAFTA Ones to Watch 2016</h4>
            </MemberContainer>
          </TeamLayout>
        </Container>
      </TeamBackground>
      <WaveBottom />
    </>
  );
}

export default Team;

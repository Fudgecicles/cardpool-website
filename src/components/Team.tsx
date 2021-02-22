import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import steven from "../assets/me.jpeg";
import lain from "../assets/lain.jpg";
import Colors from "../config/Colors";
import WaveBox from "./WaveBox";
import TeamMember from "./TeamMember";
import useIsMobile from "../hooks/UseIsMobile";
import pax10 from "../assets/logo-pax10.png";
import imagineCup from "../assets/Imaginecup-logo.png";
import tacobell from "../assets/tacobell.png";
import megabooth from "../assets/megabooth.png";
import dreamhack from "../assets/dreamhack.png";
import sxsw from "../assets/sxsw.png";
import bafta from "../assets/bafta.png";
import gameAwards from "../assets/the-game-awards.png";

const CenteredText = styled.h2`
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
`;

const TeamBackground = styled.div`
  background-color: ${Colors.blue};
  padding-bottom: 50px;
`;

const TeamLayout = styled.div<LayoutProps>`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

const AwardsLayout = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AwardImage = styled.img<ImageProps>`
  margin: 20px;
  padding: ${(props) => props.padding};
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;

type LayoutProps = {
  mobile: boolean;
};

type ImageProps = {
  padding?: string;
};

const Team = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const mobile = useIsMobile();

  return (
    <>
      <WaveBox upright = {true} foreground={Colors.blue} background={Colors.sand} foregroundPrev={Colors.wetSand}/>
      <TeamBackground ref={ref}>
        <Container>
          <CenteredText>An award winning team</CenteredText>
          <TeamLayout mobile={mobile}>
            <TeamMember
              borderColor={Colors.card}
              image={steven}
              name="Steven Li"
              body={
                <>
                  <h4>University of Southern California </h4>
                  <h4>Sledgehammer Games</h4>
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
                </>
              }
            />
          </TeamLayout>
          <CenteredText>Our work has been featured in:</CenteredText>
          <AwardsLayout>
            <AwardImage padding={"25px"} src={pax10} alt="pax 10" />
            <AwardImage src={imagineCup} alt="imagine cup" />
            <AwardImage src={tacobell} alt="taco bell" />
            <AwardImage src={megabooth} alt="indie mega booth" />
            <AwardImage src={dreamhack} alt="dreamhack" />
            <AwardImage padding={"20px"} src={sxsw} alt="sxsw" />
            <AwardImage src={bafta} alt="bafta" />
            <AwardImage src={gameAwards} alt="the game awards" />
          </AwardsLayout>
        </Container>
      </TeamBackground>
    </>
  );
});

export default Team;

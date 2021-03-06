import React from "react";
import landingImage from "../assets/landing.png";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CardStyled from "./CardText";
import PoolStyled from "./PoolText";
import LogoText from "./LogoText";
import Colors from "../config/Colors";
import useIsMobile from "../hooks/UseIsMobile";
import Signup from "./Signup";
import WaveBox from "./WaveBox";

const LandingScreen = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.blue};
`;

const TextAndImageContainer = styled.div<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: ${(props) => (props.mobile ? "2vh" : "15vh 0 15vh 0")};
  text-align: ${(props) => (props.mobile ? "center" : "left")};
  background-color: ${Colors.blue};
`;

const TextContainer = styled.div<LayoutProps>`
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: ${(props) => (props.mobile ? "0" : "0")};
`;

const BannerText = styled.h1`
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ImageContainer = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: ${(props) => (props.mobile ? "center" : "flex-end")};
  display: flex;
  padding-left: ${(props) => (props.mobile ? "100px" : "0")};
  padding-right: ${(props) => (props.mobile ? "100px" : "0")};
  margin-top: ${(props) => (props.mobile ? "100px" : "0")};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: scale-down;
`;

const SignupContainer = styled.div<LayoutProps>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.mobile ? "center" : "left")};
`;

type LayoutProps = {
  mobile: boolean;
};

function Banner() {
  const mobile = useIsMobile();

  return (
    <LandingScreen>
      <Container>
        <TextAndImageContainer mobile={mobile}>
          <TextContainer mobile={mobile}>
            <BannerText>
              Spend less time <CardStyled>paying</CardStyled> <br />
              And more time <PoolStyled>playing</PoolStyled> <br />
              <br />
              {"Instantly "}
              <BoldText>
                split payments <br />
              </BoldText>
              {"with "}
              <LogoText></LogoText>
              <br />
              <br />
              <SignupContainer mobile={mobile}>
                <Signup displayEmail>Sign Up</Signup>
              </SignupContainer>
            </BannerText>
          </TextContainer>
          {!mobile && (
            <ImageContainer mobile={mobile}>
              <Image src={landingImage} alt="swing" />
            </ImageContainer>
          )}
        </TextAndImageContainer>
      </Container>
      <WaveBox
        upright={false}
        waterColor={Colors.blue}
        sandColor={Colors.sand}
        wetSandColor={Colors.wetSand}
      />
    </LandingScreen>
  );
}

export default Banner;

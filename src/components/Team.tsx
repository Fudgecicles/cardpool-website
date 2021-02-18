import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import steven from "../assets/me.jpeg";
import lain from "../assets/lain.jpg";
import Colors from "../config/Colors";
import WaveTop from "./WaveTop";
import TeamMember from "./TeamMember";
import useIsMobile from "../hooks/UseIsMobile";

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
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

type LayoutProps = {
  mobile: boolean;
};

const Team = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const mobile = useIsMobile();

  return (
    <>
      <WaveTop></WaveTop>
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
    </>
  );
});

export default Team;
